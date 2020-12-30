import React,{useEffect,useState,useRef,useCallback} from 'react';

import { Modal,Form,Input,Select,Upload,Button,Icon,message,DatePicker,TimePicker,Radio } from 'antd';

import { dlFileFn,getAllDataSource,fetchTaskDetail } from '../../apis';

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
  const [dlLoading,setDlLoading]=useState(false);
  const [database, setDatabase] = useState([]);
  const [applyReason, setApplyReason] = useState('');
  useEffect(()=>{
    const getDetails=async ()=>{
      const {data,code}=await fetchTaskDetail({taskId:initData.id});
      if(code===200){
        const {applyEntity}=data||{};
        setApplyReason(applyEntity?.applyReason??'');
        form.setFieldsValue({applyReason:applyEntity?.applyReason??''});
      }
    };
    getDetails();
  },[]);
  useEffect(()=>{
    const getDatabase=async ()=>{
      const {data,code,msg} = await getAllDataSource({ pageNum:1, pageSize:10000 });
      if(code==='000000'){
        setDatabase(data||[]);
      }
    };
    getDatabase();
  },[]);
  const downloadFile=async ()=>{
    setDlLoading(true);
    try {
      const { result, filename } = await dlFileFn({id:initData.id});
      dlFile(result, filename);
    } catch (err) {
      console.log(err);
    }
    setDlLoading(false);
  };
  return <Form form={form} {...layout} initialValues={{...initData,pushMethod:`${initData.pushMethod||''}`,applyReason}}>
    <Form.Item name="deptName" label="申请部门">
      <Input disabled placeholder="请输入" />
    </Form.Item>
    <Form.Item name="applyUser" label="申请人">
      <Input disabled placeholder="请输入" />
    </Form.Item>
    <Form.Item name="applyReason" label="申请用途">
      <Input disabled placeholder="请输入" />
    </Form.Item>
    <Form.Item name="file" label="申请材料">
      <Button loading={dlLoading} onClick={downloadFile}>下载</Button>
    </Form.Item>
    {
      initData.productType==1&&<>
        {/* <Form.Item name="toDatasourceId" label="部门存储库">
          <Input disabled placeholder="请输入" />
        </Form.Item> */}
        <Form.Item name="toDatasourceId" label="部门存储库" /* rules={[{required:true,message:'请选择!'}]} */>
          <Select placeholder="请选择" disabled>
            {
              database.map(v => {
                return <Select.Option key={v.id} value={v.id}>{v.resourceName}</Select.Option>;
              })
            }
          </Select>
        </Form.Item>
        <Form.Item name="cronb" label="推送周期">
          <Input disabled placeholder="请输入" />
        </Form.Item>
        <Form.Item name="pushMethod" label="推送方式">
          <Select placeholder="请选择" disabled>
            {
              types.map(v => {
                return <Select.Option key={v.value} value={v.value}>{v.label}</Select.Option>;
              })
            }
          </Select>
        </Form.Item>
      </>
    }
    {/* <Form.Item name="auditOpinion" label="审核意见" rules={[{required:initData.type,message:'请输入!'}]}>
      <Input.TextArea placeholder="请输入" />
    </Form.Item> */}
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
      // form.resetFields();
      const {applyReason,toDatasourceId,cronb,pushMethod,auditOpinion}=values;
      // console.log({applyReason,toDatasourceId,cronb,pushMethod,auditOpinion},data);
      onModalOk({...data,applyReason,toDatasourceId,cronb,pushMethod,auditOpinion});
    }).catch(info => {
      console.log('Validate Failed:', info);
    });
  };
  // const title=data?.type?'通过':'驳回';
  return <Modal
    title="详情"
    visible={modalVisible}
    onOk={() => onModalCancel()}
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

