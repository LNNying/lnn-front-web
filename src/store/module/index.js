import routers from '@/router/router'
import {getMenuByRouter} from '../../lib/tools';
export default {
    namespaced: true,
    state: {
        routerList: []
    },
    mutations: {
    },
    actions: {
    },
    getters: {
        menuList: (state, getters, rootState) => getMenuByRouter(routers, rootState)
    }
}
