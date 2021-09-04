<template>
    <echart-frame>
        <template #default>
            <h3>Echart Legend配置属性</h3>
        </template>
        <template #echart>
            <div ref="dom" class="echart-border"></div>
        </template>
        <template #content>
            <h4>Legend配置属性</h4>
            <p>type：图例的类型 可选 plain 普通图例(默认) scroll 可滚动反野的图例(数据量较大时使用)  可参照
                <a href="https://echarts.apache.org/examples/zh/editor.html?c=pie-legend&edit=1&reset=1">参考连接</a>
            </p>
            <p>id：组件id 指定则可用于在 option 或者 API 中引用组件</p>
            <p>show：是否显示
                <el-switch v-model="show" size="mini" class="margin-left-10" @change="init" />
            </p>
            <p>zlevel：所有图形在level number 分层显示层级  大的 Canvas 会放在 zlevel 小的 Canvas 的上面。</p>
            <p>z：控制图形的前后顺序 number 默认2 不会创建canvas z值小的图形会被z值大的图形覆盖</p>
            <p>left：距离左侧距离 默认 auto 可选 string number
                <el-select v-model="left" size="mini" class="margin-left-10 width-150" @change="init">
                    <el-option value="auto" label="auto" />
                    <el-option value="20%" label="20%" />
                    <el-option :value="20" label="20" />
                    <el-option value="left" label="left" />
                    <el-option value="center" label="center" />
                    <el-option value="right" label="right" />
                </el-select>
            </p>
            <p>top：距离顶部距离 默认 auto 可选 string number
                <el-select v-model="top" size="mini" class="margin-left-10 width-150" @change="init">
                    <el-option value="auto" label="auto" />
                    <el-option value="20%" label="20%" />
                    <el-option :value="20" label="20" />
                    <el-option value="top" label="top" />
                    <el-option value="middle" label="middle" />
                    <el-option value="bottom" label="bottom" />
                </el-select>
            </p>
            <p>right：距离右侧距离 默认 auto 可选 string number
                <el-select v-model="right" size="mini" class="margin-left-10 width-150" @change="init">
                    <el-option value="auto" label="auto" />
                    <el-option value="20%" label="20%" />
                    <el-option :value="20" label="20" />
                </el-select>
            </p>
            <p>bottom：距离右侧距离 默认 auto 可选 string number
                <el-select v-model="bottom" size="mini" class="margin-left-10 width-150" @change="init">
                    <el-option value="auto" label="auto" />
                    <el-option value="20%" label="20%" />
                    <el-option :value="20" label="20" />
                </el-select>
            </p>
            <p>width 宽度 默认 auto 自适应 string('20px','20%')  number(20)
                <el-input-number v-model="width" :min="1" size="mini" class="margin-left-10 width-150" controls-position="right" @change="init" />
            </p>
            <p>height：高度 默认 auto 自适应 string('20px','20%')  number(20)
                <el-input-number v-model="height" :min="1" size="mini" class="margin-left-10 width-150" controls-position="right" @change="init" />
            </p>
            <p>orient：布局方向 默认 horizontal 可选
                <el-select v-model="orient" size="mini" class="margin-left-10 width-150" @change="init">
                    <el-option value="horizontal" label="horizontal" />
                    <el-option value="vertical" label="vertical" />
                </el-select>
            </p>
            <p>align：图例标记和文本的对齐方式 默认 auto 可选
                <el-select v-model="align" size="mini" class="margin-left-10 width-150" @change="init">
                    <el-option value="auto" label="auto" />
                    <el-option value="left" label="left" />
                    <el-option value="right" label="right" />
                </el-select>
            </p>
            <p>padding：图例内边距 单位px number array 默认5 值可选
                <el-select v-model="padding" size="mini" class="margin-left-10 width-150" @change="init">
                    <el-option value="10" label="10" />
                    <el-option value="[10, 15]" label="[10, 15]" />
                </el-select>
            </p>
            <p>itemGap：图例之间的间隔 默认 10 number 横向布局时为水平间隔，纵向布局时为纵向间隔。
                <el-input-number v-model="itemGap" :min="1" size="mini" class="margin-left-10 width-150" controls-position="right" @change="init" />
            </p>
            <p>itemWidth：单个图例标记的图形宽度 默认 25 number
                <el-input-number v-model="itemWidth" :min="1" size="mini" class="margin-left-10 width-150" controls-position="right" @change="init" />
            </p>
            <p>itemHeight：单个图例的图形的高度 默认 14 number
                <el-input-number v-model="itemHeight" :min="1" size="mini" class="margin-left-10 width-150" controls-position="right" @change="init" />
            </p>
            <p>itemStyle：每个图例的图形样式 其属性的取值为 'inherit' 时，表示继承系列中的属性值。 可选属性如下 <br />
                <span class="margin-left-20">
                    color：图形颜色 默认 inherit 影响所有图例
                    <el-color-picker v-model="itemStyle.color" size="mini" class="margin-left-10" @change="init" />
                </span> <br />
                <span class="margin-left-20">
                    borderColor：图形的描边 默认 inherit 与 borderWidth 连用
                    <el-color-picker v-model="itemStyle.borderColor" size="mini" class="margin-left-10" @change="init" />
                </span> <br />
                <span class="margin-left-20">
                    borderWidth：图形边框宽度 number 默认 auto 当其值为 "auto" 时，如果系列有 borderWidth 取 2，如果系列没有 borderWidth 则取 0。当其值为 "inehrit" 时，始终取系列的 borderWidth
                    <el-input-number v-model="itemStyle.borderWidth" :min="1" size="mini" class="margin-left-10 width-150" controls-position="right" @change="init" />
                </span> <br />
                <span class="margin-left-20">
                    borderType：图形边框样式 string number array 默认 inherit 也可以是 number 或者 number 数组，用以指定线条的 dash array，配合 borderDashOffset 可实现更灵活的虚线效果 可选
                    <el-select v-model="itemStyle.borderType" size="mini" class="margin-left-10 width-150" @change="init">
                        <el-option value="10" label="10" />
                        <el-option value="[5, 10]" label="[10, 15]" />
                        <el-option value="inherit" label="inherit" />
                        <el-option value="solid" label="solid" />
                        <el-option value="dashed" label="dashed" />
                        <el-option value="dotted" label="dotted" />
                    </el-select>
                </span> <br />
                <span class="margin-left-20">
                     borderDashOffset：设置虚线的偏移量 默认 inherit number
                    <el-input-number v-model="itemStyle.borderDashOffset" :min="1" size="mini" class="margin-left-10 width-150" controls-position="right" @change="init" />
                </span> <br />
                <span class="margin-left-20">
                    borderCap：指定线段末端的绘制方式 默认 inherit string 可选 butt与square的区别是加了一个宽度和线段相同，高度是线段厚度一半的矩形区域
                    <el-select v-model="itemStyle.borderCap" size="mini" class="margin-left-10 width-150" @change="init">
                        <el-option value="inherit" label="inherit" />
                        <el-option value="butt" label="线段末端以方形结束" />
                        <el-option value="round" label="线段末端以圆形结束" />
                        <el-option value="square" label="线段末端以方形结束" />
                    </el-select>
                </span> <br />
                <span class="margin-left-20">
                    borderJoin：边框交界处的形状 默认 inherit string   miter 通过设置 borderMiterLimit 属性看到效果
                    可选
                    <el-select v-model="itemStyle.borderJoin" size="mini" class="margin-left-10 width-150" @change="init">
                        <el-option value="inherit" label="inherit" />
                        <el-option value="bevel" label="矩形拐角" />
                        <el-option value="round" label="圆角拐角" />
                        <el-option value="miter" label="菱形拐角" />
                    </el-select>
                </span> <br />
                <span class="margin-left-20">
                    borderMiterLimit：用于设置斜接面限制比例 只有当 borderJoin 为 miter 时 才有效 默认 10 number 负数 0 infinity NaN 都会被忽略
                    <el-input-number v-model="itemStyle.borderMiterLimit" :min="1" size="mini" class="margin-left-10 width-150" controls-position="right" @change="init" />
                </span> <br />
                <span class="margin-left-20">
                    shadowBlur：图形阴影的模糊大小 需要配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果
                    <el-input-number v-model="itemStyle.shadowBlur" :min="1" size="mini" class="margin-left-10 width-150" controls-position="right" @change="init" />
                </span><br />
                <span class="margin-left-20">
                    shadowColor：图形的阴影颜色
                    <el-color-picker v-model="itemStyle.shadowColor" size="mini" class="margin-left-10" @change="init" />
                </span> <br />
                <span class="margin-left-20">
                    shadowOffsetX：图形阴影的X偏移量
                    <el-input-number v-model="itemStyle.shadowOffsetX" :min="1" size="mini" class="margin-left-10 width-150" controls-position="right" @change="init" />
                </span> <br />
                <span class="margin-left-20">
                    shadowOffsetY：图形阴影的Y偏移量
                    <el-input-number v-model="itemStyle.shadowOffsetY" :min="1" size="mini" class="margin-left-10 width-150" controls-position="right" @change="init" />
                </span> <br />
                <span class="margin-left-20">
                    opacity：所有图形透明 0 - 1 默认 inherit number
                    <el-input-number v-model="itemStyle.opacity" :min="0" :max="1" :step=".01" size="mini" class="margin-left-10 width-150" controls-position="right" @change="init" />
                </span> <br />
                <span class="margin-left-20">
                    decal：图形的贴花图案 不常用 <a href="https://echarts.apache.org/zh/option.html#legend.itemStyle.decal">参考连接</a>
                </span>
            </p>
            <p> lineStyle：图例图形中线的样式 <br />
                <span class="margin-left-20">
                    color：线的颜色
                </span> <br />
                <span class="margin-left-20">
                    width：线宽 number
                </span> <br />
                <span class="margin-left-20">
                    type：线类型 同itemStyle.borderStyle
                </span> <br />
                <span class="margin-left-20">
                    dashOffset：虚线偏移量 同itemStyle.borderDashOffset
                </span> <br />
                <span class="margin-left-20">
                    cap：线段末端绘制方式 同itemStyle.borderCap
                </span> <br />
                <span class="margin-left-20">
                    join：线交接处绘制样式 同itemStyle.borderJoin
                </span> <br />
                <span class="margin-left-20">
                    shadowBlur：图形阴影模糊大小 同itemStyle.shadowBlur
                </span> <br />
                <span class="margin-left-20">
                    shadowColor：图形阴影颜色 同itemStyle.shadowColor
                </span> <br />
                <span class="margin-left-20">
                    shadowOffsetX：阴影X偏移量 同itemStyle.shadowOffsetX
                </span> <br />
                <span class="margin-left-20">
                    shadowOffsetY：阴影Y偏移量 同itemStyle.shadowOffsetY
                </span> <br />
                <span class="margin-left-20">
                    opacity：图形透明度 同itemStyle.opacity
                </span> <br />
                <span class="margin-left-20">
                    decal：图形贴花图案 同itemStyle.decal
                </span>
            </p>
            <p>symbolRotate：图形旋转角度 默认 inherit number string
                <el-input-number v-model="symbolRotate" :min="1" size="mini" class="margin-left-10 width-150" controls-position="right" @change="init" />
            </p>
            <p>formatter：用来格式图例文本 string 'legend {name}' function：(namme) = {return 'legend' + name}
                <el-select v-model="formatter" size="mini" class="margin-left-10 width-150" @change="init">
                    <el-option value="string" label="字符串形式" />
                    <el-option value="function" label="Function形式" />
                </el-select>
            </p>
            <p>selectedMode：图例选择模式 控制是否可以通过点击图例改变系列的显示状态 默认 true 可选
                <el-select v-model="selectedMode" size="mini" class="margin-left-10 width-150" @change="init">
                    <el-option :value="true" label="true" />
                    <el-option :value="false" label="false" />
                    <el-option value="single" label="single"/>
                    <el-option value="multiple" label="multiple"/>
                </el-select>
            </p>
            <p>inactiveColor：关闭图例时的颜色 默认 #ccc
                <el-color-picker v-model="inactiveColor" size="mini" class="margin-left-10" @change="init" />
            </p>
            <p>inactiveBorderColor：关闭图例时的描边颜色 默认 #ccc 与 inactiveBorderWidth 连用
                <el-color-picker v-model="inactiveBorderColor" size="mini" class="margin-left-10" @change="init" />
            </p>
            <p>inactiveBorderWidth：图例关闭是的描边宽度 默认 auto number
                <el-input-number v-model="inactiveBorderWidth" :min="1" size="mini" class="margin-left-10 width-150" controls-position="right" @change="init" />
            </p>
            <p>selected：图例选中列表 规定哪些图例时可以选中 object {图例name: true}</p>
            <p>textStyle：图例公用文本样式 <br />
                <span class="margin-left-20">
                    color：文字颜色 默认 #333
                    <el-color-picker v-model="textStyle.color" size="mini" class="margin-left-10" @change="init" />
                </span> <br />
                <span class="margin-left-20">
                    fontStyle：字体风格 默认 normal string 可选
                    <el-select v-model="textStyle.fontStyle" size="mini" class="margin-left-10 width-150" @change="init">
                        <el-option value="normal" label="正常" />
                        <el-option value="italic" label="斜体" />
                        <el-option value="oblique" label="倾斜体"/>
                    </el-select>
                </span> <br />
                <span class="margin-left-20">
                    fontWeight：字体粗细 默认 normal string number
                     <el-select v-model="textStyle.fontWeight" size="mini" class="margin-left-10 width-150" @change="init">
                         <el-option value="normal" label="正常" />
                         <el-option value="bold" label="bold(粗)" />
                         <el-option value="bolder" label="bolder(加粗)"/>
                         <el-option value="lighter" label="lighter(细)"/>
                         <el-option :value="300" label="300"></el-option>
                    </el-select>
                </span> <br />
                <span class="margin-left-20">
                    fontFamily：字体样式 默认 sans-serif 可选等
                    <el-select v-model="textStyle.fontFamily" size="mini" class="margin-left-10 width-150" @change="init">
                         <el-option value="sans-serif" label="sans-serif" />
                         <el-option value="Arial" label="Arial" />
                         <el-option value="微软雅黑" label="微软雅黑"/>
                    </el-select>
                </span> <br />
                <span class="margin-left-20">
                    fontSize：字体大小 默认 12 number
                    <el-input-number v-model="textStyle.fontSize" :min="1" size="mini" class="margin-left-10 width-150" controls-position="right" @change="init" />
                </span> <br />
                <span class="margin-left-20">
                    lineHeight：行高 number
                    <el-input-number v-model="textStyle.lineHeight" :min="1" size="mini" class="margin-left-10 width-150" controls-position="right" @change="init" />
                </span> <br />
                <span class="margin-left-20">
                    backgroundColor：文字背景色 也可以背景图片 url dataURI HTMLImageElement HTMLCanvasElement
                    当使用图片的时候，可以使用 width 或 height 指定高宽，也可以不指定自适应。
                    <el-color-picker v-model="textStyle.backgroundColor" size="mini" class="margin-left-10" @change="init" />
                </span> <br />
                <span class="margin-left-20">
                    borderColor：文字边框颜色
                    <el-color-picker v-model="textStyle.borderColor" size="mini" class="margin-left-10" @change="init" />
                </span> <br />
                <span class="margin-left-20">
                    borderWidth：边框宽度
                    <el-input-number v-model="textStyle.borderWidth" :min="1" size="mini" class="margin-left-10 width-150" controls-position="right" @change="init" />
                </span> <br />
                <span class="margin-left-20">
                    borderType：边框样式 默认 solid string 同itemStyle.borderType
                    <el-select v-model="textStyle.borderType" size="mini" class="margin-left-10 width-150" @change="init">
                         <el-option value="solid" label="solid" />
                         <el-option value="dashed" label="dashed(虚线)" />
                         <el-option value="dotted" label="dotted(点)"/>
                    </el-select>
                </span> <br />
                <span class="margin-left-20">
                    borderDashOffset：用于虚线的偏移量 只在borderType 为dashed 有效
                    <el-input-number v-model="textStyle.borderDashOffset" :min="1" size="mini" class="margin-left-10 width-150" controls-position="right" @change="init" />
                </span> <br />
                <span class="margin-left-20">
                    borderRadius：文字快圆角 number array
                    <el-select v-model="textStyle.borderRadius" size="mini" class="margin-left-10 width-150" @change="init">
                         <el-option :value="10" label="10" />
                         <el-option :value="[10, 5]" label="[10, 5]" />
                    </el-select>
                </span> <br />
                <span class="margin-left-20">
                    padding：文字块内边距 number array
                     <el-select v-model="textStyle.padding" size="mini" class="margin-left-10 width-150" @change="init">
                         <el-option :value="10" label="10" />
                         <el-option :value="[10, 5]" label="[10, 5]" />
                    </el-select>
                </span> <br />
                <span class="margin-left-20">
                    shadowColor：文字块阴影颜色 默认 transparent
                    <el-color-picker v-model="textStyle.shadowColor" size="mini" class="margin-left-10" @change="init" />
                </span> <br />
                <span class="margin-left-20">
                    shadowBlur：阴影模糊度
                    <el-input-number v-model="textStyle.shadowBlur" :min="1" size="mini" class="margin-left-10 width-150" controls-position="right" @change="init" />
                </span> <br />
                <span class="margin-left-20">
                    shadowOffsetX：阴影X偏移量
                    <el-input-number v-model="textStyle.shadowOffsetX" :min="1" size="mini" class="margin-left-10 width-150" controls-position="right" @change="init" />
                </span> <br />
                <span class="margin-left-20">
                    shadowOffsetY：阴影Y偏移量
                    <el-input-number v-model="textStyle.shadowOffsetY" :min="1" size="mini" class="margin-left-10 width-150" controls-position="right" @change="init" />
                </span> <br />
                <span class="margin-left-20">
                    width：文本块宽度 number
                    <el-input-number v-model="textStyle.width" :min="1" size="mini" class="margin-left-10 width-150" controls-position="right" @change="init" />
                </span> <br />
                <span class="margin-left-20">
                    height：文本块高度 number
                    <el-input-number v-model="textStyle.height" :min="1" size="mini" class="margin-left-10 width-150" controls-position="right" @change="init" />
                </span> <br />
                <span class="margin-left-20">
                    textBorderColor：文字本身描边颜色
                    <el-color-picker v-model="textStyle.textBorderColor" size="mini" class="margin-left-10" @change="init" />
                </span> <br />
                <span class="margin-left-20">
                    textBorderWidth：文字本身边框宽度
                    <el-input-number v-model="textStyle.textBorderWidth" :min="1" size="mini" class="margin-left-10 width-150" controls-position="right" @change="init" />
                </span> <br />
                <span class="margin-left-20">
                    textBorderType：文字本身边框样式 默认 solid string array number 同borderType
                      <el-select v-model="textStyle.textBorderType" size="mini" class="margin-left-10 width-150" @change="init">
                         <el-option value="solid" label="solid" />
                         <el-option value="dashed" label="dashed(虚线)" />
                         <el-option value="dotted" label="dotted(点)"/>
                    </el-select>
                </span> <br />
                <span class="margin-left-20">
                    textBorderDashOffset：文字本身边框偏移量 只在borderType 为dashed 有效
                    <el-input-number v-model="textStyle.textBorderDashOffset" :min="1" size="mini" class="margin-left-10 width-150" controls-position="right" @change="init" />
                </span> <br />
                <span class="margin-left-20">
                     textShadowColor：文字阴影颜色
                    <el-color-picker v-model="textStyle.textShadowColor" size="mini" class="margin-left-10" @change="init" />
                </span> <br />
                <span class="margin-left-20">
                    textShadowBlur：文字阴影模糊度
                    <el-input-number v-model="textStyle.textShadowBlur" :min="1" size="mini" class="margin-left-10 width-150" controls-position="right" @change="init" />
                </span> <br />
                <span class="margin-left-20">
                    textShadowOffsetX：文字阴影偏移量
                    <el-input-number v-model="textStyle.textShadowOffsetX" :min="1" size="mini" class="margin-left-10 width-150" controls-position="right" @change="init" />
                </span> <br />
                <span class="margin-left-20">
                    textShadowOffsetY：文字阴影偏移量
                    <el-input-number v-model="textStyle.textShadowOffsetY" :min="1" size="mini" class="margin-left-10 width-150" controls-position="right" @change="init" />
                </span> <br />
                <span class="margin-left-20">
                    overflow：文本超出是否截断 width设置时才有效
                    <el-select v-model="textStyle.textBorderType" size="mini" class="margin-left-10 width-150" @change="init">
                        <el-option value="none" label="none" />
                         <el-option value="truncate" label="truncate(截断)" />
                         <el-option value="break" label="break(换行)" />
                         <el-option value="breakAll" label="breakAll(包括单词换行)"/>
                    </el-select>
                </span> <br />
                <span class="margin-left-20">
                    ellipsis：在overflow配置为'truncate'的时候，可以通过该属性配置末尾显示的文本。
                    <el-input v-model="textStyle.ellipsis" size="mini" placeholder="回车触发" class="margin-left-10 width-150" @keyup.enter="init" />
                </span> <br />
                <span class="margin-left-20">
                    lineOverflow：文本超出高度部分是否截断，配置height时有效。
                    <el-select v-model="textStyle.lineOverflow" size="mini" class="margin-left-10 width-150" @change="init">
                          <el-option value="none" label="none" />
                          <el-option value="truncate" label="truncate(截断)" />
                    </el-select>
                </span>
            </p>
        </template>
    </echart-frame>
