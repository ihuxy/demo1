import React,{useState,useEffect,useCallback} from 'react';

import {utils,use,components} from '@common';

import {Row,Col,Input,Select,InputNumber,Switch,Button} from 'antd';

import {themeList} from '@app/configs/theme';

const {HandleError}=components;
const {useDebounce}=use;
const {str2React}=utils;

const func=str=>{
  try{
    console.log(22,new Function(str)());
    return new Function(str)();
  }catch(err){
    console.log(33,err);
    return err;
  }
};

const test=`<div>
  <h4>code str</h4>
  <Row gutter={8}>
    <Col span={12}>
      <Input.TextArea />
    </Col>
    <Col span={12}>
      1211
    </Col>
  </Row>
</div>`;

const Index=props=>{
  const [value,setValue]=useState('');
  const [result,setResult]=useState('');

  const changeDebounce=useDebounce(value=>{
    const result=func(value);
    console.log(11,result);
    setResult(result);
  },2000);

  const onChange=value=>{
    setValue(value);
    changeDebounce(value);
  };
  
  return <div style={{color:'#333',backgroundColor:'#fff',padding:'10px 20px'}}>
    <div>
      <h4>读取文件</h4>
      <Row gutter={8}>
        <Col span={12}>
          <Input.TextArea value={value} onChange={e=>onChange(e.target.value)} />
        </Col>
        <Col span={12}>
          {result}
        </Col>
      </Row>
    </div>
    {str2React(test)}
    <div dangerouslySetInnerHTML={{__html:test}} />
  </div>;
};

export default Index;



































