import {useEffect,useRef} from 'react';
import {Link} from '@common';

const ulStyles={
  overflow:'hidden',
  maxHeight:'var(--ul-max-height)',
  transition:'max-height .3s',
};
const RenderChild=({item,children})=>{
  const {uuid,open}=item;
  const ul=useRef();
  const isInit=useRef(true);
  useEffect(()=>{
    const el=ul.current;
    if(isInit.current){
      const height=open?`${el.scrollHeight}px`:'0px';
      // el.style.transition='none';
      el.style.setProperty('--ul-max-height',height);
      isInit.current=false;
    }else{
      const initH=open?'0px':`${el.scrollHeight}px`;
      el.style.setProperty('--ul-max-height',initH);
      setTimeout(()=>{
        const height=open?`${el.scrollHeight}px`:'0px';
        // el.style.transition='';
        el.style.setProperty('--ul-max-height',height);
      },5);
    }
  },[open,item.children?.length]);
  useEffect(()=>{
    // 多层级触发
    if(uuid){
      const el=ul.current;
      el.style.setProperty('--ul-max-height','none');
    }
  },[uuid]);
  return <ul ref={ul} style={ulStyles}>{children}</ul>;
};

export const render=(data,toggle)=>data.map(v=>{
  const hasChildren=v.children?.length;
  const active=v.active?'active':'';
  if(hasChildren){
    return <li key={v.name} onClick={e=>toggle(e,v)} has-children="true" className={v.open?'open':''}>
      <Link to={v.path} className={active} preventDefault>
        {typeof v.icon==='string'?<i className={v.icon} />:(v.icon||null)}
        <span className="txt has-right-icon">{v.name}</span>
        <i className="coll-ico" />
      </Link>
      <RenderChild item={v}>{render(v.children,toggle)}</RenderChild>
    </li>;
  }
  return <li key={v.name}>
    <Link to={v.path} stopPropagation className={active}>
      {typeof v.icon==='string'?<i className={v.icon} />:(v.icon||null)}
      <span className="txt">{v.name}</span>
    </Link>
  </li>;
});

export const renderCollapsed=data=>data.map(v=>{
  const hasChildren=v.children?.length;
  const active=v.active?'active':'';
  if(hasChildren){
    return <li key={v.name} has-children="true">
      <Link to={v.path} className={active} preventDefault>
        {typeof v.icon==='string'?<i className={v.icon} />:(v.icon||null)}
        <span className="txt has-right-icon">{v.name}</span>
        <i className="coll-ico" />
      </Link>
      <ul>{renderCollapsed(v.children)}</ul>
    </li>;
  }
  return <li key={v.name}>
    <Link to={v.path} stopPropagation className={active}>
      {typeof v.icon==='string'?<i className={v.icon} />:(v.icon||null)}
      <span className="txt">{v.name}</span>
    </Link>
  </li>;
});

