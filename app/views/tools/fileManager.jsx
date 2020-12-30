import React,{useState,useEffect,useCallback} from 'react';

import {utils,use} from '@common';

import {Row,Col,Input,Select,InputNumber,Switch,Button} from 'antd';

import {themeList} from '@app/configs/theme';


const Index=props=>{
  
  return <div style={{color:'#333',backgroundColor:'#fff',padding:'10px 20px'}}>
    <div>
      <h4>读取文件信息</h4>
    </div>
    <div>
      <h4>读取文件</h4>
    </div>
    <div>
      <h4>写入文件</h4>
    </div>
    <div>
      <h4>拷贝文件（夹）</h4>
    </div>
    <div>
      <h4>删除文件（夹）</h4>
    </div>
    <div>
      <h4>创建文件</h4>
    </div>
    <div>
      <h4>创建文件夹</h4>
    </div>
    <div>
      <h4>下载文件</h4>
    </div>
  </div>;
};

export default Index;



































