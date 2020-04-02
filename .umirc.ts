import { defineConfig } from 'umi';

export default defineConfig({
  layout: {
    name: 'Ant Design',
    theme: 'pro',
    locale: false,
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      menu: {
        name: '首页',
        icon: 'HomeOutlined',
      },
    },
  ],
});
