import {createRouter, createWebHashHistory} from 'vue-router'
import routes from './router';
import NProcess from 'nprogress';
// import config from '../config/index'

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

// const LONGIN_NAME = config.loginName;
// const HOME_NAME = config.homeName;

router.beforeEach((to, from, next) => {
    // const TOKEN = localStorage.getItem('token');
    NProcess.start();
    next();
    // // 没有登录
    // if (!TOKEN && to.name !== LONGIN_NAME) {
    //     next({
    //         name: LONGIN_NAME
    //     });
    // } else if (TOKEN && to.name === LONGIN_NAME) { // 登录 并且 跳转到登录界面
    //     next({
    //         name: HOME_NAME
    //     });
    // } else {
    //     // 这里获取登录信息 以及
    //     next();
    // }
});

router.afterEach(() => {
    NProcess.done();
    window.scrollTo(0, 0)
});

export default router
