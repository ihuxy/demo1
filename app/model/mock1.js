import { UserOutlined, PoweroffOutlined } from '@ant-design/icons';
import avatar from '@app/assets/images/usr.jpg';

const navDrop=[
  {
    name:'个人中心',
    icon:<UserOutlined />,
    path:'',
  },
  {
    name:'退出',
    icon:<PoweroffOutlined />,
    path:'/user/login',
  },
];

const user={
  id:'0',
  name:'ihuxy',
  age:18,
  role:5,
  email:'ah.yiru@gmail.com',
  addr:'wuhan',
  avatar:avatar,
  nav:navDrop,
};

export default user;

