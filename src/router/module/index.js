/**
 * meta  配置项
 * title 标题
 * icon  图标
 * noKeepAlive  是否缓存
 * hiddenMenu   是否显示
 */

import Layout from '@/views/layout/DefaultLayout'
export default [
    {
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
                path: 'home',
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
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: 'Login - 登录',
            hideInMenu: true
        },
        component: () => import('@/views/login/Login.vue')
    }
];
