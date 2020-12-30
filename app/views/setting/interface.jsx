import React,{useState,useEffect,useCallback} from 'react';

import {utils,use} from '@common';

import {Row,Col,Input,Select,InputNumber,Switch,Button} from 'antd';

import {themeList} from '@app/configs/theme';

const {storage}=utils;

const {useDebounce}=use;

// 接口管理

const delay=500;

const labelStyle={
  display:'block',
  textAlign:'right',
  lineHeight:'32px',
};

const selectAfter=<Select defaultValue="px">
  <Select.Option value="px">px</Select.Option>
  <Select.Option value="%">%</Select.Option>
</Select>;

const Index=props=>{
  const localTheme=storage.get('theme')?.list||themeList[0].list;
  const [theme,setTheme]=useState(localTheme);
  const [size,setSize]=useState('10');
  const [menuType,setMenuType]=useState(false);
  const changeFontSize=useDebounce(value=>document.documentElement.style.setProperty('--rootSize',value),delay);
  const changeLayout=useDebounce(value=>props.store.setState({'set-theme':{theme:value}}),delay);
  const changeTheme=(e,item)=>{
    // e.persist();
    item.value=e.target.value;
    setTheme([...theme]);
    changeLayout([...theme]);
  };
  const changeFont=value=>{
    // const {value}=e.target;
    setSize(value);
    changeFontSize(`${value*100/16}%`);
  };
  const saveConfig=()=>{
    
  };
  const sizes=theme.filter(v=>v.type==='text');
  const colors=theme.filter(v=>v.type==='color');
  return <div style={{color:'#333',backgroundColor:'#fff',padding:'10px 20px'}}>
    <Button type="primary" onClick={saveConfig}>保存</Button>
    <div style={{margin:'15px 0'}}>
      <span>切换横纵菜单：</span>
      <Switch checkedChildren="横" unCheckedChildren="纵" checked={menuType} onChange={type=>{
        setMenuType(type);
        props.store.setState({'set-menuType':{menuType:type}});
      }} />
      {/* <button onClick={e=>props.store.setState({'set-menuType':{menuType:menuType=!menuType}})}>切换</button> */}
    </div>
    <div style={{margin:'15px 0'}}>
      <span>字体比例大小：</span>
      <InputNumber /* type="text" */ value={size} onChange={e=>changeFont(e)} />
    </div>
    <Row gutter={[8,8]}>
      <Col span={10}>
        <h2>大小设计</h2>
        {
          sizes.map(v=><Row gutter={[8,6]} key={v.label}>
            <Col span={10}><span style={labelStyle}>{v.label}：</span></Col>
            <Col span={10}><Input type={v.type} value={v.value} onChange={e=>changeTheme(e,v)} /></Col>
          </Row>)
        }
      </Col>
      <Col span={10}>
        <h2>颜色设计</h2>
        {
          colors.map(v=><Row gutter={[8,6]} key={v.label}>
            <Col span={10}><span style={labelStyle}>{v.label}：</span></Col>
            <Col span={10}><Input type={v.type} value={v.value} onChange={e=>changeTheme(e,v)} /></Col>
          </Row>)
        }
      </Col>
    </Row>
    {/* {
      theme.map(v=><div key={v.key}>
        <span>{v.label}：</span>
        <input type={v.type} value={v.value} onChange={e=>changeTheme(e,v)} />
      </div>)
    } */}
  </div>;
};

export default Index;



































