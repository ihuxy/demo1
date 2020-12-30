import React,{useEffect,useCallback,useState,useRef} from 'react';
import {fetchUser,fetchUser1,fetchUser2,fetchTest1,fetchTest2} from './api';
import {utils,use} from '@common';
const {sleep}=utils;
const {useAsync}=use;

import './index.less';


/* const useHandleResult=result=>{
  const [state,update]=useAsync();
  const [data,setData]=useState({});
  Object.keys(state).map(v=>{
    const {result,error,pending}=state[v];
    if(result){
      const {data,msg,code}=result;
      if(code='000000'){

      }
    }
  });
  return [state,update];
}; */

const useTest=()=>{
  const tt=useRef([]);
  const cb=useCallback(res=>{
    tt.current.push(res);
    console.log(tt.current);
  },[]);
  return cb;
};


const aa=async ()=>{
  await sleep(4000);
  return '77777';
};
const cancelablePromise=(promise,timeout=3000)=>{
  let cancelFn=null;
  const promiseFn=new Promise((resolve,reject)=>{
    let errMsg=false;
    cancelFn=(msg='canceled')=>{
      errMsg=msg;
      resolve({errMsg});
    };
    setTimeout(()=>cancelFn('请求超时！'),timeout);
    promise.then(result=>resolve({result,errMsg})).catch(error=>reject(error));
  });
  return {
    promiseFn,
    cancelFn,
  };
};

const bb=async ()=>{
  await sleep(2000);
  return 123;
};

const cc=()=>{
  return bb().then(res=>{
    console.log('cc ',res);
    if(res===12){
      throw 333;
    }
    return 56788;
  }).catch(err=>{
    console.log('cc err ',err);
  });
};

const dd=()=>{
  cc().then(res=>{
    console.log('dd ',res);
  }).catch(err=>{
    console.log('dd err ',err);
  });
};

dd();


let id=0;

const testAsync=async ()=>{
  const test1=await fetchTest1();
  const test2=await fetchTest2(test1?.data);
  return test2;
};

const Index=props=>{
  const cbtest=useTest();
  const [user,setUser]=useAsync({});
  const upUser=useCallback(()=>{
    setUser({result:fetchUser({id:id++})});
    cbtest(id++);
  },[]);
  const upUsers=useCallback(()=>{
    setUser({
      result1:fetchUser1({id:id++}),
      result2:fetchUser2({id:id++}),
    });
  },[]);
  useEffect(()=>{
    upUser();
    upUsers();
  },[]);
  useEffect(()=>{
    setUser({
      test:testAsync(),
    });
  },[]);
  const tt=()=>{
    const {promiseFn,cancelFn}=cancelablePromise(aa());
    promiseFn.then(res=>{
      console.log('res: ',res);
    }).catch(err=>{
      console.log('err: ',err);
    });
  };
  console.log(user);
  const {result,result1,result2,test}=user;
  return <div className="page">
    <div>{test?.data?.msg??'no data'}</div>
    <div className="user">
      <button onClick={upUser}>update user</button>
      <p>
        <span>id：</span>
        {/* <span>{result?.data.id??'fetching...'}</span> */}
        <span>{result?.pending?'fetching...':result?.data?.id}</span>
      </p>
      <p>
        <span>name：</span>
        <span>{result?.pending?'fetching...':result?.data?.name}</span>
      </p>
    </div>
    <div className="users">
      <button onClick={upUsers}>update users</button>
      <p>
        <span>id：</span>
        <span>{result1?.pending?'fetching...':result1?.data?.id}</span>
      </p>
      <p>
        <span>name：</span>
        <span>{result1?.pending?'fetching...':result1?.data?.name}</span>
      </p>
      <p>
        <span>id：</span>
        <span>{result2?.pending?'fetching...':result2?.data?.id}</span>
      </p>
      <p>
        <span>name：</span>
        <span>{result2?.pending?'fetching...':result2?.data?.name}</span>
      </p>
      <div>
        <button onClick={tt}>run</button>
      </div>
    </div>
  </div>;
};

export default Index;

















