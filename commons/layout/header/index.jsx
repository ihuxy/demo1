import {useState,useEffect} from 'react';
import {message} from 'antd';
import {utils} from '@common';
import {leftNav,rightNav} from '@app/configs/nav';
import HoriMenu from '../components/horiMenu';
import NavList from '../components/navList';
import './index.less';
const {storage}=utils;

const Index=props=>{
  const {handleCollapse,collapsed,switchTheme,navMenu,user,theme,store}=props;
  const langCfg=store?.getState('langCfg')??{};
  const {title}=langCfg;
  const [leftList,setLeftList]=useState(leftNav({langCfg,themeKey:theme.key}));
  const [rightList,setRightList]=useState(rightNav({langCfg,user:user?.result}));
  useEffect(()=>{
    setLeftList(leftNav({langCfg,themeKey:theme.key}));
    setRightList(rightNav({langCfg,user:user?.result}));
  },[langCfg,user]);
  useEffect(()=>{
    const {subscribe,setState}=store||{};
    if(subscribe){
      subscribe('update-nav',result=>{
        const {type,data}=result;
        if(type==='left'){
          setLeftList(data);
          setState({'nav-data':{leftList:data}});
        }
        if(type==='right'){
          setRightList(data);
          setState({'nav-data':{rightList:data}});
        }
      });
      setState({'nav-data':{leftList,rightList}});
    }
  },[]);

  const handleNavClick=item=>{
    if(item.type==='language'){
      props.store.setState({'change-language':item.key});
    }
    if(item.type==='logout'){
      message.success('logout！');
      storage.rm('token');
      props.router.push(item.path);
    }
    if(item.type==='theme'){
      switchTheme(item.key);
    }
    if(item.type==='collapse'){
      handleCollapse();
    }
    if(typeof item.handle==='function'){
      item.handle(item);
    }
  };

  return <div className="header">
    <div className="header-wrap">
      <div className="banner">
        {/* <div className="logo"><img src={logo} alt="logo" /></div> */}
        <div className="title">{title}</div>
      </div>
      <div className="nav">
        <div className="nav-wrap">
          <div className="nav-left">
            <NavList list={leftList} collapsed={collapsed} click={handleNavClick} />
          </div>
          {navMenu?.length?<HoriMenu menu={navMenu} />:null}
          <div className="nav-right">
            <NavList list={rightList} click={handleNavClick} />
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default Index;


