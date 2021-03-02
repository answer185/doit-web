import { defineConfig } from 'umi';

export default defineConfig({
  base: '/doit',
  hash: true,
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
