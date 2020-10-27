import { defineConfig } from 'umi';
import route from './src/router/index'
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: route.routes,
});
