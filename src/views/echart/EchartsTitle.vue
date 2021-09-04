<template>
    <echart-frame>
        <template #default>
            <h3>Echart Title配置属性</h3>
        </template>
        <template #echart>
            <div ref="dom" class="echart-border"></div>
        </template>
        <template #content>
            <h4>配置项--Title</h4>
            <h6 style="color: #a6baee;">默认值 颜色的默认一般是 transparent(透明) 数字一般是 0 偏向那个方向一般是 auto</h6>
            <p>id：组件ID，用于指定在option或API中引用组件。</p>
            <p>text：标题名称</p>
            <p>subText：副标题 支持\n换行</p>
            <p>show：是否显示
                <el-switch v-model="show" size="mini" class="margin-left-10" @change="init" />
            </p>
            <p>link：主标题文本连接</p>
            <p>subLink：副标题文本链接</p>
            <p>target：指定窗口打开主标题超链接  'self' 当前窗口打开  'blank' 新窗口就打开
                <el-select v-model="target" class="margin-left-10 width-150" size="mini" @change="init">
                    <el-option value="self" label="链接当前窗口打开" />
                    <el-option value="target" label="链接新窗口打开"></el-option>
                </el-select>
            </p>
            <p>subtarget：副标题链接打开方式</p>
            <p>
                textAlign：整体文本水平对齐方式
                <el-select v-model="textAlign" size="mini" class="margin-left-10 width-150" @change="init">
                    <el-option value="auto" label="自动" />
                    <el-option value="right" label="居右" />
                    <el-option value="center" label="居中" />
                    <el-option value="left" label="居左" />
                </el-select>
            </p>
            <p>
                textVerticalAlign：整体垂直对齐
                <el-select v-model="textVerticalAlign" size="mini" class="margin-left-10 width-150" @change="init">
                    <el-option value="auto" label="自动" />
                    <el-option value="top" label="居上" />
                    <el-option value="middle" label="居中" />
                    <el-option value="bottom" label="居下" />
                </el-select>
            </p>
            <p>
                triggerEvent：是否触发事件
            </p>
            <p>
                padding：标题内边距 number array 默认 5 [5, 10, 5, 10] 或 [5, 10]
                <el-radio-group v-model="padding" size="mini" class="margin-left-10" @change="init">
                    <el-radio label="10">内边距10</el-radio>
                    <el-radio label="[10, 15]">内边距[10, 15]</el-radio>
                </el-radio-group>
            </p>
            <p>
                itemGap：主标题与副标题之间的间距 number 10
                <el-input-number v-model="itemGap" :min="1" size="mini" class="margin-left-10 width-150" controls-position="right" @change="init" />
            </p>
            <p>
                zlevel：canvas分层 number zlevel 大的 Canvas 会放在 zlevel 小的 Canvas 的上面。
            </p>
            <p>
                z：z轴上排序 z值小的图形会被z值大的图形覆盖。
            </p>
            <p>
                left：整体居左距离 string number 取值类型  20 '20%' left center right 默认auto
                <el-select v-model="left" size="mini" class="margin-left-10 width-150" @change="init">
                    <el-option value="auto" label="auto" />
                    <el-option value="20%" label="20%" />
                    <el-option :value="20" label="20" />
                    <el-option value="left" label="left" />
                    <el-option value="center" label="center" />
                    <el-option value="right" label="right" />
                </el-select>
            </p>
            <p>
                top：整体居上距离 string number 取值类型  20 '20%' top middle bottom 默认auto
                <el-select v-model="top" size="mini" class="margin-left-10 width-150" @change="init">
                    <el-option value="auto" label="auto" />
                    <el-option value="20%" label="20%" />
                    <el-option :value="20" label="20" />
                    <el-option value="top" label="top" />
                    <el-option value="middle" label="middle" />
                    <el-option value="bottom" label="bottom" />
                </el-select>
            </p>
            <p>
                right：整体居右距离 string number 取值类型 20 '20%' 默认auto
                <el-select v-model="right" size="mini" class="margin-left-10 width-150" @change="init">
                    <el-option value="auto" label="auto" />
                    <el-option value="20%" label="20%" />
                    <el-option :value="20" label="20" />
                </el-select>
            </p>
            <p>
                bottom：整体居下距离 string number 取值类型 20 '20%' 默认auto
                <el-select v-model="bottom" size="mini" class="margin-left-10 width-150" @change="init">
                    <el-option value="auto" label="auto" />
                    <el-option value="20%" label="20%" />
                    <el-option :value="20" label="20" />
                </el-select>
            </p>
            <p>
                backgroundColor：整体背景颜色 默认 transparent
                <el-color-picker v-model="backgroundColor" size="mini" class="margin-left-10" @change="init" />
            </p>
            <p>
                borderColor：整体边框颜色 要与borderWidth 连用
                <el-color-picker v-model="borderColor" size="mini" class="margin-left-10" @change="init" />
            </p>
            <p>
                borderWidth：整体边框宽度 number
                <el-input-number v-model="borderWidth" :min="1" size="mini" class="margin-left-10 width-150" controls-position="right" @change="init" />
            </p>
            <p>
                borderRadius：整体边框圆角 number array([左上，右上，右下，左下])
                <el-radio-group v-model="borderRadius" size="mini" class="margin-left-10" @change="init">
                    <el-radio label="10">圆角10</el-radio>
                    <el-radio label="[10, 15]">圆角10[10, 15]</el-radio>
                </el-radio-group>
            </p>
            <p>
                shadowBlur：整体图形阴影模糊大小 number 该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果
                <el-input-number v-model="shadowBlur" :min="1" size="mini" class="margin-left-10 width-150" controls-position="right" @change="init" />
            </p>
            <p>
                shadowColor：整体阴影颜色
                <el-color-picker v-model="shadowColor" size="mini" class="margin-left-10" @change="init" />
            </p>
            <p>
                shadowOffsetX：整体阴影X轴偏移量
                <el-input-number v-model="shadowOffsetX" :min="1" size="mini" class="margin-left-10 width-150" controls-position="right" @change="init" />
            </p>
            <p>
                shadowOffsetY：整体阴影Y轴偏移量
                <el-input-number v-model="shadowOffsetY" :min="1" size="mini" class="margin-left-10 width-150" controls-position="right" @change="init" />
            </p>

            <p>
                textStyle / subtextStyle ：字体样式<br />
                <span class="margin-left-20">color: 字体颜色
                    <el-color-picker v-model="color" size="mini" class="margin-left-10" @change="init" />
                </span> <br />
                <span class="margin-left-20">fontStyle：字体样式
                    <el-select v-model="fontStyle" size="mini" class="margin-left-10 width-150" @change="init">
                        <el-option value="normal" label="normal" />
                        <el-option value="italic" label="italic" />
                        <el-option value="oblique" label="oblique" />
                    </el-select>
                </span> <br />
                <span>
                    fontWeight：字体粗细  可选 normal/bold/bolder/lighter/100 | 200 | 300 | 400...
                    <el-select v-model="fontWeight" class="margin-left-10 width-150" size="mini" @change="init">
                        <el-option value="normal" label="normal" />
                        <el-option value="bold" label="bold" />
                        <el-option value="bolder" label="bolder" />
                        <el-option value="lighter" label="lighter" />
                    </el-select>
                </span> <br />
                <span>
                    fontFamily：字体 如 'sans-serif'
                    <el-select v-model="fontFamily" size="mini" class="margin-left-10 width-150" @change="init">
                        <el-option value="sans-serif" label="sans-serif" />
                        <el-option value="微雅软内" label="微雅软黑" />
                        <el-option value="monospace" label="monospace" />
                    </el-select>
                </span> <br />
                <span>
                    fontSize：字体大小 number 12
                    <el-input-number v-model="fontSize" :min="1" size="mini" class="margin-left-10 width-150" controls-position="right" @change="init" />
                </span> <br />
                <span>
                    align：文字居中方式 可选 auto right center left  rich 样式中如果没有设置 继承父级
                    <el-select v-model="align" size="mini" class="margin-left-10 width-150" @change="init">
                        <el-option value="auto" label="自动" />
                        <el-option value="right" label="居右" />
                        <el-option value="center" label="居中" />
                        <el-option value="left" label="居左" />
                    </el-select>
                </span> <br />
                <span>
                    verticalAlign：文字垂直对齐方式 可选 auto top middle bottom  rich 样式中如果没有设置 继承父级
                    <el-select v-model="verticalAlign" size="mini" class="margin-left-10 width-150" @change="init">
                        <el-option value="auto" label="自动" />
                        <el-option value="top" label="居上" />
                        <el-option value="middle" label="居中" />
                        <el-option value="bottom" label="居下" />
                    </el-select>
                </span> <br />
                <span>
                    lineHeight：行高 number 如果rich中没有设置行高则会取父级行高
                    <el-input-number v-model="lineHeight" :min="1" size="mini" class="margin-left-10 width-150" controls-position="right" @change="init" />
                </span> <br />
                <span>
                    width：文本显示宽度 number
                    <el-input-number v-model="width" :min="1" size="mini" class="margin-left-10 width-150" controls-position="right" @change="init" />
                </span> <br />
                <span>
                    height：文本显示高度 number
                        <el-input-number v-model="height" :min="1" size="mini" class="margin-left-10 width-150" controls-position="right" @change="init" />
                </span> <br />
                <span>
                    textBorderColor：文本本身描边颜色 必须与textBorderWidth连用
                    <el-color-picker v-model="textBorderColor" size="mini" class="margin-left-10" @change="init" />
                </span> <br />
                <span>
                    textBorderWidth：文本描边宽度 number
                    <el-input-number v-model="textBorderWidth" :min="1" size="mini" class="margin-left-10 width-150" controls-position="right" @change="init" />
                </span> <br />
                <span class="margin-left-20">
                    textBorderType：文本描边类型 string number array
                     <el-select v-model="textBorderType" size="mini" class="margin-left-10 width-150" @change="init">
                        <el-option value="solid" label="solid" />
                        <el-option value="dashed" label="dashed" />
                        <el-option value="dotted" label="dotted" />
                    </el-select>
                </span> <br />
                <span>
                     textBorderDashOffset：设置~虚线~的偏移量 与 textBorderType 连用 除solid
                    <el-input-number v-model="textBorderDashOffset" :min="1" size="mini" class="margin-left-10 width-150" controls-position="right" @change="init" />
                </span> <br />
                <span>
                    textShadowColor：文本阴影颜色 默认 'transparent' 与 textShadowBlur 连用  但是会与 描边相冲
                     <el-color-picker v-model="textShadowColor" size="mini" class="margin-left-10" @change="init" />
                </span> <br />
                <span>
                    textShadowBlur：文本阴影长度 number
                    <el-input-number v-model="textShadowBlur" :min="1" size="mini" class="margin-left-10 width-150" controls-position="right" @change="init" />
                </span> <br />
                <span>
                     textShadowOffsetX：文本阴影X轴偏移量
                    <el-input-number v-model="textShadowOffsetX" :min="1" size="mini" class="margin-left-10 width-150" controls-position="right" @change="init" />
                </span><br />
                <span>
                     textShadowOffsetY：文本阴影Y轴偏移量
                    <el-input-number v-model="textShadowOffsetY" :min="1" size="mini" class="margin-left-10 width-150" controls-position="right" @change="init" />
                </span> <br />
                <span>
                    overflow：文字超出预定宽度是否截断或换行 与 width 连用 可选：none truncate(截断) break(换行) breakAll(换行 强制单词换行)
                     <el-select v-model="overflow" size="mini" class="margin-left-10 width-150" @change="init">
                         <el-option value="none" label="none"></el-option>
                         <el-option value="truncate" label="truncate(截断)" />
                         <el-option value="break" label="break(换行)" />
                         <el-option value="breakAll" label="breakAll(换行 强制单词换行)" />
                    </el-select>
                </span> <br />
                <span>
                     ellipsis：在overflow配置为'truncate'的时候，可以通过该属性配置末尾显示的文本。 string
                    <el-input v-model="ellipsis" size="mini" placeholder="回车触发" class="margin-left-10 width-150" @keyup.enter="init" />
                </span> <br />
                <span>
                     lineOverflow：文本超出高度时是否截断 可选 none truncate(截断)
                     <el-select v-model="lineOverflow" size="mini" class="margin-left-10 width-150" @change="init">
                         <el-option value="none" label="none"></el-option>
                         <el-option value="truncate" label="truncate(截断)" />
                    </el-select>
                </span> <br />
                <span>
                    rich：在 rich 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果 object
                    用于formatter中处理数据  `{styleName|text content text content}` 标记样式名
                    rich: {styleName: { /** 样式 */}}
                </span>
            </p>
        </template>
    </echart-frame>
