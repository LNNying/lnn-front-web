<template>
    <new-echart-frame>
        <template #default>
            <h2>Grid 直角坐标系内绘图网格，单个 grid 内最多可以放置上下两个 X 轴，左右两个 Y 轴。</h2>
        </template>
        <template #content>
            <div class="cust-height">
                <p>id：组件 ID。默认不指定。指定则可用于在 option 或者 API 中引用组件。</p>
                <p class="main">show：Boolean 是否显示直角坐标系网格</p>
                <p>zlevel：number 所有图形的zlevel的值 zlevel 大的 Canvas 会放在 zlevel 小的 Canvas 的上面</p>
                <p>z：number 组件的所有图形的z值。控制图形的前后顺序。z值小的图形会被z值大的图形覆盖。
                    z相比zlevel优先级更低，而且不会创建新的 Canvas。
                </p>
                <p class="main">left：string number grid组件距离左边距离 可为 '20%', 20, 'left', 'center', 'right' 默认 '10%'</p>
                <p class="main">top：string number grid组件距离上侧的距离 可为 '20%', 20, 'top', 'middle', 'bottom' 默认 60</p>
                <p class="main">right：string number gird组件距离右侧的距离 可为 '20%', 20 默认 '10%'</p>
                <p class="main">bottom：string  number grid组件距离下侧的距离 可为 '20%', 20 默认 60</p>
                <p class="main">width：string number grid组件的宽度 默认 'auto'</p>
                <p class="main">height：string number grid组件的高度 默认 'auto'</p>
                <p class="main">containLabel：grid 区域是否包含坐标轴的。<br />
                    <span class="margin-left-20">containLabel 为 false 的时候 <br />
                        <span class="margin-left-40">grid.left grid.right grid.top grid.bottom grid.width grid.height 决定的是由坐标轴形成的矩形的尺寸和位置。</span> <br />
                        <span class="margin-left-40">这比较适用于多个 grid 进行对齐的场景，因为往往多个 grid 对齐的时候，是依据坐标轴来对齐的。</span>
                    </span> <br /> <br />
                    <span class="margin-left-20">containLabel 为 true 的时候 <br />
                        <span class="margin-left-40">grid.left grid.right grid.top grid.bottom grid.width grid.height 决定的是包括了坐标轴标签在内的所有内容所形成的矩形的位置。</span> <br />
                        <span class="margin-left-40">这常用于『防止标签溢出』的场景，标签溢出指的是，标签长度动态变化时，可能会溢出容器或者覆盖其他组件。</span>
                    </span>
                </p>
                <p class="main">backgroundColor： string 网格背景色 默认 transparent </p>
                <p class="main">borderWidth：number 网格边框宽度 默认 1</p>
                <p class="main">borderColor：string 网格边框颜色 默认 '#ccc'</p>
                <p class="main">shadowBlur：number 图形阴影模糊度。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。</p>
                <p class="main">shadowColor：string 图形阴影模糊颜色。</p>
                <p class="main">shadowOffsetX：number 阴影X轴偏移量。</p>
                <p class="main">shadowOffsetY：number 阴影Y轴偏移量。</p>
                <p>tooltip：特定的tooltip设定 提示框。主要还是用 tooltip 这个配置<br />
                    <span class="margin-left-20">show：boolean 是否显示提示框</span> <br />
                    <span class="margin-left-20">trigger：string 触发类型 默认 item <br />
                        <span class="margin-left-40">item：数据项图形触发 主要用于散点图，饼图等无类目轴的图标</span> <br />
                        <span class="margin-left-40">axis：坐标轴触发，主要用于柱状图，折线图等会使用类目轴的图标</span> <br />
                        <span class="margin-left-40">none：什么都不发</span>
                    </span> <br />
                    <span class="margin-left-20">
                         axisPointer：坐标轴指示器配置项。<a href="https://echarts.apache.org/zh/option.html#grid.tooltip.axisPointer">查看更多配置项</a>
                    </span>
                    <span class="margin-left-20">position：string array function 提示浮层框的位置</span> <br />
                    <span class="margin-left-20">formatter：string function 提示框浮层内容格式器</span> <br />
                    <span class="margin-left-20">backgroundColor：string 提示框的背景色</span> <br />
                    <span class="margin-left-20">borderColor：string 提示框边框颜色</span> <br />
                    <span class="margin-left-20">borderWidth：number 提示框边框宽</span> <br />
                    <span class="margin-left-20">padding：number array 提示框内边距 默认 5</span> <br />
                    <span class="margin-left-20">textStyle：提示框文本样式 <a href="https://echarts.apache.org/zh/option.html#grid.tooltip.textStyle">查看更多配置属性</a></span> <br />
                    <span class="margin-left-20">extraCssText：额外附加到浮层的css样式  如：extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'</span>
                </p>
            </div>
        </template>
        <template #config>
            <div class="cust-height">
                <div class="flex">
                    <h3 style="color: #fff;">配置属性</h3>
                    <el-button size="mini" class="margin-left-10" type="primary" @click="init">运行</el-button>
                    <el-button size="mini" class="margin-left-10" type="primary" @click="resetData">重置</el-button>
                    <el-color-picker v-model="color" size="mini" class="margin-left-10" title="颜色选择" />
                </div>
                <div class="json-context">
                    <json-edit ref="json" :json-data="jsonData" />
                </div>
            </div>
        </template>
        <template #echart>
            <div ref="dom" class="echart-border"></div>
        </template>
    </new-echart-frame>
</template>

<script>
    import NewEchartFrame from "./component/NewEchartFrame";
    import * as echarts from 'echarts';
    import {ref, onMounted} from 'vue';
    import JsonEdit from "../../components/jsonEdit/JsonEdit";
    export default {
        name: "EchartsGrid",
        components: {JsonEdit, NewEchartFrame},
        setup() {
            let dom = ref(null);
            let json = ref(null);
            let mychart = ref(null);
            let color = ref('red');
            let jsonData = {
                id: null,
                show: true,
                tooltip: {}
            };

            function init() {
                if (mychart.value) {
                    mychart.value.clear();
                }
                let grid = JSON.parse(json.value.getJsonData());
                let option = {
                    grid: grid,
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        name: '数据1',
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar'
                    },{
                        name: '数据2',
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar'
                    }]
                };
                mychart.value = echarts.init(dom.value);
                mychart.value.setOption(option);
            }

            function resetData() {
                json.value.setJsonData(jsonData);
                init();
            }

            onMounted(() => {
                init();
            });

            return {
                dom,
                json,
                color,
                init,
                jsonData,
                resetData
            }
        }
    }
</script>

<style lang="less" scoped>
    p {
        margin: 10px;
        color: #c6c6c6;
    }
    .main {
        color: #ff4c15;
    }
    .json-context {
        height: calc(100vh - 130px);
    }
    a {
        color: #fff;
    }
</style>
