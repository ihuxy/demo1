import React,{useEffect,useRef,useState,useCallback} from 'react';

import { Form, Input, Button, message, Select,Table,Tooltip,Tabs } from 'antd';

import WrapList from '@app/components/wrapList';

import {listTask,implementFns,batchImplementFn} from '../../apis';

import HandleModal from './modal';

import ImplementModal from './handleModal';

import {fmObj} from '@app/utils';

import {basename} from '@app/configs';

import './index.less';

import {use} from '@common';
const {useAsync}=use;

const { TabPane } = Tabs;

const serviceType=[
  {
    label:'全部',
    value:'',
  },
  {
    label:'库表',
    value:'1',
  },
  {
    label:'接口',
    value:'2',
  },
];

const applyStatus=[
  {
    label:'待审核',
    value:'1',
  },
  {
    label:'已通过',
    value:'2',
  },
  {
    label:'已驳回',
    value:'3',
  },
];
const serviceStatus=[
  {
    label:'全部',
    value:'',
  },
  {
    label:'库表',
    value:'1',
  },
  {
    label:'接口',
    value:'2',
  },
];
const workflowStatus=[
  {
    label:'草稿',
    value:'1',
  },
  {
    label:'上线审核中',
    value:'2',
  },
  {
    label:'已上线',
    value:'3',
  },
  {
    label:'上线驳回',
    value:'4',
  },
  {
    label:'下线审核中',
    value:'5',
  },
  {
    label:'已下线',
    value:'6',
  },
  {
    label:'下线驳回',
    value:'7',
  },
];


const getColumns=({checkFn,checkInfoFn,implementFn,activeKey,passPerm})=>{
  const dbs={
    title: '部门存储库',
    dataIndex: 'toDatasourceName',
    ellipsis: true,
    width: 70,
  };
  const item=activeKey==1?[dbs]:[];
  return [
    {
      title: '申请编号',
      dataIndex: 'applyCode',
      width: 100,
      ellipsis: true,
      render: (text, row, index) => (
        <a onClick={() => checkFn(row)}>
          <Tooltip title={text}>{text}</Tooltip>
        </a>
      ),
    },
    {
      title: '服务名称',
      dataIndex: 'productName',
      width: 100,
      ellipsis: true,
      render: (text, row, index) => (
        <a onClick={() => checkInfoFn('service',row)}>
          <Tooltip title={text}>{text}</Tooltip>
        </a>
      ),
    },
    {
      title: '资源名称',
      dataIndex: 'resourceName',
      width: 100,
      ellipsis: true,
      render: (text, row, index) => (
        <a onClick={() => checkInfoFn('src',row)}>
          <Tooltip title={text}>{text}</Tooltip>
        </a>
      ),
    },
    {
      title: '申请部门',
      dataIndex: 'deptName',
      ellipsis: true,
      width: 70,
    },
    ...item,
    {
      title: '申请人',
      dataIndex: 'applyUser',
      ellipsis: true,
      width: 70,
    },
    {
      title: '操作',
      dataIndex: 'action',
      width: 80,
      align: 'center',
      render: (text, row, index) => (
        <div className="actions">
          <Button type="link" disabled={row.status==1||!passPerm} onClick={() => implementFn(row)}>实施</Button>
        </div>
      ),
    },
  ];
};

const getFormItems=()=><>
  <Form.Item name="productName" label="服务名称">
    <Input placeholder="请输入" />
  </Form.Item>
  <Form.Item name="deptName" label="申请部门">
    <Input placeholder="请输入" />
  </Form.Item>
</>;

