import {CreditCardOutlined} from '@ant-design/icons';
const router=[
  {
    path:'/auth',
    name:'auth',
    icon:<CreditCardOutlined />,
    component:()=>import('./'),
    denied:true,
  },
];
export default router;