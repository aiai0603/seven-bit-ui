import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  // 配置前端服务地址和端口
  server: {
    host: '0.0.0.0',
    port: 8991,
    // 是否开启 https
    https: false
  }
});
