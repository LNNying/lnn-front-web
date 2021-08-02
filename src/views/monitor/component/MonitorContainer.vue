<template>
    <div class="monitor-container">
        <component :is="layout"></component>
    </div>
</template>

<script>

    import LayoutLeftRight from "./LayoutLeftRight";
    import LayoutVertical from "./LayoutVertical";
    import {mapState} from 'vuex';
    export default {
        name: "MonitorContainer",
        components: {LayoutVertical, LayoutLeftRight},
        computed: {
            ...mapState('map', {
                layout: state => state.layout
            })
        }
    }
</script>

<style lang="less" scoped>
    .monitor-container {
        height: calc(100vh - 40px);
    }
</style>
