export default {
  routes: [
    {
      path: '/',
      component: '@/pages/layout',
      wrappers: ['@/wrappers/auth'],
      routes: [
        {
          name: '列表',
          path: '/list',
          component: '@/pages/list',
          routes: [
            {
              path: '/list/banner',
              component: '@/pages/list/banner',
              wrappers: ['@/wrappers/auth'],
              name: 'banner列表',
            }
          ]
        },
        {
          path: '/news',
          component: '@/pages/news',
          wrappers: ['@/wrappers/auth'],
          name: '新闻'
        },
        {
          path: '/details',
          component: '@/pages/details',
          wrappers: ['@/wrappers/auth'],
          name: '详情'
        },
      ],
    },
    {
      path: '/login',
      component: '@/pages/login',
      wrappers: ['@/wrappers/auth'],
    },
  ],
};
