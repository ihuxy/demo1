import React,{useState} from 'react';

import {components,utils} from '@common';

const {throttle,debounce}=utils;

const {Row,Col}=components;

const delay=1000;

const Index=props=>{
  let menuType=false;
  const changeFont=value=>{
    document.documentElement.style.setProperty('--fontSize',value);
  };
  return <div style={{color:'#333'}}>
    <div>
      <span>切换横纵菜单：</span>
      <button onClick={e=>props.store.setState({'set-menuType':{menuType:menuType=!menuType}})}>切换</button>
    </div>

    <div>
      <span>字体：</span>
      <input type="text" onChange={debounce(e=>changeFont(e.target.value),delay)} />
    </div>
    <div>
      <span>框架最大宽度：</span>
      <input type="text" onChange={debounce(e=>props.store.setState({'set-theme':{'--maxWidth':e.target.value}}),delay)} />
    </div>
    <div>
      <span>侧边菜单宽度：</span>
      <input type="text" onChange={debounce(e=>props.store.setState({'set-theme':{'--menuWidth':e.target.value}}),delay)} />
    </div>
    <div>
      <span>菜单收缩宽度：</span>
      <input type="text" onChange={debounce(e=>props.store.setState({'set-theme':{'--collapseWidth':e.target.value}}),delay)} />
    </div>
    <div>
      <span>收缩状态下菜单宽度：</span>
      <input type="text" onChange={debounce(e=>props.store.setState({'set-theme':{'--collapseMenuWidth':e.target.value}}),delay)} />
    </div>
    <div>
      <span>头部高度：</span>
      <input type="text" onChange={debounce(e=>props.store.setState({'set-theme':{'--headerHeight':e.target.value}}),delay)} />
    </div>
    <div>
      <span>底部高度：</span>
      <input type="text" onChange={debounce(e=>props.store.setState({'set-theme':{'--footerHeight':e.target.value}}),delay)} />
    </div>
    <div>
      <span>面包屑高度：</span>
      <input type="text" onChange={debounce(e=>props.store.setState({'set-theme':{'--breadHeight':e.target.value}}),delay)} />
    </div>
    <div>
      <span>顶部高度：</span>
      <input type="text" onChange={debounce(e=>props.store.setState({'set-theme':{'--topbarHeight':e.target.value}}),delay)} />
    </div>
    <div>
      <span>banner背景色：</span>
      <input type="color" onChange={debounce(e=>props.store.setState({'set-theme':{'--bannerBgColor':e.target.value}}),delay)} />
    </div>
    <div>
      <span>nav背景色：</span>
      <input type="color" onChange={debounce(e=>props.store.setState({'set-theme':{'--navBgColor':e.target.value}}),delay)} />
    </div>
    <div>
      <span>menu背景色：</span>
      <input type="color" onChange={debounce(e=>props.store.setState({'set-theme':{'--menuBgColor':e.target.value}}),delay)} />
    </div>
    <div>
      <span>深层menu背景色：</span>
      <input type="color" onChange={debounce(e=>props.store.setState({'set-theme':{'--deepMenuBgColor':e.target.value}}),delay)} />
    </div>
    <div>
      <span>app背景色：</span>
      <input type="color" onChange={debounce(e=>props.store.setState({'set-theme':{'--appBgColor':e.target.value}}),delay)} />
    </div>
    <div>
      <span>底部背景色：</span>
      <input type="color" onChange={debounce(e=>props.store.setState({'set-theme':{'--footerBgColor':e.target.value}}),delay)} />
    </div>
    <div>
      <span>app颜色：</span>
      <input type="color" onChange={debounce(e=>props.store.setState({'set-theme':{'--appColor':e.target.value}}),delay)} />
    </div>
    <div>
      <span>链接颜色：</span>
      <input type="color" onChange={debounce(e=>props.store.setState({'set-theme':{'--linkColor':e.target.value}}),delay)} />
    </div>
    <div>
      <span>链接hover颜色：</span>
      <input type="color" onChange={debounce(e=>props.store.setState({'set-theme':{'--linkHoverColor':e.target.value}}),delay)} />
    </div>
    <div>
      <span>链接active颜色：</span>
      <input type="color" onChange={debounce(e=>props.store.setState({'set-theme':{'--linkActiveColor':e.target.value}}),delay)} />
    </div>
  </div>;
};

export default Index;



































