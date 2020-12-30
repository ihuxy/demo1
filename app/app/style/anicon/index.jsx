import React,{useState,useEffect,useCallback} from 'react';

// import '@common/styles/animation/index.less';

import './index.less';

const Index=props=>{
  const [demo1,setDemo1]=useState('');
  const [demo2,setDemo2]=useState('');
  const [demo3,setDemo3]=useState('');
  const [demo4,setDemo4]=useState('');
  return <div className="page mt">
    <div className="yrow gutter-12">
      <div className="ycol-3">
        <div className="item" onClick={()=>setDemo1(!demo1)}>
          <span className="anico">
            <span className={`hline${demo1?' right':''}`} />
          </span>
        </div>
      </div>
      <div className="ycol-3">
        <div className="item" onClick={()=>setDemo2(!demo2)}>
          <span className="anico">
            <span className={`hline${demo2?' close':''}`} />
          </span>
        </div>
      </div>
      <div className="ycol-3">
        <div className="item" onClick={()=>setDemo3(!demo3)}>
          <span className="anico">
            <span className={`hline${demo3?' bottom':''}`} />
          </span>
        </div>
      </div>
      <div className="ycol-3">
        <div className="item" onClick={()=>setDemo4(!demo4)}>
          <span className="anico">
            <span className={`hline play${demo4?' pause':''}`} />
          </span>
        </div>
      </div>
    </div>
  </div>;
};

export default Index;

















