/**
 * meta  配置项
 * title 标题
 * icon  图标
 * noKeepAlive  是否缓存
 * hiddenMenu   是否显示
 */

import Layout from '@/views/layout/DefaultLayout'
import Person from '@/views/layout/PersonLayout'

const homeRouter = {
    path: '/',
    name: 'Home',
    redirect: '/home',
    component: Person,
    meta: {
        title: '首页',
        hideInMenu: true
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
    path: '/login-box',
    name: 'login-box',
    component: Layout,
    meta: {
        title: 'Login - 登录',
        hideInMenu: true
    },
    children: [
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/login/Login.vue'),
        }
    ]
};
const konvaRouter = {
    path: '/konva',
    name: 'konva',
    component: Person,
    meta: {
        title: 'Konva开发',
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
        },
        {
            path: '/canvas-map',
            name: 'canvas-map',
            component: () => import('@/views/konva/CanvasMap.vue'),
            meta: {
                title: 'Canvas-Konva界面',
                icon: 'home-2-line',
                noClosable: true,
                noKeepAlive: true
            }
        },
        {
            path: '/canvas-image',
            name: 'canvas-image',
            component: () => import('@/views/konva/CanvasImage.vue'),
            meta: {
                title: 'Canvas-Konva-Image界面',
                icon: 'home-2-line',
                noClosable: true,
                noKeepAlive: true
            }
        },
        {
            path: '/canvas-curve',
            name: 'canvas-curve',
            component: () => import('@/views/konva/CanvasCurve.vue'),
            meta: {
                title: 'Canvas-Konva曲线',
                icon: 'home-2-line',
                noClosable: true,
                noKeepAlive: true
            }
        },
        {
            path: '/canvas-two',
            name: 'canvas-two',
            component: () => import('@/views/konva/CanvasTwo.vue'),
            meta: {
                title: 'Konva两个舞台',
                icon: 'home-2-line',
                noClosable: true,
                noKeepAlive: true
            }
        },
        {
            path: '/monitor-rotate',
            name: 'monitor-rotate',
            component: () => import('@/views/konva/MulateRotate.vue'),
            meta: {
                title: 'konva 旋转',
                icon: 'home-2-line',
                noClosable: true,
                noKeepAlive: true
            }
        }
    ]
};

const kownRouter = {
    path: '/kown',
    name: 'kown',
    component: Person,
    meta: {
        title: '知识点',
        icon: 'home-2-line'
    },
    children: [
        {
            path: '/directive',
            name: 'directive',
            component: () => import('@/views/vue/Directive.vue'),
            meta: {
                title: '自定义指令',
                icon: 'home-2-line',
                noClosable: true,
                noKeepAlive: true
            }
        }
    ]
};

const echartRouter = {
    path: '/echart',
    name: 'echart',
    component: Person,
    meta: {
        title: 'Echart体系',
        icon: 'home-2-line'
    },
    children: [
        {
            path: '/echart-title',
            name: 'echart-title',
            component: () => import('@/views/echart/EchartsTitle.vue'),
            meta: {
                title: 'echart Title配置',
                icon: 'home-2-line',
                noClosable: true,
                noKeepAlive: true
            }
        },
        {
            path: '/echart-legend',
            name: 'echart-legend',
            component: () => import('@/views/echart/EchartsLegend.vue'),
            meta: {
                title: 'echart Legend配置',
                icon: 'home-2-line',
                noClosable: true,
                noKeepAlive: true
            }
        }
    ]
};

const httpRouter = {
    path: '/http',
    name: 'http',
    component: Person,
    meta: {
        title: '网络知识',
        icon: 'home-2-line'
    },
    children: [
        {
            path: '/axios',
            name: 'axios',
            component: () => import('@/views/axios/TestAxios.vue'),
            meta: {
                title: 'Axios使用',
                icon: 'home-2-line',
                noClosable: true,
                noKeepAlive: true
            }
        }
    ]
};

const personRouter = {
    path: '/person',
    name: 'person',
    component: Person,
    meta: {
        title: '网络知识',
        icon: 'home-2-line'
    },
    children: [
        {
            path: '/info',
            name: 'info',
            component: () => import('@/views/person/Info.vue'),
            meta: {
                title: '个人信息',
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
    konvaRouter,
    echartRouter,
    kownRouter,
    httpRouter,
    personRouter
];
