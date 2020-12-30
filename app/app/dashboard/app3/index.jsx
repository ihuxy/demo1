import React,{Suspense} from 'react';

import './index.less';

import {components} from '@common';
const {Spinner}=components;

import {fetchApp1,fetchApp2} from './api';

const Test=()=>{
  const result=fetchApp1.read();
  return <div style={{backgroundColor:'green',width:'50%',float:'left'}}><Suspense fallback={<Spinner />}><Test1 /></Suspense></div>;
};
const Test1=()=>{
  const result=fetchApp2.read();
  return <div style={{border:'2px solid #333'}}>{result.msg}</div>;
};

const Index=props=>{
  const user=props.store.getState('user');
  const users=props.store.getState('users');
  // console.log(12,user,users,props);
  return <div className="page">
    <h1>{user?.data.name}</h1>
    <p>{props.params?.app2Pass}</p>
    <div>
      <div style={{backgroundColor:'red',width:'50%',float:'left'}}><Suspense fallback={<Spinner />}><Test /></Suspense></div>
    </div>
  </div>;
};

export default Index;

















