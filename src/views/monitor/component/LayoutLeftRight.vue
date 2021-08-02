<template>
    <div class="layout">
        <div class="menu">
            <monitor-menu></monitor-menu>
        </div>
        <div class="container">
            <monitor-map></monitor-map>
        </div>
    </div>
</template>

<script>
    import MonitorMenu from "./MonitorMenu";
    import MonitorMap from "./MonitorMap";
    export default {
        name: "LayoutLeftRight",
        components: {MonitorMap, MonitorMenu}
    }
</script>

<style lang="less" scoped>
    .layout {
        display: flex;
        height: 100%;
        width: 100%;
        .menu{
            padding: 10px 0 0 10px;
            height: 100%;
            display: flex;
        }
        .container {
            width: 100%;
            height: 100%;
        }
    }
</style>
