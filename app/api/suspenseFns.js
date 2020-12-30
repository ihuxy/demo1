import {suspenseFind,suspenseFindAll} from './userApis';
import {utils} from '@common';
const {wrapPromise,sleep}=utils;

export const suspenseFns=params=>{
  const userinfo=suspenseFind(params);
  const users=suspenseFindAll(params);
  return {userinfo,users};
};



export const sus1=async params=>{
  await sleep(1500);
  return {
    code:200,
    msg:'success',
    result:{
      name:'huy',
      age:18,
    },
  };
};
export const sus2=async params=>{
  await sleep(2000);
  return {
    code:200,
    msg:'success',
    result:[
      {
        name:'huy',
      },
      {
        name:'yiru',
      },
      {
        name:'test',
      },
    ],
  };
};
export const suspenseTest=params=>{
  const userinfo=wrapPromise(sus1(params));
  const users=wrapPromise(sus2(params));
  return {userinfo,users};
};





