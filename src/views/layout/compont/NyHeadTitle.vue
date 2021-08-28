<template>
    <div class="ny-head-title">
        <img src="../../../assets/sys/mouse.png"/>
        <div class="ny-title">{{ title }}</div>
    </div>
</template>

<script>
    import config from '../../../config/index'
    export default {
        name: "NyHeadTitle",
        setup() {

            return {
                title: config.title
            };
        }
    }
</script>

<style lang="less" scoped>
    @font-face {
        font-family: 'fontname';
        src: url('../../../assets/fonts/youshe.ttf')
    }
    .ny-head-title {
        height: 100%;
        display: flex;
        line-height: 60px;
        img {
            margin-top: 10px;
            width: 40px;
            height: 40px;
        }
        .ny-title {
            margin-left: 20px;
            font-weight: bold;
            color: #1989fa;
            cursor: default;
            font-size: 18px;
            font-family: '微软雅黑';
            &:hover {
                color: #046EFA;
            }
        }
    }
</style>
