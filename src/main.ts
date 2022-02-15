/**
 * 严肃声明：
 * 开源版本请务必保留此注释头信息，若删除我方将保留所有法律责任追究！
 * 本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！
 * 可正常分享和学习源码，不得用于违法犯罪活动，违者必究！
 * Copyright (c) 2020 陈尼克 all rights reserved.
 * 版权所有，侵权必究！
 */

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
  Stepper,
  Image,
  Skeleton,
  CellGroup,
  Cell,
  Divider
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
  .use(Image)
  .use(Skeleton)
  .use(CellGroup)
  .use(Cell)
  .use(Divider)

app.use(pinia)

app.use(router)

app.mount('#app')
