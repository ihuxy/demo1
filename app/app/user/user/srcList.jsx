import React,{Suspense,useState,useEffect,useRef} from 'react';

import {data} from './config';

import {Link,components} from '@common';
const {Spinner}=components;

import './index.less';

const columns=[
  {
    key:'name',
    text:'名称',
  },
  {
    key:'auth',
    text:'作者',
  },
  {
    key:'type',
    text:'类型',
  },
  {
    key:'action',
    text:'操作',
  },
];

const Index=props=>{
  console.log('srcList:',props);
  const srcList=props.srcList?.data||[];
  return <div className="page">
    <div>
      {
        srcList?.length?
          <table className="ytable">
            <thead>
              <tr>
                {
                  columns.map(v=><th key={v.key}>{v.text}</th>)
                }
              </tr>
            </thead>
            <tbody>
              {
                srcList.map(v=><tr key={v.name}>
                  {columns.map(sv=><td key={`${v.name}-${sv.key}`}>{v[sv.key]||<Link to={`${props.inputPath}`}>{sv.text}</Link>}</td>)}
                </tr>)
              }
            </tbody>
          </table>:
          <Spinner />
      }
    </div>
  </div>;
};

export default Index;

















