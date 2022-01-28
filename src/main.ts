import { createApp } from 'vue'
import App from './App.vue'
import 'lib-flexible'
// 使用 unplugin-vue-components 对组件进行自动引入
// import {
//   Button,
//   Icon,
//   Swipe,
//   SwipeItem,
//   Toast,
//   Grid,
//   GridItem,
//   Tabbar,
//   TabbarItem,
//   NavBar,
//   Empty
// } from 'vant'
import { createPinia } from 'pinia'
import router from './router'

const app = createApp(App)

const pinia = createPinia()

// app
//   .use(Toast)
//   .use(Icon)
//   .use(Button)
//   .use(Swipe)
//   .use(SwipeItem)
//   .use(GridItem)
//   .use(Grid)
//   .use(Tabbar)
//   .use(TabbarItem)
//   .use(NavBar)
//   .use(Empty)

app.use(pinia)

app.use(router)

app.mount('#app')
