import React,{useState,useEffect,useCallback} from 'react';

import './index.less';

const Index=props=>{
  const [demo1,setDemo1]=useState('');
  const [demo2,setDemo2]=useState('');
  const [demo3,setDemo3]=useState('');
  const [demo4,setDemo4]=useState('');
  return <div className="page">
    <div className="layout-wrap">
      <div className="layout-left">
        left
      </div>
      <div className="layout-right">
        right
      </div>
    </div>
  </div>;
};

export default Index;

















