import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: name => `vant/es/${name}/style/index`
        }
      ]
    }),
    // 自动引入API
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      //为true时在项目根目录自动创建
      dts: 'src/types/auto-imports.d.ts'
    })
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: '/src'
      }
    ]
  },
  server: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://backend-api-01.newbee.ltd/api/v1',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        /*
          引入var.scss全局预定义变量，
          如果引入多个文件，
          可以使用
          '@import "@/assets/scss/globalVariable1.scss";@import "@/assets/scss/globalVariable2.scss";'
          这种格式
				 */
        additionalData: '@import "@/assets/scss/mixin.scss";'
      }
    }
  }
})
