<template>
    <el-container class="ny-main">
        <el-aside class="ny-menu" width="250px">
            <main-menu :menu-list="menuList"></main-menu>
        </el-aside>
        <el-container>
            <el-header class="ny-header">Header</el-header>
            <el-main class="ny-main">
                <router-view v-slot="{ Component }">
                    <keep-alive>
                        <component :is="Component" />
                    </keep-alive>
                </router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import MainMenu from "../../components/menu/MainMenu";
    import {computed, onMounted} from 'vue'
    import {useStore} from 'vuex'
    export default {
        name: "DefaultLayout",
        components: {MainMenu},
        setup() {
            const STORE = useStore();
            let menuList = computed(() => STORE.getters['index/menuList']);

            onMounted(() => {

            });
            return {
                menuList,
            }
        }
    }
</script>

<style scoped lang="less">
@import "./style/defaultLayout.less";
</style>
