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
  path:'/test',
  redirect:'/test/test/test1',
  name:'test',
  icon:<SolutionOutlined />,
  children:[
    {
      path:'/test1',
      name:'test1',
      icon:<UserOutlined />,
      component:()=>import('./test1'),
    },
    {
      path:'/test2',
      name:'test2',
      icon:<UserOutlined />,
      component:()=>import('./test1/test2'),
    },
    {
      path:'/test3',
      name:'test3',
      icon:<UserOutlined />,
      component:()=>import('./test1/test3'),
    },
    {
      path:'/test4',
      name:'modal',
      icon:<UserOutlined />,
      component:()=>import('./test1/test4'),
    },
  ],
}];
export default router;