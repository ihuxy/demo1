import React,{useEffect,useRef} from 'react';

import { Form, Input, Button, message,InputNumber } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { formItemLayout,tailFormItemLayout } from '@app/configs';

import {addUserFn,editUserFn} from '@app/api/userApis';

import './index.less';

const Index=props=>{
  const [form] = Form.useForm();
  const onFinish = async values => {
    const handler=props.params?.state?editUserFn:addUserFn;
    values=props.params?.state?{...props.params.state,...values}:values;
    const {code,message:msg}=await handler(values);
    if(code===200){
      message.success(msg);
    }
  };
  return <div className="page">
    <div className="add-user-card">
      <Form
        name="addUser"
        className="add-user-form"
        onFinish={onFinish}
        form={form}
        initialValues={props.params?.state??{}}
        {...formItemLayout}
      >
        <Form.Item label="用户名" name="name" rules={[{required: true,message: '请输入用户名!'},{pattern:/^[\u4E00-\u9FA5A-Za-z0-9_]{2,20}$/,message:'长度为2-20不含特殊字符!'}]}>
          <Input placeholder="用户名" />
        </Form.Item>
        <Form.Item label="邮箱" name="email" rules={[{required: true,message: '请输入邮箱!'},{pattern:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,message:'邮箱格式不正确!'}]}>
          <Input placeholder="邮箱" />
        </Form.Item>
        <Form.Item label="密码" name="password" rules={[{required:true,message:'请输入密码!'},{pattern:/^(?![^a-zA-Z]+$)(?!\D+$)[0-9a-zA-Z]{8,20}$/,message:'密码长度为8-20个字符，并且至少包含数字、大小写字母中的两种，不含特殊字符!'}]}>
          <Input type="password" placeholder="密码" />
        </Form.Item>
        <Form.Item label="等级" name="role" rules={[{type:'number',min:0,max:5,message:'取值范围0-5!'}]}>
          <InputNumber placeholder="等级" />
        </Form.Item>
        <Form.Item label="头像" name="avatar">
          <Input placeholder="头像" />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" className="login-form-button">保存</Button>
          <Button style={{marginLeft:'12px'}} onClick={()=>form.resetFields()}>重置</Button>
        </Form.Item>
      </Form>
    </div>
  </div>;
};

export default Index;

















