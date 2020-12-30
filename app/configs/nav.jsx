import { UserOutlined, PoweroffOutlined, RestOutlined } from '@ant-design/icons';

import themeList from '@app/configs/theme';

import logo from '@app/assets/images/usr.jpg';

import {components,utils} from '@common';
const {Anico}=components;
const {storage}=utils;

export const leftNav=({langCfg,themeKey})=>{
  const {nav:{left},theme}=langCfg;
  return [
    {
      name:left['collapse'],
      type:'collapse',
      Custom:({status})=><Anico type={(status?.value??status)?'right':''} />,
    },
    {
      name:left['themeList'],
      type:'themeList',
      arrowDir:'lt',
      children:themeList(theme).map(v=>{
        v.key===themeKey&&(v.active=true);
        return v;
      }),
    },
  ];
};
export const rightNav=({langCfg,user,projList})=>{
  const {nav:{right},language}=langCfg;
  return [
    {
      name:user?.name??right['user'],
      img:user?.avatar??logo,
      children:[
        {
          name:right['profile'],
          type:'profile',
          icon:<UserOutlined />,
          // path:'/user/profile',
        },
        {
          name:right['logout'],
          type:'logout',
          icon:<PoweroffOutlined />,
          path:'/user/login',
        },
      ],
    },
    /* {
      name:'项目入口',
      type:'projectList',
      Ricon:true,
      children:[
        {
          name:'t1',
        },
        {
          name:'t2',
        },
        {
          name:'t3',
        },
      ],//projList,
    }, */
    {
      // name:right['language'],
      name:right[language],
      Custom:()=><div className="icon"><img src={`${right[language+'_icon']}`} /></div>,
      // type:'language',
      children:[
        {
          key:'zh',
          name:right['zh'],
          type:'language',
          active:language==='zh',
          icon:<div className="img"><img src={`${right['zh_icon']}`} /></div>,
        },
        {
          key:'en',
          name:right['en'],
          type:'language',
          active:language==='en',
          icon:<div className="img"><img src={`${right['en_icon']}`} /></div>,
        },
        {
          key:'jp',
          name:right['jp'],
          type:'language',
          active:language==='jp',
          icon:<div className="img"><img src={`${right['jp_icon']}`} /></div>,
        },
      ],//projList,
    },
    {
      name:right['clean_cookie'],
      icon:<RestOutlined />,
      type:'button',
      handle:item=>{
        storage.clear();
        // location.href=location.href;
      },
    },
  ];
};

