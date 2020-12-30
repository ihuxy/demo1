import React from 'react';

import './index.less';

const Index=props=>{
  const pushQuery=query=>{
    props.router.push({
      path:'.',
      query,
    });
  };
  const pushParams=()=>{
    props.router.push({
      path:'/dashboard/app3',
      params:{
        app2Pass:'params test',
      },
    });
  };
  return <div className="page">
    <div>
      <button onClick={()=>pushQuery({a:1})}>query-1</button>
      <span>{JSON.stringify(props.params)}</span>
    </div>
    <div>
      <button onClick={()=>pushQuery({b:2})}>query-2</button>
      <span>{JSON.stringify(props.params)}</span>
    </div>
    <div>
      <button onClick={pushParams}>params</button>
    </div>
  </div>;
};

export default Index;

















