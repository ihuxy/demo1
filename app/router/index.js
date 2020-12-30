import {DesktopOutlined,ToolOutlined,LayoutOutlined,ProjectOutlined,CreditCardOutlined,AreaChartOutlined} from '@ant-design/icons';

import {findFn,findAllFn} from '../api/userApis';

import {utils} from '@common';

import demo2 from '../app/router';

const {sleep}=utils;

const routers=nameList=>[
  {
    path:'/',
    name:nameList['/'],
    icon:<DesktopOutlined />,
    component:()=>import('@common/layout'),
    injectMenu:true,
    resolve:{
      user:findFn,
    },
    children:[
      {
        path:'/setting',
        name:nameList['/setting'],
        icon:<ToolOutlined />,
        children:[
          {
            path:'/layout',
            name:nameList['/setting/layout'],
            icon:<LayoutOutlined />,
            component:()=>import('../views/setting/layout'),
          },
          {
            path:'/menu',
            name:nameList['/setting/menu'],
            icon:<ProjectOutlined />,
            component:()=>import('../views/setting/menu'),
            injectMenu:true,
          },
          {
            path:'/header',
            name:nameList['/setting/header'],
            icon:<CreditCardOutlined />,
            component:()=>import('../views/setting/nav'),
          },
          {
            path:'/code',
            name:nameList['/setting/code'],
            icon:<CreditCardOutlined />,
            // component:()=>import('../views/setting/code'),
            component:props=>{
              return <div>{props?.inputPath??'111'}</div>;
            },
          },
          {
            path:'/test1',
            name:'test1',
            icon:<CreditCardOutlined />,
            component:<div>222</div>,
          },
          {
            path:'/test2',
            name:'test2',
            icon:<CreditCardOutlined />,
            component:async ()=>{
              await sleep(2000);
              return props=><div>{props?.inputPath??'444'}</div>;
            },
          },
          {
            path:'/test3',
            name:'test3',
            icon:<CreditCardOutlined />,
            component:import('../views/setting/code'),
          },
          {
            path:'/level2',
            name:nameList['/setting/level2'],
            icon:<CreditCardOutlined />,
            denied:true,
            children:[
              {
                path:'/level3',
                name:nameList['/setting/level2/level3'],
                icon:<CreditCardOutlined />,
                children:[
                  {
                    path:'/setting/level2/level3/level4',
                    name:nameList['/level4'],
                    icon:<CreditCardOutlined />,
                    component:'level test',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path:'/tools',
        name:nameList['/tools'],
        icon:<ToolOutlined />,
        children:[
          {
            path:'/suspense',
            name:nameList['/tools/suspense'],
            icon:<LayoutOutlined />,
            loadData:{
              userinfo:findFn,
              users:findAllFn,
            },
            component:()=>import('../views/tools/suspense'),
            denied:false,
          },
          {
            path:'/errorboundary',
            name:nameList['/tools/errorboundary'],
            icon:<LayoutOutlined />,
            /* loadData:{
              userinfo:findFn,
              users:findAllFn,
            }, */
            component:()=>import('../views/tools/errorboundary'),
            denied:false,
          },
          {
            path:'/styles',
            name:nameList['/tools/styles'],
            icon:<LayoutOutlined />,
            component:()=>import('../views/tools/styles'),
            denied:false,
          },
          {
            path:'/hooks-test',
            name:nameList['/tools/hooks-test'],
            icon:<LayoutOutlined />,
            component:()=>import('../views/tools/hooks-test'),
            denied:false,
          },
          {
            path:'/icon-test',
            name:'icon-test',
            icon:<LayoutOutlined />,
            component:()=>import('../app/style/icons'),
            denied:false,
          },
        ],
      },
      {
        path:'/vue-app',
        name:nameList['/vue-app'],
        icon:<LayoutOutlined />,
        component:async ()=>{
          return 'vue';
        },
      },
    ],
  },
  {
    path:'/demo2',
    name:'demo2',
    icon: <AreaChartOutlined />,
    component:()=>import('@common/layout'),
    injectMenu:true,
    resolve:{
      user:findFn,
    },
    children:demo2,
  },
  {
    path:'/user',
    name:nameList['/user'],
    title:'登录',
    hideMenu:true,
    children:[
      {
        path:'/signin',
        name:nameList['/user/signin'],
        component:()=>import('../user'),
      },
      {
        path:'/signup',
        name:nameList['/user/signup'],
        component:()=><h1>注册</h1>,
      },
    ],
  },
  {
    path:'/404',
    name:nameList['/404'],
    component:import('../404'),
    hideMenu:true,
  },
];

export const whiteRouters=[
  '/user',
  '/user/signin',
  '/user/signup',
  '/404',
];


export default routers;





















