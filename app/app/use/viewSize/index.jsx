import React,{useEffect,useState,Suspense} from 'react';
import {use} from '@common';
const {useWinResize,useEleResize}=use;

const responsiveConfig={
  xl:1200,
  lg:992,
  md:768,
  sm:576,
  xs:0,
};
const fz={
  xl:'3.2rem',
  lg:'2.8rem',
  md:'2.2rem',
  sm:'1.6rem',
  xs:'1.2rem',
};

const style={
  height:'calc(100vh - 427px)',
  lineHeight:'calc(100vh - 427px)',
  width:'100%',
  backgroundColor:'#ccc',
  textAlign:'center',
};

const Index=props=>{
  const {width,height}=useWinResize();
  const keys=Object.keys(responsiveConfig);
  let current;
  for(let i=0,l=keys.length;i<l;i++){
    const key=keys[i];
    if(width>responsiveConfig[key]){
      current=key;
      break;
    }
  }
  return <div className="page">
    <div style={{padding:'15px'}}>
      <div style={{padding:'10px 0'}}>
        <section style={{fontSize:'1.8rem',padding:'10px 0'}}>winResize</section>
        <div>width: {width}</div>
        <div>height: {height}</div>
      </div>
      <div style={{padding:'10px 0'}}>
        <section style={{fontSize:'1.8rem',padding:'10px 0'}}>responsive</section>
        currentMode: {current}
      </div>
      <div style={{...style,fontSize:fz[current]}}>
        responsive 响应式 font-size: {fz[current]}
      </div>
    </div>
  </div>;
};

export default Index;

















