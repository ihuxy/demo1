import React,{Suspense} from 'react';

import {utils,components} from '@common';

import {Row,Col,Table,Select,InputNumber,Switch,Button} from 'antd';

import {suspenseFns,suspenseTest} from '@app/api/suspenseFns';

const {Spinner}=components;

const {userinfo,users}=suspenseFns();
const {userinfo:sus1,users:sus2}=suspenseTest();

const containerStyles={
  color:'#333',
  backgroundColor:'#fff',
  padding:'10px 15px',
  height:'100%',
};

const columns=[{dataIndex:'name',title:'姓名'},{dataIndex:'email',title:'邮箱'}];

const UserInfo=({userinfo,title})=>{
  const {result}=userinfo.read();
  const info=Object.keys(result).map(v=>({key:v,value:result[v]}));
  return <div style={containerStyles}>
    <h2>{title||'个人信息'}</h2>
    {
      info.map(({key,value})=><div><span>{key}：</span><span>{value}</span></div>)
    }
  </div>;
};
const Allusers=({users,title})=>{
  const {result}=users.read();
  return <div style={containerStyles}>
    <h2>{title||'用户信息'}</h2>
    <Table dataSource={result} columns={columns} />
  </div>;
};

const Index=props=>{
  return <div>
    <Row gutter={[12,12]}>
      <Col span={12}>
        <Suspense fallback={<Spinner />}>
          <UserInfo userinfo={sus1} title="sus-test1" />
        </Suspense>
      </Col>
      <Col span={12}>
        <Suspense fallback={<Spinner />}>
          <Allusers users={sus2} title="sus-test2" />
        </Suspense>
      </Col>
    </Row>
    <Row gutter={[12,12]}>
      <Col span={12}>
        <Suspense fallback={<Spinner />}>
          <UserInfo userinfo={userinfo} />
        </Suspense>
      </Col>
      <Col span={12}>
        <Suspense fallback={<Spinner />}>
          <Allusers users={users} />
        </Suspense>
      </Col>
    </Row>
  </div>;
};

export default Index;



































