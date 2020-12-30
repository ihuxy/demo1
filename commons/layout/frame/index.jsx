import {useState,useEffect} from 'react';
// import Topbar from '../topbar';
import Header from '../header';
import Footer from '../footer';
import Main from '../main';
import {utils} from '@common';
import getThemeList from '@app/configs/theme';
import './index.less';
const {storage,a2o}=utils;

const formatMenu=(menu,curPath,type='sideMenu',cb=null)=>{
  const menuConfig={
    sideMenu:null,
    navMenu:null,
  };
  if(type==='navMenu'){
    menuConfig[type]=menu.length>1?menu:menu[0]?.children;
    return menuConfig;
  }
  const navMenu=menu.map(v=>{
    const {children,...rest}=v;
    if(v.path===curPath){
      menuConfig.sideMenu=children;
    }
    return rest;
  });
  menuConfig.navMenu=menu.length>1?navMenu:null;
  return menuConfig;
};

const Index=props=>{
  const {menu,current,store}=props;
  const curPath=current.slice(-1)[0]?.path;
  const langCfg=store?.getState('langCfg')??{};
  const themeList=getThemeList(langCfg.theme);
  const [menuType,setMenuType]=useState('sideMenu');
  const [collapsed,setCollapsed]=useState(false);
  const [theme,setTheme]=useState(storage.get('theme')||themeList[3]);
  // const [themeKey,setThemeKey]=useState('dark');
  useEffect(()=>{
    if(props.store?.subscribe){
      const {subscribe}=props.store;
      subscribe('set-theme',result=>{
        const list=result.theme;
        const newTheme={
          name:'自定义',
          key:'custom',
          list,
        };
        storage.set('theme',newTheme);
        setTheme(newTheme);
      });
      subscribe('set-menuType',result=>setMenuType(result.menuType?'navMenu':'sideMenu'));
    }
  },[]);
  const switchTheme=type=>{
    const current=themeList.find(v=>v.key===type)||themeList[3];
    storage.set('theme',current);
    setTheme(current);
  };
  const handleCollapse=status=>setCollapsed(prev=>status==null?!prev:status);
  const {sideMenu,navMenu}=formatMenu(menu,current[0]?.path,menuType);

  return <div className={`frame${collapsed?' collapsed':''}`} style={a2o(theme.list)}>
    <header className="frame-header">
      {/* <Topbar {...props} /> */}
      <Header {...props} navMenu={navMenu} handleCollapse={handleCollapse} collapsed={collapsed} switchTheme={switchTheme} theme={theme} />
    </header>
    <main className="frame-main">
      <Main {...props} curPath={curPath} menu={sideMenu} collapsed={collapsed} handleCollapse={handleCollapse} />
    </main>
    <footer className="frame-footer">
      <Footer />
    </footer>
  </div>;
};

export default Index;

