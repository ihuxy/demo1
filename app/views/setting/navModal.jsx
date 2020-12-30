import React,{useEffect,useState,useRef,useCallback} from 'react';

import { Modal,Form,Input } from 'antd';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const ModalForm=props=>{
  const {form,initData,isEdit}=props;
  return <Form form={form} {...layout} initialValues={initData}>
    <Form.Item name="name" label="展示名" rules={[{required:!isEdit,message: '请输入展示名!'}]}>
      <Input disabled={isEdit} placeholder="请输入" />
    </Form.Item>
    <Form.Item name="icon" label="图标">
      <Input placeholder="请输入" />
    </Form.Item>
    <Form.Item name="path" label="路由">
      <Input placeholder="请输入" />
    </Form.Item>
    <Form.Item name="component" label="自定义元素">
      <Input disabled placeholder="请输入" />
    </Form.Item>
    <Form.Item name="function" label="自定义事件">
      <Input disabled placeholder="请输入" />
    </Form.Item>
  </Form>;
};

const HandleModal=props=>{
  const [form]=Form.useForm();
  const {onModalOk,modalVisible,onModalCancel,type,item}=props;
  const title={add:'新增',edit:'编辑'};
  const isEdit=type==='edit';
  const handleSubmit=()=>{
    form.validateFields().then(values=>{
      onModalOk(values);
    }).catch(err=>{
      console.log(err);
    });
  };
  return <Modal
    title={title[type]}
    visible={modalVisible}
    onOk={() => handleSubmit()}
    width={800}
    onCancel={() => onModalCancel()}
    okText="确定"
    cancelText="取消"
  >
    <div>
      <ModalForm form={form} initData={isEdit?item:{}} isEdit={isEdit} />
    </div>
  </Modal>;
};

export default HandleModal;

