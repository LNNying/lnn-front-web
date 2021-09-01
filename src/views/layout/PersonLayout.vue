<template>
    <div>
        <ny-menu>
            <template #default>
                <main-menu :menu-list="menuList" />
            </template>
        </ny-menu>
        <el-header class="header">
            <ny-head>
                <template #default>
                    <ny-head-title />
                    <ny-login />
                </template>
            </ny-head>
        </el-header>
        <el-main class="container">
            <router-view v-slot="{ Component }">
                <keep-alive>
                    <component :is="Component" />
                </keep-alive>
            </router-view>
        </el-main>
    </div>
</template>

<script>
    import NyHead from "./compont/NyHead";
    import NyHeadTitle from "./compont/NyHeadTitle";
    import NyLogin from "./compont/NyLogin";
    import NyMenu from "./compont/NyMenu";
    import MainMenu from "../../components/menu/MainMenu";
    import {computed} from 'vue';
    import {useStore} from 'vuex';
    export default {
        name: "PersonLayout",
        components: {MainMenu, NyMenu, NyLogin, NyHeadTitle, NyHead},
        setup() {
            const store = useStore();
            let menuList = computed(() => store.getters['index/menuList']);
            return {
                menuList
            };
        }
    }
</script>

<style lang="less" scoped>
    @import "./style/layout.less";
</style>
