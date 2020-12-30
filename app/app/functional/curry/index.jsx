import React,{useEffect,useCallback} from 'react';

import {utils} from '@common';
const {curry,compose}=utils;

import './index.less';

const add=(a,b,c,d,e)=>a+b+c+d+e;

const getName=id=>id+'-name';
const getAge=name=>name.split('-')[0];

const Index=props=>{
  const addResult=curry(add)(1)(3)(5)(7)(9);
  const getAgeById=compose(getAge,getName);
  const age1=getAgeById(18);
  const age2=getAgeById(30);
  return <div className="page">
    <div>
      <p>const add=(a,b,c,d,e)=>a+b+c+d+e;</p>
      <span>curry(add)(1)(3)(5)(7)(9): </span><span>{addResult}</span>
    </div>
    <div>
      <p>const getName=id=>id+'-name';</p>
      <p>const getAge=name=>name.split('-')[0];</p>
      <p>const getAgeById=compose(getAge,getName);</p>
      <p>const age1=getAgeById(18): {age1}</p>
      <p>const age2=getAgeById(30): {age2}</p>
    </div>
  </div>;
};

export default Index;

















