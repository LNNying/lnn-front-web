<template>
    <div :class="{'transverse': true, 'border-style': layout !== 'LayoutLeftRight'}" :style="{height: height}">
        <div class="menu-item"></div>
        <div class="menu-data" :style="{width: width}"></div>
        <div class="extend" v-if="layout !== 'LayoutLeftRight'" @mousedown="mouseDown" @mousemove="mouseMove"
             @mouseup="mouseUp"></div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: "MonitorMenu",
        data() {
            return {
                isDown: false
            }
        },
        computed: {
            ...mapState('map', {
                layout: state => state.layout
            }),
            height() {
                return this.layout === 'LayoutLeftRight' ? '100vh' : '300px'
            },
            width() {
                return this.layout === 'LayoutLeftRight' ? '300px' : 'calc(100vw - 36px)'
            }
        },
        methods: {
            mouseDown() {
                this.isDown = true;
            },
            mouseMove() {

            },
            mouseUp() {
                this.isDown = false;
            }
        }
    }
</script>

<style lang="less" scoped>
    .transverse {
        display: flex;
        position: relative;
        .menu-item {
            width: 35px;
            height: 100%;
            background: rgb(240, 242, 245);
        }
        .menu-data {
            height: 100%;
            background: #ffffff;
        }
        .extend {
            position: absolute;
            top: -4px;
            left: 50%;
            transform: translateX(-15px);
            width: 30px;
            height: 6px;
            background: rgb(157, 158, 160);
            border-radius: 5px;
            &:hover {
                top: -5px;
                height: 8px;
                cursor: s-resize;
            }
        }
    }

    .border-style {
        border-top: 2px solid rgb(215, 216, 219);
    }
</style>
