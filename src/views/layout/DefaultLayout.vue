<template>
    <el-container class="main">
        <el-aside style="background: red">
            <div class="menu"></div>
        </el-aside>
        <el-container>
            <el-header class="header">Header</el-header>
            <el-main class="main">
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
    export default {
        name: "DefaultLayout"
    }
</script>

<style scoped lang="less">
@import "./style/defaultLayout.less";
</style>