</template>

<script>
    import EchartFrame from "./component/EchartFrame";
    import {ref, reactive, toRefs, onMounted} from 'vue';
    import * as echarts from 'echarts';
    export default {
        name: "EchartsLegend",
        components: {EchartFrame},
        setup() {
            let dom = ref(null);
            const paddingObj = {
                '10': 10,
                '[10, 15]': [10, 15]
            };
            const borderTypeObj = {
                'solid': 'solid',
                'dashed': 'dashed',
                'dotted': 'dotted',
                '[5, 10]': [5, 10],
                'inherit': 'inherit',
                '10': 10
            };

            const formatterObj = {
              'string': 'string {name}',
              'function': function (name) {
                  return `function ${name}`;
              }
            };

            let dataInfo = reactive({
                show: true,
                left: 'auto',
                top: 'auto',
                right: 'auto',
                bottom: 'auto',
                width: 'auto',
                height: 'auto',
                orient: 'horizontal',
                align: 'auto',
                padding: '10',
                itemGap: 10,
                itemWidth: 25,
                itemHeight: 14,
                itemStyle: {
                    color: 'inherit',
                    borderColor: 'inherit',
                    borderWidth: 'auto',
                    borderType: 'inherit',
                    borderDashOffset: 'inherit',
                    borderCap: 'inherit',
                    borderJoin: 'inherit',
                    borderMiterLimit: 10,
                    shadowBlur: 1,
                    shadowColor: '#eee',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    opacity: 1
                },
                symbolRotate: 'inherit',
                formatter: '',
                selectedMode: true,
                inactiveColor: '#ccc',
                inactiveBorderColor: '#ccc',
                inactiveBorderWidth: 1,
                textStyle: {
                    color: '#333',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: 'sans-serif',
                    fontSize: 12,
                    lineHeight: 56,
                    backgroundColor: '',
                    borderColor: '',
                    borderWidth: 1,
                    borderType: 'solid',
                    borderDashOffset: 0,
                    borderRadius: null,
                    padding: null,
                    shadowColor: 'transparent',
                    shadowBlur: null,
                    shadowOffsetY: 0,
                    shadowOffsetX: 0,
                    width: 106,
                    height: 30,
                    textBorderColor: null,
                    textBorderWidth: 0,
                    textBorderType: 'solid',
                    textBorderDashOffset: null,
                    textShadowColor: 'transparent',
                    textShadowBlur: null,
                    textShadowOffsetX: null,
                    textShadowOffsetY: null,
                    overflow: 'none',
                    ellipsis: '',
                    lineOverflow: 'none'
                }
            });

            function init() {
                let option = {
                    legend: {
                        show: dataInfo.show,
                        left: dataInfo.left,
                        top: dataInfo.top,
                        right: dataInfo.right,
                        bottom: dataInfo.bottom,
                        width: dataInfo.width,
                        height: dataInfo.height,
                        orient: dataInfo.orient,
                        align: dataInfo.align,
                        padding: paddingObj[dataInfo.padding],
                        itemGap: dataInfo.itemGap,
                        itemWidth: dataInfo.itemWidth,
                        itemHeight: dataInfo.itemHeight,
                        data: ['数据1', '数据2'],
                        itemStyle: {
                            color: dataInfo.itemStyle.color,
                            borderColor: dataInfo.itemStyle.borderColor,
                            borderWidth: dataInfo.itemStyle.borderWidth,
                            borderType: borderTypeObj[dataInfo.itemStyle.borderType],
                            borderDashOffset: dataInfo.itemStyle.borderDashOffset,
                            borderCap: dataInfo.itemStyle.borderCap,
                            borderJoin: dataInfo.itemStyle.borderJoin,
                            borderMiterLimit: dataInfo.itemStyle.borderMiterLimit,
                            shadowBlur: dataInfo.itemStyle.shadowBlur,
                            shadowColor: dataInfo.itemStyle.shadowColor,
                            shadowOffsetX: dataInfo.itemStyle.shadowOffsetX,
                            shadowOffsetY:dataInfo.itemStyle.shadowOffsetY,
                            opacity: dataInfo.itemStyle.opacity,
                        },
                        symbolRotate: dataInfo.symbolRotate,
                        formatter: formatterObj[dataInfo.formatter],
                        selectedMode: dataInfo.selectedMode,
                        inactiveColor: dataInfo.inactiveColor,
                        inactiveBorderColor: dataInfo.inactiveBorderColor,
                        inactiveBorderWidth: dataInfo.inactiveBorderWidth,
                        textStyle: {
                            color: dataInfo.textStyle.color,
                            fontStyle: dataInfo.textStyle.fontStyle,
                            fontWeight: dataInfo.textStyle.fontWeight,
                            fontFamily: dataInfo.textStyle.fontFamily,
                            fontSize: dataInfo.textStyle.fontSize,
                            lineHeight: dataInfo.textStyle.lineHeight,
                            backgroundColor: dataInfo.textStyle.backgroundColor,
                            borderColor: dataInfo.textStyle.borderColor,
                            borderWidth: dataInfo.textStyle.borderWidth,
                            borderType: dataInfo.textStyle.borderType,
                            borderDashOffset: dataInfo.textStyle.borderDashOffset,
                            borderRadius: dataInfo.textStyle.borderRadius,
                            padding: dataInfo.textStyle.padding,
                            shadowColor: dataInfo.textStyle.shadowColor,
                            shadowBlur: dataInfo.textStyle.shadowBlur,
                            shadowOffsetX: dataInfo.textStyle.shadowOffsetX,
                            shadowOffsetY: dataInfo.textStyle.shadowOffsetY,
                            width: dataInfo.textStyle.width,
                            height: dataInfo.textStyle.height,
                            textBorderColor: dataInfo.textStyle.textBorderColor,
                            textBorderWidth: dataInfo.textStyle.textBorderWidth,
                            textBorderType: dataInfo.textStyle.textBorderType,
                            textBorderDashOffset: dataInfo.textStyle.textBorderDashOffset,
                            textShadowColor: dataInfo.textStyle.textShadowColor,
                            textShadowBlur: dataInfo.textStyle.textShadowBlur,
                            textShadowOffsetX: dataInfo.textStyle.textShadowOffsetX,
                            textShadowOffsetY: dataInfo.textStyle.textShadowOffsetY,
                            overflow: dataInfo.textStyle.overflow,
                            ellipsis: dataInfo.textStyle.ellipsis,
                            lineOverflow: dataInfo.textStyle.lineOverflow
                        }
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
                        name: '数据1',
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar'
                    },{
                        name: '数据2',
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar'
                    }]
                };
                const mychart = echarts.init(dom.value);
                mychart.setOption(option);
            }

            onMounted(() => {
                init();
            });

            return {
                ...toRefs(dataInfo),
                dom,
                init
            };
        }
    }
</script>

<style lang="less" scoped>
    p {
        margin: 5px 0;
        span {
            margin: 0 20px;
        }
    }
</style>