const Index=props=>{

  const {permission}=props;
  
  const [activeKey,setActiveKey]=useState('1');

  const [selectedRows,setSelectedRows]=useState([]);

  const [item,setItem]=useState({});
  const [modalVisible,setModalVisible]=useState(false);
  const [implementVisible,setImplementVisible]=useState(false);

  const [confirmLoading,setConfirmLoading]=useState(false);

  const searchValue=useRef({});
  const page=useRef({pageNum:1,pageSize:10});
  const [list,updateList]=useAsync({});

  const status=0;
  
  const update=useCallback(params=>updateList({table:listTask({status,...params})}),[]);
  useEffect(()=>{
    update({
      ...searchValue.current,
      ...page.current,
      productType:activeKey,
    });
  },[]);

  const pageChange=(pageNum,pageSize)=>{
    page.current={pageNum,pageSize};
    update({
      ...searchValue.current,
      ...page.current,
      productType:activeKey,
    });
  };

  const searchList = values => {
    searchValue.current=fmObj(values);
    page.current={...page.current,pageNum:1};
    update({
      ...searchValue.current,
      ...page.current,
      productType:activeKey,
    });
  };

  const rowSelection = {
    selectedRowKeys:selectedRows.map(v=>v.id),
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRows(selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.status==1,
      // name: record.name,
    }),
    columnWidth:'30px',
  };

  const checkFn=item=>{
    setItem(item);
    setModalVisible(true);
  };
  const handleModal=item=>{
    setItem(item);
    setModalVisible(true);
  };
  /* const handlePass=async (item=null)=>{
    let ids=[];
    if(!item){
      ids=selectedRows.map(v => v.id);
    }else{
      ids=[item.id];
    }
    const {message:msg,code}=await handleBack(ids);
    if(code===200){
      message.success(msg);
      update({
        pageSize:10,
        pageNum:1,
        status:activeKey,
      });
      setSelectedRows([]);
    }
  }; */
  const checkInfoFn=(type,item)=>{
    if(type==='service'){
      if(item.productType==1){
        props.router.push({
          path:`${basename}/tables/details/${item.productId}`,
          state:{editable:false},
        });
      }else{
        props.router.push({
          path:`${basename}/interface/details/${item.productId}`,
          state:{editable:false},
        });
      }
    }else{
      props.router.push({
        path:`${basename}/srcDir/details/${item.resourceId}`,
        state:{editable:false},
      });
    }
  };

  const implementModalOk=async value=>{
    const {message:msg,code}=await implementFns({...value,id:item.id});
    if(code===200){
      message.success(msg);
      setImplementVisible(false);
      update({
        // pageSize:10,
        // pageNum:1,
        ...page.current,
        productType:activeKey,
      });
    }
  };
  const implementFn=async (item=null)=>{
    if(activeKey==1){
      setItem(item);
      setImplementVisible(true);
      return;
    }
    let ids;
    if(!item){
      ids=selectedRows.map(v => v.id);
    }else{
      ids=[item.id];
    }
    const {message:msg,code}=await batchImplementFn(ids);
    if(code===200){
      setSelectedRows([]);
      message.success(msg);
      update({
        // pageSize:10,
        // pageNum:1,
        ...page.current,
        productType:activeKey,
      });
    }
  };

  const switchTab=value=>{
    setActiveKey(value);
    searchValue.current={};
    page.current={...page.current,pageNum:1};
    update({
      ...searchValue.current,
      ...page.current,
      productType:value,
    });
  };

  const handleModalOk=value=>{
    console.log(value);
  };

  const passPerm=permission.includes('pending_operate_pass');

  const actions={
    checkFn,
    checkInfoFn,
    implementFn,
    activeKey,
    passPerm,
  };

  const columns=getColumns(actions);

  const {table}=list||{};

  console.log(table);

  const handleBatch=[
    {
      fn:implementFn,
      text:'批量实施',
    },
  ];


  return <div className="page">
    <Tabs defaultActiveKey="1" onChange={switchTab}>
      <TabPane tab="库表" key="1">
        <WrapList searchList={searchList} pageChange={pageChange} list={table||{}} columns={columns} rowSelection={rowSelection} selectedRows={selectedRows} formItems={getFormItems()} />
      </TabPane>
      <TabPane tab="接口" key="2">
        <WrapList searchList={searchList} pageChange={pageChange} list={table||{}} columns={columns} rowSelection={rowSelection} selectedRows={selectedRows} handleBatch={handleBatch} formItems={getFormItems()} />
      </TabPane>
    </Tabs>
    {
      modalVisible&&<HandleModal
        modalVisible={modalVisible}
        onModalOk={handleModalOk}
        onModalCancel={() => setModalVisible(false)}
        data={item}
        confirmLoading={confirmLoading}
      />
    }
    {
      implementVisible&&<ImplementModal
        modalVisible={implementVisible}
        onModalOk={implementModalOk}
        onModalCancel={() => setImplementVisible(false)}
        data={item}
      />
    }
  </div>;
};

export default Index;

















