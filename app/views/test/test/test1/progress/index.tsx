import * as React from 'react';

import './index.less';

export interface ProgressProps{
  size?:string;
  color?:string;
  percent?:number|any;
  total?:number|any;
  bgColor?:string;
  fbgColor?:string;
  txtColor?:string;
  bit?:number|string;
}

const Progress=({size='',color='',percent=0,total=100,bit=0,bgColor,txtColor,fbgColor}:ProgressProps)=>{
  let s=size?` ${size}`:``;
  let c=color?` ${color}`:``;
  let b=Number(bit)+2;
  let p=Number((percent/total).toFixed(b))*100+'%';
  return (
    <div className="mb">
      <div className="progress">
        <div className="progress-line" style={{backgroundColor:bgColor}}>
          <div className={`percent${s}${c}`} style={{width:p,backgroundColor:fbgColor}}>
            <span style={{color:txtColor}}>{p}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Progress;
