<template>
    <div class="monitor-header">
        <div>
            <select>
                <option>堆垛机监控</option>
            </select>
        </div>
        <div>
            <select>
                <option>RGV</option>
            </select>
        </div>
        <div>
            <input />
            <i class="el-icon-search"></i>
        </div>
        <div @click="changeLayout">
            <i class="el-icon-s-grid"></i>
        </div>
    </div>
</template>

<script>
    import {mapActions,mapState} from 'vuex';
    export default {
        name: "MonitorHeader",
        computed: {
            ...mapState('map', {
                layout: state => state.layout
            })
        },
        methods: {
            ...mapActions('map', ['updateLayout']),
            changeLayout() {
                if (this.layout === 'LayoutLeftRight') {
                    this.updateLayout('LayoutVertical');
                } else {
                    this.updateLayout('LayoutLeftRight');
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .monitor-header{
        width: 100%;
        height: 40px;
        background: rgb(75, 92, 121);
        line-height: 40px;
        display: flex;
        div {
            i {
                position: relative;
                color: #ffffff;
                background: rgb(45, 63, 93);
                padding: 3px;
                top: 1.5px;
            }
            select{
                padding: 3px;
                width: 150px;
                margin-left: 30px;
                border-radius: 2px;
                background: rgb(45, 63, 93);
                border: none;
                color: #ffffff;
                outline: none;
            }
        }
        div:nth-child(2) {
            margin-left: 20%;
            select {
                width: 100px;
            }
        }
        div:nth-child(3) {
            input {
                background: rgb(45, 63, 93);
                border: none;
                outline: none;
                padding: 3px;
                margin-left: 10px;
                color: #ffffff;
                width: 150px;
            }
        }
        div:nth-child(4) {
            margin-left: 15px;
        }
    }
</style>
