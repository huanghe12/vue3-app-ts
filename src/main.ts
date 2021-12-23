import { createApp } from 'vue'
import App from './App.vue'
import 'lib-flexible'
import { Button } from 'vant'

const app = createApp(App)
app.use(Button)

app.mount('#app')
