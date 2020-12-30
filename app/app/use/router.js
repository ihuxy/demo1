import {DesktopOutlined,CreditCardOutlined} from '@ant-design/icons';
const router={
  path:'/use',
  name:'use',
  icon:<DesktopOutlined />,
  children:[
    {
      path:'/fetch',
      name:'useFetch',
      icon:<CreditCardOutlined />,
      component:()=>import('./fetch'),
    },
    {
      path:'/search',
      name:'useSearch',
      icon:<CreditCardOutlined />,
      component:()=>import('./search'),
    },
    {
      path:'/viewSize',
      name:'useViewSize',
      icon:<CreditCardOutlined />,
      component:()=>import('./viewSize'),
    },

    {
      path:'/eleResize',
      name:'useEleSize',
      icon:<CreditCardOutlined />,
      component:()=>import('./viewSize/eleResize'),
    },
    {
      path:'/style',
      name:'useStyle',
      icon:<CreditCardOutlined />,
      // denied:true,
      component:()=>import('./style'),
    },
    {
      path:'/message',
      name:'useMessage',
      icon:<CreditCardOutlined />,
      component:()=>import('./message'),
    },
  ],
};
export default router;