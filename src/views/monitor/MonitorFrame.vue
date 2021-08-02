<template>
    <div class="monitor-frame">
        <monitor-header></monitor-header>
        <monitor-container></monitor-container>
    </div>
</template>

<script>
    import MonitorHeader from "./component/MonitorHeader";
    import MonitorContainer from "./component/MonitorContainer";
    export default {
        name: "MonitorFrame",
        components: {MonitorContainer, MonitorHeader}
    }
</script>

<style lang="less" scoped>
    .monitor-frame {
        position: relative;
        height: 100vh;
        overflow: hidden;
        background: rgb(197, 205, 216);
    }
</style>
