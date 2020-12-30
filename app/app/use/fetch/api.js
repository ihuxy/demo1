import {utils} from '@common';
const {sleep}=utils;
export const fetchUser=async params=>{
  await sleep();
  throw Error('error test');
  /* return {
    code:200,
    msg:'success',
    data:{
      name:'huy',
      ...params,
    },
  }; */
};
export const fetchUser1=async params=>{
  await sleep(2000);
  return {
    code:200,
    msg:'success',
    data:{
      name:'huy1',
      ...params,
    },
  };
};
export const fetchUser2=async params=>{
  await sleep(3000);
  return {
    code:200,
    msg:'success',
    data:{
      name:'huy2',
      ...params,
    },
  };
};

export const fetchTest1=async params=>{
  await sleep();
  return {
    code:200,
    msg:'success',
    data:{
      name:'test',
      ...params,
    },
  };
};

export const fetchTest2=async params=>{
  await sleep();
  return {
    code:200,
    msg:'success',
    data:{
      msg:'get params from test1',
      ...params,
    },
  };
};


