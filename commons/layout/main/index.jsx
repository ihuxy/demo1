import {useEffect,useRef} from 'react';
import {Link,utils} from '@common';
import Menu from '../menu';
import './index.less';
const {addClass,removeClass}=utils;
// const getSecoudMenu=menu=>menu.find(v=>v.open)?.children??[];
export const breadcrumb=(current,bread)=><div className="breadcrumb">
  <span style={{float:'left'}}>{bread}：</span>
  <ul>
    {current.filter(v=>v.name).map(v=>v.path!=='/'&&<li key={v.path}><Link to={v.path}>{v.name}</Link></li>)}
  </ul>
</div>;

const time=350;
const Index=props=>{
  const {menu,current,children,collapsed,handleCollapse,store}=props;
  const curPath=current.slice(-1)[0]?.path;
  const langCfg=store?.getState('langCfg')??{};
  const {main:{bread}}=langCfg;
  const hasMenu=menu?.length;
  const style=hasMenu?null:{paddingLeft:0};

  const viewRef=useRef();
  const pathRef=useRef(curPath);
  const timer=useRef();
  useEffect(()=>{
    const curPath=current.slice(-1)[0]?.path;
    if(curPath!==pathRef.current){
      pathRef.current=curPath;
      addClass(viewRef.current,'ani-in');
      timer.current=setTimeout(()=>{
        removeClass(viewRef.current,'ani-in');
      },time);
    }
    return ()=>clearTimeout(timer.current);
  },[current]);
  return <div className="frame-container">
    {
      hasMenu?<aside className="frame-aside">
        <Menu menu={menu} curPath={curPath} collapsed={collapsed} handleCollapse={handleCollapse} />
      </aside>:null
    }
    <div className="frame-view" style={style}>
      <div className="page-container">
        {breadcrumb(current||[],bread)}
        <div className="content" ref={viewRef}>
          {children}
        </div>
      </div>
    </div>
  </div>;
};

export default Index;



