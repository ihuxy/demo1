import React from 'react';
import { UserOutlined,ContainerOutlined,ExceptionOutlined, HomeOutlined,ClusterOutlined,DashboardOutlined,CloudServerOutlined,ConsoleSqlOutlined,ControlOutlined,AlertOutlined,AuditOutlined,BellOutlined,GoldOutlined,HddOutlined} from '@ant-design/icons';

import {utils} from '@common';
const {storage}=utils;
import {getInfo,getIndex,getTrigger} from '@app/api/api';

const routers=[
  {
    path:'/operation',
    redirect:'/operation/dashboard',
    name:'运维系统',
    component:()=>import('@layout/operation'),
    resolve:{
      user:()=>getInfo({token:storage.get('token')}),
    },
    /* resolve:{
      user:params=>getInfo({token:storage.get('token')}).then(res=>{
        const {code,data}=res;
        if(code===200){
          storage.set('userifo',data);
        }
        return res;
      }),
    }, */
    getMenus:true,
    frameTheme:'dark',
    children:[
      {
        path:'/dashboard',
        name:'首页',
        icon:<HomeOutlined />,
        component:()=>import('./dashboard'),
        /* resolve:{
          index:getIndex,
          trigger:getTrigger,
        }, */
      },
      {
        path:'/srcManage',
        redirect:'/srcManage/host',
        name:'资源管理',
        icon:<AlertOutlined />,
        children:[
          {
            path:'/host',
            name:'主机',
            icon:<ContainerOutlined />,
            component:()=>import('./srcManage'),
          },
          {
            path:'/groups',
            name:'主机组',
            icon:<ContainerOutlined />,
            component:()=>import('./srcManage/groups'),
          },
          {
            path:'/templates',
            name:'模版',
            icon:<ContainerOutlined />,
            component:()=>import('./srcManage/templates'),
          },
          {
            path:'/graph',
            name:'图形管理',
            icon:<ExceptionOutlined />,
            component:()=>import('./srcManage/graph'),
          },
        ],
      },
      {
        path:'/report',
        redirect:'/report/export',
        name:'指标报表',
        icon:<ClusterOutlined />,
        children:[
          {
            path:'/export',
            name:'指标导出',
            icon:<ExceptionOutlined />,
            component:()=>import('./report'),
          },
          {
            path:'/inspect',
            name:'巡检报告',
            icon:<ExceptionOutlined />,
            component:()=>import('./report/inspect'),
          },
          {
            path:'/batch',
            name:'批量导出',
            hideMenu:true,
            icon:<ExceptionOutlined />,
            component:()=>import('./report/batch'),
          },
        ],
      },
      {
        path:'/alarm',
        redirect:'/alarm/analysis',
        name:'告警报表',
        icon:<ControlOutlined />,
        children:[
          {
            path:'/analysis',
            name:'告警分析',
            icon:<AlertOutlined />,
            component:()=>import('./alarm'),
          },
          {
            path:'/query',
            name:'告警查询',
            icon:<BellOutlined />,
            component:()=>import('./alarm/query'),
          },
        ],
      },
      {
        path:'/system',
        redirect:'/system/license',
        name:'系统管理',
        icon:<ControlOutlined />,
        children:[
          {
            path:'/license',
            name:'授权信息',
            icon:<AlertOutlined />,
            component:()=>import('./system'),
          },
          {
            path:'/chpwd',
            name:'修改密码',
            icon:<BellOutlined />,
            component:()=>import('./system/chpwd'),
          },
        ],
      },
    ],
  },
  {
    path:'/operation/user',
    hideMenu:true,
    children:[
      {
        path:'/login',
        title:'登录',
        component:()=>import('./user'),
      },
      /* {
        path:'/signup',
        title:'注册',
        component:()=><h1>注册</h1>,
      }, */
    ],
  },
  {
    path:'/404',
    name:'404',
    component:()=><div>404</div>,
    hideMenu:true,
  },
];

export default routers;





















