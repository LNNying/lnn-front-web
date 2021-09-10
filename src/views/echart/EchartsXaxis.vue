<template>
    <new-echart-frame>
        <template #default>
            <h2>xAxis 直角坐标系 grid 中的 x 轴。一般情况下单个 grid 组件最多只能放上下两个 x 轴，多于两个 x 轴需要通过配置 offset 属性防止同个位置多个 x 轴的重叠。</h2>
        </template>
        <template #content>
            <div class="cust-height">
                <p>id：string 组件 ID。默认不指定。指定则可用于在 option 或者 API 中引用组件。</p>
                <p class="main">show：boolean 是否显示X轴。</p>
                <p>gridIndex：number x 轴所在的 grid 的索引，默认位于第一个 grid。</p>
                <p class="main">position：string X轴的位置。可选 'top', 'bottom'</p>
                <p>offset：number X轴相对于默认位置的偏移量，在相同的 position 上有多个 X 轴的时候有用。</p>
                <p>realtimeSort：boolean 用于制作动态排序柱状图。设为 true 时，表示 X 轴开启实时排序效果，仅当 X 轴的 type 是 'value' 时有效。
                    需要配合其他配置项共同实现动态排序柱状图效果，具体参见<a href="https://echarts.apache.org/handbook/zh/how-to/chart-types/bar/bar-race/" target="_blank">动态排序柱状图</a>教程。</p>
                <p>sortSeriesIndex：number 动态排序柱状图用于排序的系列 id。目前只支持一个系列的柱状图排序效果，所以这个值只能取 0。仅当 X 轴 realtimeSort 为 true 并且 type 是 'value' 时有效。
                    需要配合其他配置项共同实现动态排序柱状图效果，具体参见<a href="https://echarts.apache.org/handbook/zh/how-to/chart-types/bar/bar-race/" target="_blank">动态排序柱状图</a>教程。</p>
                <p class="main">type：坐标轴类型 <br />
                    <span class="margin-left-20">value：数值轴，适用于连续数据。</span> <br />
                    <span class="margin-left-20">category：类目轴，适用于离散的类目数据。为该类型时类目数据可自动从 series.data 或 dataset.source 中取，或者可通过 xAxis.data 设置类目数据</span> <br />
                    <span class="margin-left-20">time：时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间段格式化，在刻度计算上有所不同，例如会根据跨度的范围来决定使用月，星期，日还是小时范围的刻度。</span> <br />
                    <span class="margin-left-20">log：对数轴，适用于对数数据</span>
                </p>
                <p class="main">name：string 坐标轴名称</p>
                <p>nameLocation：string 坐标轴名称显示位置。默认 'end' 可选 'start' 'middle'或'center' 'end'</p>
                <p>nameTextStyle：坐标轴名称的文字样式。<br />
                    <span class="margin-left-20">color：string 坐标轴名称颜色。默认取 axisLine.lineStyle.color</span> <br />
                    <span class="margin-left-20">fontStyle：string 坐标轴名称字体风格。默认 'normal' 可选 'normal', 'italic', 'oblique'</span> <br />
                    <span class="margin-left-20">fontWeight：string number 坐标轴名称字体的粗细。默认 'normal' 可选 'normal', 'bold', 'bolder', 'lighter', 200, 500</span> <br />
                    <span class="margin-left-20">fontFamily：string 坐标轴名称字体。默认 'sans-serif' 可选 'serif', '微雅软黑' 等</span> <br />
                    <span class="margin-left-20">fontSize：number 坐标轴名称字体大小 默认 12</span> <br />
                    <span class="margin-left-20">align：string 坐标轴名称文字水平对齐方式 默认 'auto' 可选 'left', 'right', 'auto', 'center'</span> <br />
                    <span class="margin-left-20">verticalAlign：string 坐标轴名称垂直对齐方式 默认 'auto' 可选 'top', 'middle', 'bottom', 'auto'</span> <br />
                    <span class="margin-left-20">lineHeight：number 坐标轴名称行高</span> <br />
                    <span class="margin-left-20">backgroundColor：string object 文字背景色 可选 颜色 图片  当使用图片的时候，可以使用 width 或 height 指定高宽，也可以不指定自适应。
                        <span>
                            <pre>
    backgroundColor: {
        image: 'xxx/xxx.png'
        // 这里可以是图片的 URL，
        // 或者图片的 dataURI，
        // 或者 HTMLImageElement 对象，
        // 或者 HTMLCanvasElement 对象。
    }
                            </pre>
                        </span>
                    </span> <br />
                    <span class="margin-left-20">borderColor：坐标轴名称边框颜色</span> <br />
                    <span class="margin-left-20">borderWidth：number 坐标轴名称边框宽度</span> <br />
                    <span class="margin-left-20">borderType：string number array 坐标轴名称边框样式 默认 'solid' 可选 'dashed', 'dotted', 'solid' 或 [5, 10] 配合borderDashOffset</span> <br />
                    <span class="margin-left-20">borderDashOffset：number 用于设置虚线的偏移量，可搭配 borderType 指定 dash array 实现灵活的虚线效果。</span> <br />
                    <span class="margin-left-20">borderRadius：number array 坐标轴名称圆角</span> <br />
                    <span class="margin-left-20">padding：number array 坐标轴名称内边距</span> <br />
                    <span class="margin-left-20">shadowColor：坐标轴名称阴影颜色 </span> <br />
                    <span class="margin-left-20">shadowBlur：number 坐标轴名称阴影模糊大小</span> <br />
                    <span class="margin-left-20">shadowOffsetX：number 坐标轴名称阴影X轴偏移量</span> <br />
                    <span class="margin-left-20">shadowOffsetY：number 坐标轴名称阴影Y轴偏移量</span> <br />
                    <span class="margin-left-20">width：number 坐标轴名称宽度</span> <br />
                    <span class="margin-left-20">height：number 坐标轴名称高度</span> <br />
                    <span class="margin-left-20">textBorderColor：坐标轴名称描边颜色</span> <br />
                    <span class="margin-left-20">textBorderWidth：number 坐标轴名称描边宽度 </span> <br />
                    <span class="margin-left-20">textBorderType：number array 坐标轴名称描边类型 同 borderType</span> <br />
                    <span class="margin-left-20">textBorderDashOffset：number 用于设置虚线的偏移量，可搭配 textBorderType 指定 dash array 实现灵活的虚线效果。</span> <br />
                    <span class="margin-left-20">textShadowColor：坐标轴名称文字阴影颜色</span> <br />
                    <span class="margin-left-20">textShadowBlur：number 坐标轴名称文字阴影模糊大小</span> <br />
                    <span class="margin-left-20">textShadowOffsetX：number 坐标轴名称文字阴影X轴偏移量</span> <br />
                    <span class="margin-left-20">textShadowOffsetY：number 坐标轴名称文字阴影Y轴偏移量</span> <br />
                    <span class="margin-left-20">overflow：string 坐标轴名称超出宽度截断 默认 'none' 可选 'none', 'truncate'(截断), 'break'(换行), 'break-all'(换行包括单词)</span> <br />
                    <span class="margin-left-20">ellipsis：在overflow配置为'truncate'的时候，可以通过该属性配置末尾显示的文本。</span> <br />
                    <span class="margin-left-20">lineOverflow：string 文本超出高度部分是否截断，配置height时有效。 默认 'none','truncate'(截断) </span> <br />
                    <span class="margin-left-20">rich：在 rich 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果
                        <a href="https://blog.csdn.net/wangxinxin1992816/article/details/88895934">小案例</a></span>
                </p>
                <p class="main">nameGap：number 坐标轴名称与轴线之间的距离 默认 15</p>
                <p>nameRotate：number 坐标轴名称旋转 角度值</p>
                <p>inverse：boolean 是否反向坐标轴</p>
                <p>boundarGap：Boolean array 坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样。可选 true ['50%', '40%']</p>
                <p class="main">min：number string function 坐标轴刻度最小值 <br />
                    <span class="margin-left-20">在类目轴中，也可以设置为类目的序数（如类目轴 data: ['类A', '类B', '类C'] 中，序数 2 表示 '类C'。也可以设置为负数，如 -3）</span> <br />
                    <span class="margin-left-20">function：value 是一个包含min和max的对象 也可返回 null/undefined 来表示“自动计算最大值”
                        <pre>
    min: function(value) {
        return value.min - 20;
    }
                        </pre>
                    </span>
                </p>
                <p class="main">max：number string function 坐标轴刻度最大值 同 min 一样</p>
                <p class="main">scale：Boolean 只在type为value是有效。设置成 true 后坐标刻度不会强制包含零刻度。在双数值轴的散点图中比较有用。在设置 min 和 max 之后该配置项无效。</p>
                <p>splitNumber：number 坐标轴的分割段数，需要注意的是这个分割段数只是个预估值，最后实际显示的段数会在这个基础上根据分割后坐标轴刻度显示的易读程度作调整。
                    在类目轴中无效。默认 5</p>
                <p>minInterval：number 自动计算的坐标轴最小间隔大小。如设置为 1 保证分割个度显示为整数。只在type为value和time有效</p>
                <p>maxInterval：number 自动计算坐标轴最大间隔大小 在时间轴先设置为 3600 * 24 * 1000 保证坐标轴分割刻度最大一天</p>
                <p>interval：number 强制设置坐标轴分割间隔。因为 splitNumber 是预估的值，实际根据策略计算出来的刻度可能无法达到想要的效果，这时候可以使用 interval 配合 min、max 强制设定刻度划分，一般不建议使用。
                    无法在类目轴中使用。在时间轴（type: 'time'）中需要传时间戳，在对数轴（type: 'log'）中需要传指数值。</p>
                <p>logBase：number 对数轴的底数。只对type为log有效</p>
                <p>silent：Boolean 坐标轴是否是静态无法交互的</p>
                <p>triggerEvent：Boolean 坐标轴的标签是否响应和触发鼠标事件</p>
                <p>axisLine：坐标轴线相关设置 <br />
                    <span class="margin-left-20">show：Boolean 是否显示坐标轴线</span> <br />
                    <span class="margin-left-20">onZero：Boolean X 轴或者 Y 轴的轴线是否在另一个轴的 0 刻度上，只有在另一个轴为数值轴且包含 0 刻度时有效。</span> <br />
                    <span class="margin-left-20">onZeroAxisIndex：number 当有双X轴时，可以用这个属性手动指定，在哪个轴的 0 刻度上。</span> <br />
                    <span class="margin-left-20">symbol：string array X轴线两边的箭头 默认 'none', 可选 'none', 'arrow' 或 ['none', 'arrow']（末端显示箭头）</span> <br />
                    <span class="margin-left-20">symbolSize： array X轴线两边的箭头的大小 默认 [10, 15] = [宽度，高度]</span> <br />
                    <span class="margin-left-20">symbolOffset：array number X轴线两边的箭头的偏移量。
                        如果是数组，第一个数字表示起始箭头的偏移，第二个数字表示末端箭头的偏移；如果是数字，表示这两个箭头使用同样的偏移。
                    </span> <br />
                    <span class="margin-left-20">lineStyle：X轴线的具体样式 <br />
                        <span class="margin-left-40">color：坐标轴线的颜色</span> <br />
                        <span class="margin-left-40">width：number 坐标轴线宽 默认 1</span> <br />
                        <span class="margin-left-40">type：string number array 坐标轴线类型 默认 'solid' 同 borderType 一样</span> <br />
                        <span class="margin-left-40">dashOffset：number 用于设置虚线的偏移量，可搭配 type 指定 dash array 实现灵活的虚线效果。</span> <br />
                        <span class="margin-left-40">cap：string 用于指定线段末端的绘制方式 默认 'butt' 可选 'butt'(已方形结束), 'round'(圆形结束), 'square'(方形结束 多出一块)</span> <br />
                        <span class="margin-left-40">join：String 轴线相交处的形状 默认 'bevel' 可选 'bevel'(三角形), 'round'(圆形), 'miter'(延伸相连接部分，菱形)</span> <br />
                        <span class="margin-left-40">miterLimit：number 用于设置斜接面限制比例。只有当 join 为 miter 时， miterLimit 才有效。 默认 10 负数、0、Infinity 和 NaN 均会被忽略。</span> <br />
                        <span class="margin-left-40">shadowBlur：number 轴线阴影模糊大小 数值不能太大 否则看不出效果</span> <br />
                        <span class="margin-left-40">shadowColor：轴线阴影颜色</span> <br />
                        <span class="margin-left-40">shadowOffsetX：number 轴线阴影X轴偏移量</span> <br />
                        <span class="margin-left-40">shadowOffsetY：number 轴线阴影Y轴偏移量</span> <br />
                        <span class="margin-left-40">opacity：number 图形透明度</span>
                    </span>
                </p>
                <p class="main">axisTick：object 坐标轴刻度相关设置
                    <span class="margin-left-20">show：Boolean 是否显示坐标轴刻度</span> <br />
                    <span class="margin-left-20">alignWithLabel：Boolean 类目轴中在 boundaryGap 为 true 的时候有效，可以保证刻度线和标签对齐</span> <br />
                    <span class="margin-left-20">interval：number function 坐标轴刻度的显示间隔，在类目轴中有效。默认同 axisLabel.interval 一样。</span> <br />
                    <span class="margin-left-20">inside：Boolean 坐标轴刻度是否朝内 默认 朝外</span> <br />
                    <span class="margin-left-20">length：number 坐标轴刻度长度 默认 5</span> <br />
                    <span class="margin-left-20">lineStyle：坐标轴刻度样式 同 axisLine.lineStyle 一样</span>
                </p>
                <p>minorTick：object 坐标轴次刻度相关配置 (次刻度 两刻度数之间的刻度) 在type为category类目轴中无效<br />
                    <span class="margin-left-20">show：Boolean 是否显示次刻度</span> <br />
                    <span class="margin-left-20">splitNumber：number 次刻度分割数 默认 5</span> <br />
                    <span class="margin-left-20">length：number 次刻度长度 默认 3</span> <br />
                    <span class="margin-left-20">lineStyle：次刻度样式 同 axisLine.lienStyle 一样</span>
                </p>
                <p class="main">axisLabel：坐标轴刻度标签相关配置 <br />
                    <span class="margin-left-20">show：是否显示刻度标签</span> <br />
                    <span class="margin-left-20">interval：number function 坐标轴刻度标签的显示间隔，在类目轴中有效。同 axisTick.interval 一样</span> <br />
                    <span class="margin-left-20">inside：Boolean 刻度标签是否朝内 默认朝外</span> <br />
                    <span class="margin-left-20">rotate：number 刻度标签的旋转角度 从 -90 到 90 </span> <br />
                    <span class="margin-left-20">margin：number 刻度标签与轴线之间的距离</span> <br />
                    <span class="margin-left-20">formatter：string function 刻度标签的内容格式器，支持字符串模板和回调函数两种形式。 可与 rich 显示多样式
                        <a href="https://echarts.apache.org/zh/option.html#xAxis.axisLabel.formatter" target="_blank">查看模板配置</a>
                        <span>
                            <pre>
    formatter: '{value}kg',
    formatter: function(value, index) {
        return value + 'kg';
    }
                            </pre>
                        </span>
                    </span> <br />
                    <span class="margin-left-20">showMinLabel：boolean 是否显示最小tick的label 可取值 true, false, null。
                        默认自动判定（即如果标签重叠，不会显示最小 tick 的 label）</span> <br />
                    <span class="margin-left-20">showMaxLabel：boolean 是否显示最大tick的label 同 showMinLabel 一样</span> <br />
                    <span class="margin-left-20">color：string function 刻度标签文字颜色
                        <span>
                            <pre>
    color: '#ccc',
    color: function(value, index) {
        return value >= 0 ? 'green' : 'red';
    }
                            </pre>
                        </span>
                    </span> <br />
                    <span class="margin-left-20">fontStyle：string 刻度标签文字字体风格 默认 'normal' 可选 'normal', 'italic', 'oblique'</span> <br />
                    <span class="margin-left-20">fontWeight：string number 刻度文字字体粗细 默认 'normal' 可选 'normal', 'bold', 'bolder', 'lighter' 或 100， 200</span> <br />
                    <span class="margin-left-20">fontFamily：string 刻度标签字体系列 默认 'sans-serif'</span> <br />
                    <span class="margin-left-20">fontSize：number 刻度标签字体大小 默认 12</span> <br />
                    <span class="margin-left-20">align：string 刻度标签文字水平对齐方式 默认 'auto' 可选 'left', 'center', 'right'</span> <br />
                    <span class="margin-left-20">verticalAlign：string 刻度标签垂直对齐方式 默认 'auto' 可选 'top', 'middle', 'bottom'</span> <br />
                    <span class="margin-left-20">lineHeight：number 刻度标签文字行高</span> <br />
                    <span class="margin-left-20">backgroundColor：string object 刻度标签文字背景颜色
                        <span>
                            <pre>
    backgroundColor: '#ccc',
    backgroundColor: {
        image: '.....png' // png dataURL HTMLImageElement HTMLCanvasElement
    }
                            </pre>
                        </span>
                    </span> <br />
                    <span class="margin-left-20">borderColor：string 刻度标签文字块边框</span> <br />
                    <span class="margin-left-20">borderWidth：number 刻度标签文字边框宽度</span> <br />
                    <span class="margin-left-20">borderType：string number array 刻度标签文字块边框样式。默认 'solid' 同 nameTextStyle.borderType 一样</span> <br />
                    <span class="margin-left-20">borderDashOffset：number 用于设置虚线的偏移量，可搭配 borderType 指定 dash array 实现灵活的虚线效果</span> <br />
                    <span class="margin-left-20">borderRadius：刻度标签边框圆角</span> <br />
                    <span class="margin-left-20">padding：number array 刻度标签文字块内边距 如 10 或 [5, 10]</span> <br />
                    <span class="margin-left-20">shadowColor：刻度标签阴影颜色</span> <br />
                    <span class="margin-left-20">shadowBlur：number 刻度标签阴影模糊大小</span> <br />
                    <span class="margin-left-20">shadowOffsetX：number 刻度标签阴影X轴偏移量</span> <br />
                    <span class="margin-left-20">shadowOffsetY：number 刻度标签阴影Y轴偏移量</span> <br />
                    <span class="margin-left-20">width：number 刻度标签文字块宽度</span> <br />
                    <span class="margin-left-20">height：number 刻度标签文字块高度</span> <br />
                    <span class="margin-left-20">textBorderColor：string 刻度标签文字本身描边颜色</span> <br />
                    <span class="margin-left-20">textBorderWidth：number 刻度标签文字本身描边宽度</span> <br />
                    <span class="margin-left-20">textBorderType：string number array 文字本身的描边类型。默认 'solid' 同 nameTextStyle.borderType 一样</span> <br />
                    <span class="margin-left-20">textBorderDashOffset：number 用于设置虚线的偏移量，可搭配 textBorderType 指定 dash array 实现灵活的虚线效果。</span> <br />
                    <span class="margin-left-20">textShadowColor：string 刻度标签文字阴影颜色</span> <br />
                    <span class="margin-left-20">textShadowBlur：number 刻度标签文字阴影模糊大小</span> <br />
                    <span class="margin-left-20">textShadowOffsetX：number 刻度标签文字阴影X轴偏移量</span> <br />
                    <span class="margin-left-20">textShadowOffsetY：number 刻度标签文字阴影Y轴偏移量</span> <br />
                    <span class="margin-left-20">overflow：string 文字超出宽度是否截断或者换行。配置width时有效 默认 'none' 同 nameTextStyle.overflow 一样</span> <br />
                    <span class="margin-left-20">ellipsis：string 在overflow配置为'truncate'的时候，可以通过该属性配置末尾显示的文本。</span> <br />
                    <span class="margin-left-20">lineOverflow：string 文本超出高度部分是否截断，配置height时有效。默认 'none' 可选 'truncate', 'none'</span> <br />
                    <span class="margin-left-20">rich：在 rich 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。 同 nameTextStyle.rich 一样</span>
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
        name: "EchartsXaxis",
        components: {JsonEdit, NewEchartFrame},
        setup() {
            let dom = ref(null);
            let json = ref(null);
            let mychart = ref(null);
            let color = ref('red');
            let jsonData = {
                show: true,
                type: 'category',
                name: '时间',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                nameTextStyle: {},
                axisLine: {},
                axisTick: {},
                minorTick: {},
                axisLabel: {}
            };

            function init() {
                if (mychart.value) {
                    mychart.value.clear();
                }
                let xAxis = JSON.parse(json.value.getJsonData());
                let option = {
                    xAxis: xAxis,
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
                color,
                jsonData,
                json,
                init,
                resetData
            };
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
