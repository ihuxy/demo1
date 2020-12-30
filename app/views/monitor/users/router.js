import React from 'react';
import {
  SolutionOutlined,
  UserOutlined,
  EditOutlined,
  TeamOutlined,
  UnorderedListOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';
// import {findAllFn} from '../../api/userApis';

const router=[{
  path:'/profile',
  redirect:'/monitor/profile/info',
  name:'个人信息',
  icon:<SolutionOutlined />,
  children:[
    {
      path:'/info',
      name:'个人信息',
      icon:<UserOutlined />,
      component:()=>import('./profile'),
    },
    {
      path:'/edit',
      name:'修改信息',
      icon:<EditOutlined />,
      component:()=>import('./profile/edit'),
    },
  ],
},{
  path:'/userManage',
  redirect:'/monitor/userManage/users',
  name:'用户管理',
  icon:<TeamOutlined />,
  children:[
    {
      path:'/users',
      name:'用户列表',
      icon:<UnorderedListOutlined />,
      component:()=>import('./userManage'),
      /* resolve:{
        users:findAllFn,
      }, */
    },
    {
      path:'/add',
      name:'添加用户',
      icon:<UsergroupAddOutlined />,
      component:()=>import('./userManage/add'),
    },
  ],
}];
export default router;