<template>
    <div class="vertical">
        <div>
            <monitor-map></monitor-map>
        </div>
        <div>
            <monitor-menu></monitor-menu>
        </div>
    </div>
</template>

<script>
    import MonitorMap from "./MonitorMap";
    import MonitorMenu from "./MonitorMenu";
    export default {
        name: "LayoutVertical",
        components: {MonitorMenu, MonitorMap}
    }
</script>

<style lang="less" scoped>
    .vertical {
        width: 100%;
        height: 100%;
    }
</style>
