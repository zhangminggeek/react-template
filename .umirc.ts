import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [{ path: '/', component: '@/pages/index' }],
    },
  ],
});
