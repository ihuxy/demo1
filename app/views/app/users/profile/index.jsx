import React,{useEffect,useRef} from 'react';

import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { formItemLayout,tailFormItemLayout } from '@app/configs';

import {editUserFn} from '@app/api/userApis';

import './index.less';

const Index=props=>{
  const userinfo=useRef();
  const [form] = Form.useForm();
  useEffect(()=>{
    props.store.subscribe('user',result=>{
      userinfo.current=result.result;
      if(result?.result){
        form.setFieldsValue(result.result);
      }
    });
  },[]);
  const onFinish = async values => {
    const {password,confirm,...rest}=values;
    const {code,message:msg}=await editUserFn({
      ...userinfo.current,
      password,
    });
    if(code===200){
      message.success(msg);
    }
  };
  return <div className="page">
    <div className="profile-card">
      <Form
        name="profile"
        className="profile-form"
        onFinish={onFinish}
        form={form}
        {...formItemLayout}
      >
        <Form.Item label="当前用户" name="name">
          <Input disabled prefix={<UserOutlined className="site-form-item-icon" style={{marginRight:'7px',color:'#999'}} />} placeholder="用户名" />
        </Form.Item>
        <Form.Item label="邮箱" name="email">
          <Input disabled prefix={<UserOutlined className="site-form-item-icon" style={{marginRight:'7px',color:'#999'}} />} placeholder="邮箱" />
        </Form.Item>
        <Form.Item label="等级" name="role">
          <Input disabled prefix={<UserOutlined className="site-form-item-icon" style={{marginRight:'7px',color:'#999'}} />} placeholder="等级" />
        </Form.Item>
        {/* <Form.Item label="原密码" name="oldpwd" rules={[{required: true,message: '请输入原密码!'}]}>
          <Input prefix={<LockOutlined className="site-form-item-icon" style={{marginRight:'7px',color:'#999'}} />} type="password" placeholder="原密码" />
        </Form.Item> */}
        {/* <Form.Item label="新密码" name="password" rules={[{required: true,message: '请输入新密码!'}]}>
          <Input prefix={<LockOutlined className="site-form-item-icon" style={{marginRight:'7px',color:'#999'}} />} type="password" placeholder="新密码" />
        </Form.Item>
        <Form.Item label="确认密码" name="confirm" rules={[{required: true,message: '请确认密码!'},
          ({getFieldValue})=>({
            validator(rule,value){
              if(!value||getFieldValue('password')===value){
                return Promise.resolve();
              }
              return Promise.reject('两次输入的密码不一致!');
            },
          }),
        ]}>
          <Input prefix={<LockOutlined className="site-form-item-icon" style={{marginRight:'7px',color:'#999'}} />} type="password" placeholder="确认密码" />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" className="login-form-button">确认修改</Button>
          <Button style={{marginLeft:'12px'}} onClick={()=>form.resetFields()}>重置</Button>
        </Form.Item> */}
      </Form>
    </div>
  </div>;
};

export default Index;

















