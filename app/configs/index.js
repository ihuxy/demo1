import {utils} from '@common';
const {storage}=utils;

const browserRouter=!process.env.isDev;

// const browserRouter=true;

const configs=require('../../configs');
const appName=require('../../configs/appName');
const {DEV_ROOT_DIR,PRD_ROOT_DIR}=configs(appName);

export const basepath=browserRouter?PRD_ROOT_DIR:DEV_ROOT_DIR;

const initPath=`${browserRouter?'':'#'}/`;

const beforeRender=input=>{
  const token=storage.get('token');
  if(input.path===initPath){
    return {path:'/'};
  }
  if(!token){
    const {path}=input;
    if(path.includes('/operation')){
      return {path:'/operation/user/login'};
    }
    return {path:'/user/signin'};
  }
};

export default {
  browserRouter,
  // title,
  beforeRender,
  basepath,
  // afterRender,
};

export const defaultRouter=[
  {
    path:'/loading',
    name:'Loading...',
  },
];


