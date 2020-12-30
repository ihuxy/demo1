const permRouter=(routers,permList,permKey='path',prefix='')=>{
  prefix=prefix==='/'?'':prefix;
  return routers.map(router=>{
    const path=prefix+router[permKey];
    if(router.children?.length){
      router.children=permRouter(router.children,permList,permKey,path);
    }
    // router.denied=router.denied==null?!permList.includes(path):router.denied;
    return router;
  });
};

export default permRouter;


