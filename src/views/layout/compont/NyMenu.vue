<template>
    <div class="ny-drawer-open ny-border-left" title="菜单" @click="isDrawer = true">
        <i class="ny ny-outdent" title="菜单"></i>
    </div>
    <el-drawer
            size="250px"
            title="菜单列表"
            v-model="isDrawer"
            :direction="direction"
            :modal="false"
            :close-on-click-modal="false"
            destroy-on-close
            @close="isDrawer = false">
        <span>我来啦!</span>
    </el-drawer>
</template>

<script>
    import {reactive, toRefs} from 'vue';
    export default {
        name: "NyMenu",
        setup() {
            let dataInfo = reactive({
                isDrawer: false,
                direction: 'ltr'
            });

            return {
                ...toRefs(dataInfo)
            };
        }
    }
</script>

<style lang="less" scoped>
    @border-color: rgb(229, 231, 236);
    .ny-drawer-open {
        position: absolute;
        width: 10px;
        height: 30px;
        z-index: 100;
        top: 50%;
        margin-top: -15px;
        i {
            position: absolute;
            font-weight: bold;
            margin-left: -15px;
            top: 5px;
            transform: rotateZ(180deg);
        }
    }
    .ny-border-left {
        border-bottom: 9px solid transparent;
        border-left: 16px solid @border-color;
        border-right: none;
        border-top: 9px solid transparent;
        transition: border-left-width .3s;

        &:hover {
            border-left: 20px solid @border-color;
        }
    }
</style>
