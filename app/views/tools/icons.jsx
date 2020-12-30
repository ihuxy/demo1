import React,{useState,useEffect,useCallback} from 'react';

import {utils,use} from '@common';

import {Row,Col,Input,Select,InputNumber,Switch,Button} from 'antd';

import {themeList} from '@app/configs/theme';


const Index=props=>{
  
  return <div style={{color:'#333',backgroundColor:'#fff',padding:'10px 20px'}}>
    <div>
      <h4>rgb转16进制</h4>
    </div>
    <div>
      <h4>16转rgb进制</h4>
    </div>
    <div>
      <h4>选取颜色</h4>
    </div>
  </div>;
};

export default Index;



































