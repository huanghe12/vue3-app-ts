import { createApp } from 'vue'
import App from './App.vue'
import 'lib-flexible'

import { createPinia } from 'pinia'
import router from './router'

import {
  ActionBar,
  ActionBarIcon,
  ActionBarButton,
  Form,
  Field,
  SwipeCell,
  Icon,
  Card,
  Checkbox,
  CheckboxGroup,
  Button,
  Swipe,
  SwipeItem,
  GridItem,
  Grid,
  Toast,
  Tabbar,
  TabbarItem,
  NavBar,
  Empty,
  Stepper
} from 'vant'
const app = createApp(App)

const pinia = createPinia()

app
  .use(ActionBarButton)
  .use(ActionBarIcon)
  .use(ActionBar)
  .use(Toast)
  .use(Form)
  .use(Field)
  .use(SwipeCell)
  .use(Icon)
  .use(Card)
  .use(Button)
  .use(Swipe)
  .use(SwipeItem)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(Grid)
  .use(GridItem)
  .use(Tabbar)
  .use(TabbarItem)
  .use(NavBar)
  .use(Empty)
  .use(Stepper)

app.use(pinia)

app.use(router)

app.mount('#app')
