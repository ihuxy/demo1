import React,{useEffect,useState,Suspense} from 'react';
import {utils,use,Link,components} from '@common';
const {Spinner}=components;
const {useSearch}=use;
import {fetchList} from './api';

import './index.less';

const columns=[
  {
    key:'name',
    text:'昵称',
  },
  {
    key:'age',
    text:'年龄',
  },
  {
    key:'email',
    text:'邮箱',
  },
  {
    key:'addr',
    text:'地址',
  },
  {
    key:'detail',
    text:'详情',
  },
];

const List=()=>{
  const result=fetchList.read().data;
  const [data,setData]=useSearch(result);
  const [keywords,setKeywords]=useState('');
  const table=data?data:result;
  return <div>
    <div style={{padding:'20px 10px'}}>
      <div style={{width:'200px',display:'inline-block',marginRight:'15px'}}><input className="input" onChange={e=>setKeywords(e.target.value)} value={keywords} placeholder="请输入昵称或邮箱..." /></div>
      <button className="ybtn ybtn-info" onClick={()=>setData(result,keywords,['email','name'])}>搜索</button>
    </div>
    {
      result?.length?
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
              table.map(v=><tr key={v.id}>
                {columns.map(sv=><td key={`${v.id}-${sv.key}`}>{v[sv.key]||<Link to={`/user/${v.id}`}>{sv.text}</Link>}</td>)}
              </tr>)
            }
          </tbody>
        </table>:
        <div>empty</div>
    }
  </div>;
};

const Index=props=>{
  return <div className="page">
    <div>
      <Suspense fallback={<Spinner />}><List /></Suspense>
    </div>
  </div>;
};

export default Index;

















