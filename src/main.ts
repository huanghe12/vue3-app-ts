import { createApp } from 'vue'
import App from './App.vue'
import 'lib-flexible'
import {
  ActionBar,
  ActionBarButton,
  ActionBarIcon,
  AddressEdit,
  AddressList,
  Button,
  Card,
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  ContactCard,
  Dialog,
  Divider,
  Field,
  Form,
  Icon,
  List,
  Loading,
  Overlay,
  Popup,
  PullRefresh,
  Skeleton,
  Stepper,
  SubmitBar,
  Swipe,
  SwipeCell,
  SwipeItem,
  Tab,
  Tabs,
  Toast,
  Grid,
  GridItem
} from 'vant'
import { createPinia } from 'pinia'
import router from './router'

const app = createApp(App)

const pinia = createPinia()

app
  .use(ActionBarButton)
  .use(ActionBarIcon)
  .use(ActionBar)
  .use(Divider)
  .use(Popup)
  .use(Overlay)
  .use(Loading)
  .use(Dialog)
  .use(Toast)
  .use(ContactCard)
  .use(Form)
  .use(AddressEdit)
  .use(AddressList)
  .use(Field)
  .use(CellGroup)
  .use(Cell)
  .use(SwipeCell)
  .use(Icon)
  .use(Stepper)
  .use(Card)
  .use(Button)
  .use(Swipe)
  .use(SwipeItem)
  .use(PullRefresh)
  .use(List)
  .use(Tab)
  .use(Tabs)
  .use(SubmitBar)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(Skeleton)
  .use(GridItem)
  .use(Grid)

app.use(pinia)

app.use(router)

app.mount('#app')
