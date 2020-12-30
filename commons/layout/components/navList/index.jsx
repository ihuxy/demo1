import {useState,useRef,useMemo,useEffect} from 'react';
import {utils,use} from '@common';
const {traverItem}=utils;
const {useClickAway,useUpdate}=use;

const NavItem=({click,item,collapsed})=>{
  const navRef=useRef();
  const [open,setOpen]=useState(false);
  const {Custom,img,name,icon,children,Ricon,active,arrowDir}=item;
  const hasChildren=children?.length;
  useClickAway(navRef,e=>setOpen(false));
  const toggleNav=(e,item)=>{
    // e.stopPropagation();
    setOpen(prev=>!prev);
    click(item);
  };
  const itemClick=(e,item,isChild=false)=>{
    setOpen(false);
    click(item,isChild);
  };
  const ri=Ricon===true?<i className={`huxy-angle-${open?'top':'bt'}`} />:(Ricon?<Ricon status={open} />:null);
  const itemEl=Custom?<Custom status={collapsed} />:img?<div className="avatar">
    <img src={img} alt="avatar" />
    {name?<span className="txt">{name}</span>:null}
    {ri}
  </div>:<>
    {typeof icon==='string'?<i className={icon} />:(icon||null)}
    {name?<span className="txt">{name}</span>:null}
    {ri}
  </>;
  return hasChildren?<li ref={navRef}>
    <a onClick={e=>toggleNav(e,item)} className={active?'active':''}>{itemEl}</a>
    <ul className={`huxy-arrow-${arrowDir||'rt'}${open?' show':''}`}>
      {
        children.map(v=><li key={v.name}>
          <a onClick={e=>itemClick(e,v,true)} className={v.active?'active':''}>
            {typeof v.icon==='string'?<i className={v.icon} />:(v.icon||null)}
            <span style={{display:'inline-block'}}>{v.name}</span>
          </a>
        </li>)
      }
    </ul>
  </li>:<li>
    <a onClick={e=>itemClick(e,item)} className={active?'active':''}>{itemEl}</a>
  </li>;
};
const Index=({list,click,collapsed})=>{
  const data=useMemo(()=>list,[list]);
  const rerender=useUpdate();
  const updateList=item=>{
    const newData=traverItem(v=>{
      if(item.name===v.name){
        v.active=!item.active;
      }else{
        v.active=false;
      }
    })(data);
    rerender();
  };
  const handleClick=(item,update)=>{
    if(update){
      updateList(item);
    }
    click(item);
  };
  return <ul>
    {
      data.map(v=><NavItem key={v.name} click={handleClick} item={v} collapsed={collapsed} />)
    }
  </ul>;
};

export default Index;


