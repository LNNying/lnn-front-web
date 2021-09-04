import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css'
import './index.less'
import router from './router'
import store from './store'
import Test from '../src/views/costom/index'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

createApp(App)
    .use(store)
    .use(router)
    .use(ElementPlus, {
        locale: zhCn
    })
    .use(Test)
    .mount('#app');
