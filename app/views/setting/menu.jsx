import React,{useState,useCallback} from 'react';

import {components,utils} from '@common';

import {Tree,Modal,Form,Dropdown,Menu} from 'antd';

import {DownOutlined,PlusOutlined,EditOutlined,DeleteOutlined,ExclamationCircleOutlined} from '@ant-design/icons';

import HandleModal from './menuModal';

const {selectedHandle,updateId,traverItem}=utils;

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
  <Menu.Item onClick={()=>addFn(item)}>
    <a>
      <PlusOutlined />
      <span style={{padding:'0 4px'}}>新增</span>
    </a>
  </Menu.Item>
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

const renderTree=(data,dropFns,childKey='children')=>data.map(item=>{
  const {path,name,[childKey]:children}=item;
  if(children?.length){
    return <TreeNode
      key={path}
      title={treeDrop(item,dropFns)}
      item={item}
    >{renderTree(children,dropFns,childKey)}</TreeNode>;
  }
  return <TreeNode
    key={path}
    title={treeDrop(item,dropFns)}
    item={item}
  />;
});

const Index=props=>{
  const {menu,store}=props;
  const [visible,setVisible]=useState(false);
  const [modalType,setModalType]=useState('');
  const [item,setItem]=useState({});

  const updateRouter=useCallback(menu=>{
    store.setState({'update-router':{menu}});
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
      title: '确定删除此菜单吗？',
      icon: <ExclamationCircleOutlined />,
      content: `name: ${item.name}, path: ${item.path}`,
      okText: '删除',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        const newMenu=selectedHandle((data,i)=>data.splice(i,1))(menu,item.path,'path');
        updateRouter(newMenu);
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };
  const onModalOk=value=>{
    value.icon=value.icon||<PlusOutlined />;
    if(modalType==='add'){
      const newPath=item.path.charAt(item.path.length-1)==='/'?item.path.slice(0,-1):item.path;
      value.path=`${newPath}${value.path}`;
      if(item.children){
        item.children.push(value);
      }else{
        item.children=[value];
      }
      const newMenu=selectedHandle((data,i)=>data[i]=item)(menu,item.path,'path');
      updateRouter(newMenu);
    }else{
      const newItem={...item,...value};
      const newMenu=selectedHandle((data,i)=>data[i]=newItem)(menu,newItem.path,'path');
      updateRouter(newMenu);
    }
    setVisible(false);
  };
  const treeData=updateId(traverItem(item=>{
    const icon=typeof item.icon?.render==='function'?<item.icon />:item.icon;
    item.icon=icon;
  })(menu),'key');
  return <div style={pageStyle}>
    <Tree
      showIcon
      defaultExpandAll
      switcherIcon={<DownOutlined />}
      titleRender={item=>treeDrop(item,{addFn,editFn,deleteFn})}
      treeData={treeData}
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



































