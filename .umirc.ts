import { defineConfig } from 'umi';

export default defineConfig({
  favicon: '/favicon.ico',
  dva: {
    immer: true,
    hmr: false,
  },
  layout: {
    name: 'Ant Design',
    theme: 'pro',
    logo: '/logo.png',
    locale: false,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
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
  define: {
    'process.env.BASE_API': '/api',
  },
  proxy: {
    '/api': {
      target: 'http://mock.com',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  theme: {
    'primary-color': '#148aff',
    'link-color': '#148aff',
    'error-color': '#ff475a',
  },
  locale: {
    default: 'zh-CN',
    antd: true,
  },
});
