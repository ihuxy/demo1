import React,{useState,useEffect,useCallback,useRef} from 'react';

import {utils} from '@common';
const {isElement,getType,sleep}=utils;

import './index.less';

let i=0;

const style={
  padding:'20px',
  border:'1px solid gray',
};
const fl={
  padding:'20px',
  border:'1px solid gray',
  float:'right',
};

const Index=props=>{
  const ref=useRef(null);
  const [state,setState]=useState('');
  useEffect(()=>{
    
  },[]);
  return <div ref={ref} className="page">
    {state}
    <div>
      {/* <div style={fl}>bbb</div>
      <div style={style}>aaa</div> */}
    </div>
  </div>;
};

export default Index;

















