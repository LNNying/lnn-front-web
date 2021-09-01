<template>
    <div>
        <el-header class="header">
            <ny-head>
                <template #default>
                    <ny-head-title />
                    <ny-login />
                </template>
            </ny-head>
        </el-header>
        <el-main class="container-login">
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
    export default {
        name: "DefaultLayout",
        components: {NyLogin, NyHeadTitle, NyHead}
    }
</script>

<style scoped lang="less">
@import "./style/layout.less";
    .container-login {
        height: calc(100vh - 60px);
        overflow: hidden;
    }
</style>
