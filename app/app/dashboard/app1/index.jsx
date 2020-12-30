import React from 'react';

import './index.less';

let i=0;

const Index=props=>{
  const changeHist=()=>{
    props.updateRouter(prev=>({...prev,browserRouter:!prev.browserRouter}));
  };
  const changeTheme=()=>{
    props.updateRouter(prev=>{
      const theme=prev.theme==='dark'?'light':'dark';
      return {...prev,theme:theme};
    });
  };
  const changeMenu=()=>{
    i+=1;
    props.updateRouter(prev=>{
      const addMenu={
        path:`/addMenu-${i}`,
        name:`/addMenu-${i}`,
        icon:'icon-plus',
        component:<h1>added menu {i}</h1>,
      };
      let newMenu=[...prev.routers];
      newMenu[0].children[0].children=[...newMenu[0].children[0].children,addMenu];
      return {
        ...prev,
        routers:newMenu,
      };
    });
  };
  return <div className="page">
    {props.user?.data.name}
    <button className="" onClick={changeHist}>change boswerHistory</button>
    <button className="" onClick={changeTheme}>change theme</button>
    <button className="" onClick={changeMenu}>add menu</button>
  </div>;
};

export default Index;

















