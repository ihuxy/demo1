import {DesktopOutlined,CreditCardOutlined} from '@ant-design/icons';
const router={
  path:'/playground',
  name:'playground',
  icon:<DesktopOutlined />,
  children:[
    {
      path:'/t1',
      name:'test1',
      icon:<CreditCardOutlined />,
      component:()=>import('./t1'),
    },
    {
      path:'/t2',
      name:'test2',
      icon:<CreditCardOutlined />,
      component:()=>import('./t1'),
    },
    {
      path:'/t3',
      name:'test3',
      icon:<CreditCardOutlined />,
      children:[
        {
          path:'/t3-1',
          name:'test3-1',
          icon:<CreditCardOutlined />,
          component:()=>import('./t1'),
        },
        {
          path:'/t3-2',
          name:'test3-2',
          icon:<CreditCardOutlined />,
          component:()=>import('./t1'),
        },
        {
          path:'/t3-3',
          name:'test3-3',
          icon:<CreditCardOutlined />,
          children:[
            {
              path:'/t3-3-1',
              name:'test3-3-1',
              icon:<CreditCardOutlined />,
              component:()=>import('./t1'),
            },
            {
              path:'/t3-3-2',
              name:'test3-3-2',
              icon:<CreditCardOutlined />,
              component:()=>import('./t1'),
            },
            {
              path:'/t3-3-3',
              name:'test3-3-3',
              icon:<CreditCardOutlined />,
              component:()=>import('./t1'),
            },
            {
              path:'/t3-3-4',
              name:'test3-3-4',
              icon:<CreditCardOutlined />,
              component:()=>import('./t1'),
            },
            {
              path:'/t3-3-5',
              name:'test3-3-5',
              icon:<CreditCardOutlined />,
              component:()=>import('./t1'),
            },
          ],
        },
      ],
    },
    {
      path:'/t4',
      name:'test4',
      icon:<CreditCardOutlined />,
      component:()=>import('./t1'),
    },
  ],
};
export default router;