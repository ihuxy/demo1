import React,{useEffect,useRef,useState} from 'react';

import {Modal,Dropdown,Notify,Message} from '@common/components';

import './index.less';


const Index=props=>{
  const [modalVisible,setModalVisible]=useState(false);
  const [modalVisible1,setModalVisible1]=useState(false);
  const [dropVisible,setDropVisible]=useState(false);
  const [dropVisible1,setDropVisible1]=useState(false);
  const [notifyVisible,setNotifyVisible]=useState(false);
  const [messageVisible,setMessageVisible]=useState(false);
  return <div className="test4">
    <div className="demo">
      <button onClick={()=>setModalVisible(true)}>open</button>
      <Modal isOpen={modalVisible} onClose={()=>setModalVisible(false)} style={{textAlign:'center',padding:'20px',height:'400px',width:'600px'}}>
        <div>
          <h1>hhhhh</h1>
          <p>2222</p>
          <button onClick={()=>setModalVisible1(true)}>open1</button>
        </div>
      </Modal>
      <Modal isOpen={modalVisible1} onClose={()=>setModalVisible1(false)} style={{textAlign:'center',padding:'20px',marginTop:'30px'}}>
        <div>
          <h1>3333333</h1>
          <p>444444</p>
        </div>
      </Modal>
    </div>
    <div className="demo">
      <button onClick={()=>setDropVisible(true)}>open</button>
      <Dropdown isOpen={dropVisible} onClose={()=>setDropVisible(false)} style={{textAlign:'center',padding:'20px',height:'400px',width:'600px'}}>
        <div>
          <h1>hhhhh</h1>
          <p>2222</p>
          <button onClick={()=>setDropVisible1(true)}>open1</button>
        </div>
      </Dropdown>
      <Dropdown isOpen={dropVisible1} onClose={()=>setDropVisible1(false)} style={{textAlign:'center',padding:'20px',marginTop:'30px'}}>
        <div>
          <h1>3333333</h1>
          <p>444444</p>
        </div>
      </Dropdown>
    </div>
    <div className="demo">
      <button onClick={()=>setNotifyVisible(true)}>open</button>
      <Notify isOpen={notifyVisible} onClose={()=>setNotifyVisible(false)} style={{textAlign:'center',padding:'20px',height:'400px',width:'600px'}}>
        <div>
          <h1>hhhhh</h1>
          <p>2222</p>
          <button onClick={()=>setMessageVisible(true)}>open1</button>
        </div>
      </Notify>
      <Message isOpen={messageVisible} onClose={()=>setMessageVisible(false)} style={{textAlign:'center',padding:'20px',marginTop:'30px'}}>
        <div>
          <h1>3333333</h1>
          <p>444444</p>
        </div>
      </Message>
    </div>
  </div>;
};

export default Index;

















