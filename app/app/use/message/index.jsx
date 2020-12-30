import React,{useState,useEffect,useCallback} from 'react';
import {utils} from '@common';
const {sleep}=utils;
import './index.less';

const msgs=[
  {
    key:'tc',
    value:'top-center message',
  },
  {
    key:'tr',
    value:'top-right message',
  },
  {
    key:'tl',
    value:'top-left message',
  },
  {
    key:'bc',
    value:'bottom-center message',
  },
  {
    key:'br',
    value:'bottom-right message',
  },
  {
    key:'bl',
    value:'bottom-left message',
  },
];

const Index=props=>{
  const [msg,setMsg]=useState({});
  useEffect(()=>{

  },[]);
  const setPos=async value=>{
    if(!msg[value]){
      msg[value]=true;
      setMsg({...msg});
      clearMsg(value);
    }
  };
  const clearMsg=value=>{
    setTimeout(()=>{
      msg[value]=false;
      setMsg({...msg});
    },3000);
  };
  const style={
    padding:'10px 15px',
  };
  return <div className="page icon-list">
    <div className="notify">
      {
        msgs.map(v=><button key={v.key} onClick={()=>setPos(v.key)}>{v.key}</button>)
      }
    </div>
    <div>
      {
        msgs.map(v=>{
          return msg[v.key]?<div key={v.key} className={`notify ${v.key}`}>
            <div style={style}><span className="ico-check" style={{marginRight:'6px',color:'#00b4cf'}} /><span>{v.value}</span></div>
          </div>:null;
        })
      }
    </div>
  </div>;
};

export default Index;

















