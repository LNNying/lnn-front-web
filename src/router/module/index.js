/**
 * meta  配置项
 * title 标题
 * icon  图标
 * noKeepAlive  是否缓存
 * hiddenMenu   是否显示
 */

import Layout from '@/views/layout/DefaultLayout'
import EmptyLayout from '@/views/layout/EmptyLayout'

const homeRouter = {
    path: '/',
    name: 'Home',
    redirect: '/home',
    component: Layout,
    meta: {
        title: '首页',
        icon: 'home-2-line'
    },
    children: [
        {
            path: '/home',
            name: 'home',
            component: () => import('@/views/home/Home.vue'),
            meta: {
                title: '首页',
                icon: 'home-2-line',
                noClosable: true,
                noKeepAlive: true
            }
        }
    ]
};
const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录',
        hideInMenu: true
    },
    component: () => import('@/views/login/Login.vue')
};
const baseRouter = {
    path: '/base',
    name: 'base',
    component: EmptyLayout,
    meta: {
        title: '',
        icon: 'home-2-line'
    },
    children: [
        {
            path: '/map-performance-test',
            name: 'map-performance-test',
            component: () => import('@/views/konva/PerformanceTest.vue'),
            meta: {
                title: 'Konva压力测试',
                icon: 'home-2-line',
                noClosable: true,
                noKeepAlive: true
            }
        },
        {
            path: '/map-preview',
            name: 'map-preview',
            component: () => import('@/views/konva/StagePreview.vue'),
            meta: {
                title: 'Konva压力测试',
                icon: 'home-2-line',
                noClosable: true,
                noKeepAlive: true
            }
        }
    ]
};
export default [
    homeRouter,
    loginRouter,
    baseRouter
];
