import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import { DatePicker } from 'ant-design-vue';
import router from '@/router/AppRouter'
import store from '@/databases/AppStore'
import App from './App';
import 'ant-design-vue/dist/antd.css';

const config = {
  name: 'ant-design-vue',
}

const app = createApp(App);
app.config.globalProperties.globalVar = config

app
.use(store)
.use(router)
.use(Antd)
.use(DatePicker)
.mount('#app')
