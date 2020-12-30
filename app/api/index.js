import {utils} from '@common';
import fetcher from './fetcher';
import user from '@app/model/mock1';

const {sleep,wrapPromise}=utils;

export const fetchUserInfo=async (params)=>{
  await sleep();
  return {
    code:200,
    msg:'success',
    data:user,
  };
};

const sysUrl='/api/system';

export const login=data=>wrapPromise(fetcher.post(`${sysUrl}/oauth/token`,{data}));

export const getUserInfo=()=>wrapPromise(fetcher.get(`${sysUrl}/oauth/token`));

export const getUserDetail=id=>wrapPromise(fetcher.get(`${sysUrl}/system/user/${id}/info`));





