import {useEffect,useState} from 'react';
import {useRouter,components,utils} from '@common';

import i18ns from '@app/i18n';
import configs from '@app/configs';
import getPermission from '@app/configs/mockKeys';
import permRouter from '@app/utils/permRouter';
import routers,{whiteRouters} from './router';

// import Skeleton from './skeleton';

const {Spinner}=components;
const {storage}=utils;

const ConfigProvider=({permission})=>{
  const language=storage.get('language')||'zh';
  const {router,title}=i18ns[language];
  const {output,loading,store,updateRouter}=useRouter({...configs,routers:permRouter(routers(router),permission),title});
  useEffect(()=>{
    const {subscribe,setState}=store;
    setState({permission});
    setState({langCfg:{...i18ns[language],language}});
    subscribe('update-router',result=>{
      updateRouter({routers:result.menu,exact:true});
    });
    subscribe('change-language',language=>{
      storage.set('language',language);
      const {router,title}=i18ns[language];
      setState({langCfg:{...i18ns[language],language}});
      updateRouter({routers:permRouter(routers(router),permission),title});
    });
  },[]);
  return <>
    {output}
    {loading&&<Spinner global />}
  </>;
};

const App=()=>{
  const [permission,setPermission]=useState(null);
  useEffect(()=>{
    const getPerm=async ()=>{
      try{
        const {permList}=await getPermission({time:+new Date()});
        setPermission(permList||[]);
      }catch(err){
        setPermission([]);
      }
    };
    getPerm();
  },[]);
  if(!permission){
    // return <Skeleton />;
    return <Spinner global />;
  }
  return <ConfigProvider permission={[...permission,...whiteRouters]} />;
};

export default App;


