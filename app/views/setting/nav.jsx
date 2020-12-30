import {useState,useCallback,useEffect} from 'react';

import {components,utils} from '@common';

import {Tree,Modal,Form,Dropdown,Menu} from 'antd';

import {DownOutlined,PlusOutlined,EditOutlined,DeleteOutlined,ExclamationCircleOutlined} from '@ant-design/icons';

import HandleModal from './navModal';

const {selectedHandle,updateId}=utils;

const {TreeNode} = Tree;

const { confirm } = Modal;

const pageStyle={
  padding:'15px 20px',
  backgroundColor:'#fff',
};

const nodeStyle={
  overflow:'hidden',
  textOverflow:'ellipsis',
  whiteSpace:'nowrap',
  display:'inline-block',
  userSelect:'none',
};

const handleClick=({addFn,editFn,deleteFn},item)=><Menu>
  {
    item.key.split('-').length<3&&<Menu.Item onClick={()=>addFn(item)}>
      <a>
        <PlusOutlined />
        <span style={{padding:'0 4px'}}>新增</span>
      </a>
    </Menu.Item>
  }
  <Menu.Item onClick={()=>editFn(item)}>
    <a>
      <EditOutlined />
      <span style={{padding:'0 4px'}}>编辑</span>
    </a>
  </Menu.Item>
  <Menu.Item onClick={()=>deleteFn(item)}>
    <a>
      <DeleteOutlined />
      <span style={{padding:'0 4px'}}>删除</span>
    </a>
  </Menu.Item>
</Menu>;

const treeDrop=(item,dropFns)=><Dropdown overlay={()=>handleClick(dropFns,item)} trigger={['contextMenu']}><span style={nodeStyle}>{item.name}</span></Dropdown>;

const Index=props=>{
  const {menu,store}=props;
  const [visible,setVisible]=useState(false);
  const [modalType,setModalType]=useState('');
  const [item,setItem]=useState({});

  const [leftList,setLeftList]=useState([]);
  const [rightList,setRightList]=useState([]);

  useEffect(()=>{
    const {subscribe}=store;
    subscribe('nav-data',result=>{
      const {leftList,rightList}=result;
      if(leftList){
        setLeftList(leftList);
      }
      if(rightList){
        setRightList(rightList);
      }
    });
  },[]);

  const updateNav=useCallback((type,data)=>{
    store.setState({'update-nav':{type,data}});
  },[]);

  const addFn=item=>{
    setVisible(true);
    setModalType('add');
    setItem(item);
  };
  const editFn=item=>{
    setVisible(true);
    setModalType('edit');
    setItem(item);
  };
  const deleteFn=item=>{
    confirm({
      title: '确定删除此信息吗？',
      icon: <ExclamationCircleOutlined />,
      content: `name: ${item.name}`,
      okText: '删除',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        const type=item.key.charAt(0)==='0'?'left':'right';
        const list=type==='left'?leftList:rightList;
        const newList=selectedHandle((data,i)=>data.splice(i,1))(list,item.name,'name');
        updateNav(type,newList);
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };
  const onModalOk=value=>{
    const type=item.key.charAt(0)==='0'?'left':'right';
    const list=type==='left'?leftList:rightList;
    if(modalType==='add'){
      if(item.children){
        item.children.push(value);
      }else{
        item.children=[value];
      }
      if(item.isRoot){
        updateNav(type,item.children);
      }else{
        const newList=selectedHandle((data,i)=>data[i]=item)(list,item.name,'name');
        updateNav(type,newList);
      }
    }else{
      const newItem={...item,...value};
      const newList=selectedHandle((data,i)=>data[i]=newItem)(list,newItem.name,'name');
      updateNav(type,newList);
    }
    setVisible(false);
  };
  return <div style={pageStyle}>
    <Tree
      // showIcon
      defaultExpandAll
      switcherIcon={<DownOutlined />}
      titleRender={item=>treeDrop(item,{addFn,editFn,deleteFn})}
      treeData={updateId([{name:'左侧nav',isRoot:true,children:leftList},{name:'右侧nav',isRoot:true,children:rightList}],'key')}
      virtual={false}
    />
    {
      visible&&<HandleModal
        onModalOk={onModalOk}
        onModalCancel={()=>setVisible(false)}
        modalVisible={visible}
        type={modalType}
        item={item}
      />
    }
  </div>;
};

export default Index;



































