import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    proxy:{
      // '/api':{
      //   target:'http://127.0.0.1:4523/m1/3354246-0-default',
      //   changeOrigin:true,
      //   rewrite:path=>path.replace(/^\/api/,'')
      // },
      '/api':{
        target:'http://192.168.5.139:10086',
        changeOrigin:true,
        rewrite:path=>path.replace(/^\/api/,'')
      },
    }
  },
})
