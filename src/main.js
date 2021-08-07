import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css'
import './index.less'
import router from './router'
import store from './store'
import Test from '../src/views/costom/index'

createApp(App)
    .use(store)
    .use(router)
    .use(ElementPlus)
    .use(Test)
    .mount('#app');
