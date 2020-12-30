import React,{useEffect,useState,useRef,useCallback} from 'react';

import { Modal,Form,Input,Select,Upload,Button,Icon,message,DatePicker,TimePicker,Radio } from 'antd';

import { getAllDataSource } from '../../apis';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const types=[
  {
    label:'覆盖',
    value:'1',
  },
  {
    label:'追加',
    value:'2',
  },
];

const dlFile = (data, name = 'demo.xlsx') => {
  const blob = new Blob([data], {
    type: 'application/octet-stream',
  });
  const dataUrl = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = dataUrl;
  a.download = name;
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  a.parentNode.removeChild(a);
  window.URL.revokeObjectURL(dataUrl);
};


const ModalForm=props=>{
  const {initData,form}=props;
  const [database, setDatabase] = useState([]);
  useEffect(()=>{
    const getDatabase=async ()=>{
      const {data,code,msg} = await getAllDataSource({ pageNum:1, pageSize:10000 });
      if(code==='000000'){
        setDatabase(data||[]);
      }
    };
    getDatabase();
  },[]);
  return <Form form={form} {...layout} initialValues={{...initData,toTable:initData.fromTable}}>
    <Form.Item name="deptName" label="申请部门">
      <Input placeholder="请输入" disabled />
    </Form.Item>
    <Form.Item name="toDatasourceId" label="部门存储库" /* rules={[{required:true,message:'请选择!'}]} */>
      <Select placeholder="请选择" disabled>
        {
          database.map(v => {
            return <Select.Option key={v.id} value={v.id}>{v.resourceName}</Select.Option>;
          })
        }
      </Select>
    </Form.Item>
    {/* <Form.Item name="toTable" label="推送目标表" rules={[{required:true,message:'请选择!'}]}>
      <Select placeholder="请选择">
        {
          database.map(v => {
            return <Select.Option key={v.id} value={v.id}>{v.resourceName}</Select.Option>;
          })
        }
      </Select>
    </Form.Item> */}
    <Form.Item name="toTable" label="推送目标表" rules={[{required:true,message:'请输入!'}]}>
      <Input placeholder="请输入" />
    </Form.Item>
  </Form>;
};

const HandleModal = props => {
  const [form]=Form.useForm();
  const { onModalOk, modalVisible,onModalCancel,data,confirmLoading } = props;
  const handleSubmit = () => {
    /* const {file,...rest}=values;
    const uploadFile=file[0].originFileObj;
    const applys=JSON.stringify([{...data,...rest}]);
    onModalOk({uploadFile,applys}); */
    form.validateFields().then(values => {
      onModalOk(values);
    }).catch(info => {
      console.log('Validate Failed:', info);
    });
  };
  return <Modal
    title="实施"
    visible={modalVisible}
    onOk={handleSubmit}
    width={800}
    confirmLoading={confirmLoading}
    onCancel={() => onModalCancel()}
  >
    <div>
      <ModalForm initData={data} form={form} />
    </div>
  </Modal>;
};

export default HandleModal;

