import React,{useState,useEffect,useCallback} from 'react';

import {utils,use,components} from '@common';

import {Row,Col,Input,Select,InputNumber,Switch,Button} from 'antd';

const {ErrorBoundary,HandleError}=components;

const {loadError}=utils;

const containerStyles={
  color:'#333',
  backgroundColor:'#fff',
  padding:'10px 15px',
  height:'100%',
};

const Temp=({state,name})=><div>{state[name]}</div>;

const EB1=()=>{
  return <div style={containerStyles}>
    <h2>loadError</h2>
    <div>
      {loadError({error:new Error('loadError')})}
    </div>
  </div>;
};
const EB2=()=>{
  return <div style={containerStyles}>
    <h2>ErrorBoundary</h2>
    <ErrorBoundary fallback={(error,info)=>loadError({error,info})}>
      <Temp state={null} name="eb2" />
    </ErrorBoundary>
  </div>;
};
const EB3=()=>{
  const [state,setState]=useState({eb3:'eb3'});
  return <div style={containerStyles}>
    <div style={{overflow:'hidden'}}>
      <h2 style={{float:'left'}}>ErrorBoundary</h2>
      <Button style={{float:'right'}} type="primary" onClick={()=>setState(null)}>error</Button>
    </div>
    <ErrorBoundary fallback={(error,info)=>loadError({error,info})}>
      <Temp state={state} name="eb3" />
    </ErrorBoundary>
  </div>;
};
const EB4=()=>{
  return <div style={containerStyles}>
    <h2>HandleError</h2>
    <HandleError>
      <Temp state={null} name="eb4" />
    </HandleError>
  </div>;
};

const Index=props=>{
  return <div>
    <Row gutter={[12,12]}>
      <Col span={12}>
        <EB1 />
      </Col>
      <Col span={12}>
        <EB2 />
      </Col>
    </Row>
    <Row gutter={[12,12]}>
      <Col span={12}>
        <EB3 />
      </Col>
      <Col span={12}>
        <EB4 />
      </Col>
    </Row>
  </div>;
};

export default Index;



































