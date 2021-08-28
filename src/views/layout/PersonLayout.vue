<template>
    <div>
        <ny-menu>
            <template #default>
                <div style="height: 100vh;">adfsa</div>
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
        <el-container class="container">
            <router-view />
        </el-container>
    </div>
</template>

<script>
    import NyHead from "./compont/NyHead";
    import NyHeadTitle from "./compont/NyHeadTitle";
    import NyLogin from "./compont/NyLogin";
    import NyMenu from "./compont/NyMenu";
    export default {
        name: "PersonLayout",
        components: {NyMenu, NyLogin, NyHeadTitle, NyHead}
    }
</script>

<style lang="less" scoped>
    .header {
        background-color: #fff;
        border-bottom: 1px solid #dcdfe6;
        display: flex;
        justify-content: space-around;
        padding: 0;
    }
    .container {
        padding: 10px;
        height: calc(100vh - 60px);
        overflow-y: scroll;
        overflow-x: hidden;
    }
</style>
