export default {
  routes: [
    {
      path: '/',
      component: '@/pages/layout',
      wrappers: ['@/wrappers/auth'],
      // routes: [
      //   {
      //     path: '/list',
      //     component: '@/pages/list',
      //     wrappers: ['@/wrappers/auth'],
      //   },
      // ],
    },
    {
      path: '/login',
      component: '@/pages/login',
      wrappers: ['@/wrappers/auth'],
    },
  ],
};
