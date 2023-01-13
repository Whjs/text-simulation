const { resolve } = require('path')
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import createImportPlugin from 'vite-plugin-import'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    rollupOptions:{
      input:[]
    }
  },
  optimizeDeps: {
    entries: [],
  },
  server: {
    port: 3900
  },
  plugins: [
    react({
      babel: {
        plugins: ['@babel/plugin-transform-react-jsx'],
      },
    }),
    createImportPlugin({
      onlyBuild: false,//是否只需要在生产环境中使用
      babelImportPluginOptions: [
        {
          libraryName: 'antd-mobile',
          libraryDirectory: 'es',
          style: true, // or 'css'
        },
      ],
    }),
  ],
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: '@import "./src/assets/style/global.less";',
      },
    },
  },
  resolve: {
    // 配置路径别名
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