</template>

<script>
    import {ref, reactive, toRefs, onMounted} from 'vue';
    import * as echarts from 'echarts';
    import EchartFrame from "./component/EchartFrame";
    export default {
        name: "EchartsTitle",
        components: {EchartFrame},
        setup() {
            const paddingObj = {
              '10': 10,
              '[10, 15]': [10, 15]
            };
            const borderRadiusObj = {
                '10': 10,
                '[10, 15]': [10, 15]
            };

            let dom = ref(null);
            let dataInfo = reactive({
                show: true,
                target: 'self',
                color: '#000',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontFamily: 'sans-serif',
                fontSize: 12,
                align: 'auto',
                verticalAlign: 'auto',
                lineHeight: 56,
                width: 50,
                height: 50,
                textBorderColor: 'red',
                textBorderWidth: 1,
                textBorderType: 'solid',
                textBorderDashOffset: 1,
                textShadowColor: 'transparent',
                textShadowBlur: 1,
                textShadowOffsetX: 1,
                textShadowOffsetY: 1,
                overflow: 'none',
                ellipsis: '',
                lineOverflow: 'none',
                textAlign: 'auto',
                textVerticalAlign: 'auto',
                padding: '10',
                itemGap: 10,
                left: 'auto',
                top: 'auto',
                bottom: 'auto',
                right: 'auto',
                backgroundColor: 'transparent',
                borderColor: '#ccc',
                borderWidth: 1,
                borderRadius: '10',
                shadowBlur: 1,
                shadowColor: 'transparent',
                shadowOffsetX: 0,
                shadowOffsetY: 0
            });

            function init() {
                let option = {
                    title: {
                        text: '配置标题',
                        subtext: '二级标题',
                        show: dataInfo.show,
                        link: 'https://www.baidu.com',
                        target: dataInfo.target,
                        textStyle: {
                            color: dataInfo.color,
                            fontStyle: dataInfo.fontStyle,
                            fontWeight: dataInfo.fontWeight,
                            fontFamily: dataInfo.fontFamily,
                            fontSize: dataInfo.fontSize,
                            align: dataInfo.align,
                            verticalAlign: dataInfo.verticalAlign,
                            lineHeight: dataInfo.lineHeight,
                            width: dataInfo.width,
                            height: dataInfo.height,
                            textBorderColor: dataInfo.textBorderColor,
                            textBorderWidth: dataInfo.textBorderWidth,
                            textBorderType: dataInfo.textBorderType,
                            textBorderDashOffset: dataInfo.textBorderDashOffset,
                            textShadowColor: dataInfo.textShadowColor,
                            textShadowBlur: dataInfo.textShadowBlur,
                            textShadowOffsetX: dataInfo.textShadowOffsetX,
                            textShadowOffsetY: dataInfo.textShadowOffsetY,
                            overflow: dataInfo.overflow,
                            ellipsis: dataInfo.ellipsis,
                            lineOverflow: dataInfo.lineOverflow
                        },
                        textAlign: dataInfo.textAlign,
                        textVerticalAlign: dataInfo.textVerticalAlign,
                        padding: paddingObj[dataInfo.padding],
                        itemGap: dataInfo.itemGap,
                        left: dataInfo.left,
                        top: dataInfo.top,
                        bottom: dataInfo.bottom,
                        right: dataInfo.right,
                        backgroundColor: dataInfo.backgroundColor,
                        borderColor: dataInfo.borderColor,
                        borderWidth: dataInfo. borderWidth,
                        borderRadius: borderRadiusObj[dataInfo.borderRadius],
                        shadowBlur: dataInfo.shadowBlur,
                        shadowColor: dataInfo.shadowColor,
                        shadowOffsetX: dataInfo.shadowOffsetX,
                        shadowOffsetY: dataInfo.shadowOffsetY
                    },
                    grid: {
                        top: '20%'
                    },
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar',
                        showBackground: true,
                        backgroundStyle: {
                            color: 'rgba(180, 180, 180, 0.2)'
                        }
                    }]
                };
                const mychart = echarts.init(dom.value);
                mychart.setOption(option);
            }

            onMounted(() => {
                init();
            });

            return {
                dom,
                ...toRefs(dataInfo),
                init
            };
        }
    }
</script>

<style scoped>

</style>
