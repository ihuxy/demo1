import React,{useEffect,useCallback} from 'react';

import { Form, Input, Button, message, Table, Popconfirm } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { formItemLayout,tailFormItemLayout } from '@app/configs';

import {findAllFn,deleteUserFn} from '@app/api/userApis';

import {use} from '@common';
const {useAsync}=use;

import './index.less';

const Index=props=>{
  const [list,updateList]=useAsync({});
  const updateUserList=useCallback(params=>updateList({users:findAllFn()}),[]);
  useEffect(()=>{
    updateUserList();
  },[]);
  const editItem=item=>{
    props.router.push({
      path:'/userManage/add',
      params:{state:item},
    });
  };
  const deleteItem=async item=>{
    const {code,message:msg}=await deleteUserFn(item);
    if(code===200){
      message.success(msg);
      updateUserList();
    }
  };
  const {users}=list;
  const dataSource=users?.result?users.result:[];
  const columns=[
    {
      title:'昵称',
      dataIndex:'name',
    },
    {
      title:'邮箱',
      dataIndex:'email',
    },
    {
      title:'等级',
      dataIndex:'role',
    },
    {
      title:'操作',
      dataIndex:'actions',
      render:(text,row,index)=>{
        return <>
          <Button type="link" onClick={()=>editItem(row)}>编辑</Button>
          <Popconfirm title="确定删除吗?" onConfirm={()=>deleteItem(row)}>
            <Button type="link" danger>删除</Button>
          </Popconfirm>
        </>;
      },
    },
  ];
  return <div className="page">
    <div className="user-manage">
      <Table loading={users?.pending} dataSource={dataSource} columns={columns} rowKey="_id" />
    </div>
  </div>;
};

export default Index;

















