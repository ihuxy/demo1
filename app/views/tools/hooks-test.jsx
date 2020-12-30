import {useState,useEffect,useCallback,useRef,useMemo,useLayoutEffect} from 'react';

import {utils,use,Link} from '@common';

const {usePrevious}=use;

import configs from '@app/configs';
import routers from '@app/router';

import './index.less';

const {sleep,travelList,sort,_sort,isAsync}=utils;


const str='/^aa/$/gim';

const a=str=>{
  const aa=str.split('/');
  const f=aa[0];
  const l=aa[aa.length-1];
  const reg=aa.slice(1,-1).join('/');
  const b=new RegExp(reg,l);
};



const arr=[
  {
    sort:'1',
    children:[
      {
        sort:'1-1',
      },
      {
        sort:'1-2',
      },
    ],
  },
  {
    sort:'2',
    children:[
      {
        sort:'2-1',
      },
      {
        sort:'2-2',
      },
    ],
  },
  {
    sort:'3',
    children:[
      {
        sort:'3-1',
      },
      {
        sort:'3-2',
      },
    ],
  },
];

console.log(_sort(arr,'sort'));

const promise=async ()=>{
  await sleep();
  return {
    name:'hy',
  };
};


const asyncFn=async ()=>{
  return 111;
};

console.log(1,Object.prototype.toString.call(asyncFn()),asyncFn().then);


let state=0;

const test=()=>{
  console.log('test');
};

/* sleep().then(res=>{
  // throw Error('hhhh');
}).finally(err=>{
  console.log(err);
}); */

const Index=props=>{
  const inRef=useRef({});
  const [input,setInput]=useState({state});
  const [output,setOutput]=useState({state});
  const [child1,setChild1]=useState(0);
  const [child2,setChild2]=useState(0);
  const [child3,setChild3]=useState(0);

  const [a,setA]=useState(0);
  const [b,setB]=useState(0);
  const [test,setTest]=useState({state:0,list:[{index:1,name:'1'}]});

  const [ut,setUt]=useTest11({...test,...configs,routers});
  // const testRef=useRef(0);
  const onChange=(opt={})=>{
    // console.log('input',input);
    console.log('inRef',inRef.current);
    if(state){
      return promise().then(res=>{
        console.log(res);
        setOutput({...inRef.current});
        // test(opt);
      });
    }
    setOutput({...inRef.current});
  };
  const updateState=useCallback(()=>{
    setInput(prev=>({
      ...prev,
      state:prev.state+1,
    }));
  },[]);
  /* useEffect(()=>{
    console.log('init',input);
    inRef.current=input;
    // onChange();
    // handleFn();
  },[input]); */


  const testBtn=()=>{
    setA(2);
    setTimeout(()=>{
      setB(2);
    },0);
  };

  /* useEffect(()=>{
    console.log(a,b);
  },[a,b]); */
  useEffect(()=>{
    setTimeout(()=>{
      setTest({state:12,list:[{index:12,name:'12'}]});
    },1000);
  },[]);

  // console.log(1112,ut);

  // const memoChild2=memo(()=><Child2 state={child2} />,[]);

  return <div className="test-hooks">
    {/* <p>{JSON.stringify(output)}</p>
    <button onClick={e=>updateState()}>trigger</button>
    <button onClick={e=>onChange()}>onChange</button>
    <button onClick={e=>props.router.push('/')}>onChange</button>
    <a href="/">popstate</a>

    <button onClick={e=>setChild1(prev=>prev+1)}>test</button>
    <div><Link>121</Link></div>
    <Child1 state={child1} />
    {useMemo(()=><Child2 state={child2} />,[child2])}
    <Child3 state={child3} />

    <button onClick={e=>testBtn()}>testBtn</button> */}

    {/* <Test state={test} /> */}
    {/* <Test1 key={test} state={test} /> */}

    <button onClick={e=>{
      setUt(prev=>{
        // console.log(2,prev);
        return {
          ...prev,
          state:prev.state+1,
        };
      });
    }}>testUt</button>
    <div>{11}</div>
  </div>;
};

const Child1=props=>{
  console.log('child1',props.state);
  return <h1>child1</h1>;
};
const Child2=props=>{
  console.log('child2',props.state);
  return <h1>child2</h1>;
};
const Child3=props=>{
  console.log('child3',props.state);
  return <h1>child3</h1>;
};

const Test=props=>{
  // const initProps=useMemo(()=>props.state,[props.state]);
  const initProps=props.state;
  const [state,setState]=useState(initProps);
  /* useEffect(()=>{
    console.log('props change:',value);
  },[value]); */
  useEffect(()=>{
    console.log('state change',initProps,state);
  },[initProps,state]);
  console.log('init test',initProps,state);
  return <>
    <h1>test: {state}</h1>
    <button onClick={e=>setState(prev=>prev+1)}>test</button>
  </>;
};
const Test1=props=>{
  const [state,setState]=useState(props.state);
  useEffect(()=>{
    console.log('state change',state);
  },[state]);
  console.log('init test1',state);
  return <>
    <h1>test: {state}</h1>
    <button onClick={e=>setState(prev=>prev+1)}>test</button>
  </>;
};

let index=0;

const useTest=props=>{
  const [state,setState]=useState(props);
  const [output,setOutput]=useState(null);
  const prevState=usePrevious(state);
  const handler=useCallback(()=>{
    /* if(true){
      setOutput('Promise');
      return new Promise(resolve=>setTimeout(resolve,5000));
    } */
    setOutput('123');
    return 'new Promise(resolve=>setTimeout(resolve,1000))';
  },[]);
  useEffect(()=>{
    let input=state;
    if(prevState?.stateKey===state.stateKey){
      input=props;
      console.log('props change',input);
    }else{
      console.log('state change',input);
    }
    handler();
  },[props,state]);

  console.log('test1',state.state,props.state,output);
  const update=value=>typeof value==='function'?setState(prev=>value({...prev,stateKey:++index})):setState({...value,stateKey:++index});
  return [state,update,output];
};

const useTest11=props=>{
  const initProps=useMemo(()=>props,[props]);
  const [state,setState]=useState(initProps);
  const prevState=usePrevious(state);
  useEffect(()=>{
    let input=state;
    if(prevState?.stateKey===state.stateKey){
      input=props;
      console.log('props change',input);
    }else{
      console.log('state change',input);
    }
  },[state,initProps]);
  const update=value=>typeof value==='function'?setState(prev=>value({...prev,stateKey:++index})):setState({...value,stateKey:++index});
  console.log('init test1',state.state,initProps.state);
  return [state,update];
};

const useTest1=props=>{
  // const initProps=useMemo(()=>props.state,[props.state]);
  // const [state,setState]=useState(props.state);
  const ref=useRef(props.state);
  const updateStatus=useRef();
  useEffect(()=>{
    updateStatus.current='props';
    ref.current=props.state;
    console.log('props change:',ref.current);
  },[props]);
  useEffect(()=>{
    console.log('state change',ref.current);
  },[ref.current]);
  const update=state=>{
    ref.current=state;
  };
  console.log('init test',ref.current);
  return [ref.current,update];
};


export default Index;



































