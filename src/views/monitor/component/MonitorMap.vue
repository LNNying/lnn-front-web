<template>
    <div class="transverse-map">
        <div id="container" :style="{height: height}"></div>
        <div class="warn-info" :style="{width: width}"></div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: "MonitorMap",
        props: {
            // height: {
            //     String,
            //     default: ''
            // }
        },
        computed: {
            ...mapState('map', {
                layout: state => state.layout
            }),
            height() {
                return this.layout === 'LayoutLeftRight' ? 'calc(100vh - 41px)' : 'calc(100vh - 300px)'
            },
            width() {
                return this.layout === 'LayoutLeftRight' ? 'calc(100vw - 348px)' : '100%'
            }
        }
    }
</script>

<style lang="less" scoped>
    .transverse-map{
        position: relative;
        .warn-info {
            position: absolute;
            bottom: 0;
            height: 35px;
            background: rgb(239, 240, 248);
        }
    }
</style>
