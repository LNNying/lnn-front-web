<template>
    <div class="operate">
        <p style="margin-bottom: 5px">
            <el-select v-model="selectMenu">
                <el-option value="1" label="测试一层图形数量" />
                <el-option value="2" label="测试多层图形数量" />
            </el-select>
        </p>
        <el-input v-model.number="currentLayer" v-show="selectMenu === '2'" style="width: 200px; margin-right: 5px"/>
        <el-input v-model.number="currentCount" style="width: 200px"/>
        <el-button type="primary" style="margin-left: 5px;" @click="addCircle">添加</el-button>
        <el-button type="primary" style="margin-left: 5px;" @click="reDraw">重绘</el-button>
        <el-button type="primary" style="margin-left: 5px;" @click="showResult = !showResult">查看结论</el-button>
        <p><span v-show="selectMenu === '2'">图层数 {{ allLayer }} 每层图形数 {{ layerNum }}</span>  当前图形数量 {{ allCount }}</p>
        <div v-show="showResult">
            <p>结论：</p>
            <p>一层layer最佳图形数量为3000一下</p>
        </div>
    </div>
    <div id="contain"></div>
</template>

<script>
    import Konva from 'konva';
    import {ref, reactive, onMounted} from 'vue';
    export default {
        name: "PerformanceTest",
        setup() {
            let stageObj = reactive({
                stage: null,
                layer: null
            });
            const width = window.innerWidth;
            const height = window.innerHeight;

            const count = ref(1000);
            const color = ['#6561ff','#ff8d75', '#ffc02d', '#61ff8e', '#63e4ff', '#ed2eff'];
            let allCount = ref(0);
            let currentCount = ref(1000);
            let showResult = ref(false);
            let layerNum = ref(1000);
            let allLayer = ref(1);
            let currentLayer = ref(1);
            let selectMenu = ref('1');

            // FastLayer 中的图形不支持推拽
            function initKonva() {
                stageObj.stage = new Konva.Stage({
                    container: 'contain',
                    width: width,
                    height: height,
                    draggable: true
                });
                stageObj.layer = new Konva.Layer();
                stageObj.stage.add(stageObj.layer);

                let fastLayer = new Konva.FastLayer();
                stageObj.stage.add(fastLayer);

                allCount.value = count.value;

                for (let i = 0; i < count.value; i++) {
                let circle = createCircle();
                    stageObj.layer.add(circle);
                }
                stageObj.layer.batchDraw();

                // 分图层处理
                // for (let i = 0; i < 10; i++) {
                //     let layer = new Konva.Layer();
                //     stageObj.stage.add(layer);
                //     for (let n = 0; n < 1000; n++) {
                //         let circle = createCircle();
                //         layer.add(circle);
                //     }
                //     layer.batchDraw();
                // }
            }
            function createCircle() {
                let index = Math.floor(Math.random() * color.length);
                let circle = new Konva.Circle({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    fill: color[index],
                    radius: Math.random() * 10,
                    draggable: true
                });
                return circle;
            }

            function reDraw() {
                initKonva();
            }

            function addCircle() {
                if (selectMenu.value === '1') {
                    allCount.value += currentCount.value;
                    for (let i = 0; i < currentCount.value; i++) {
                        let circle = createCircle();
                        stageObj.layer.add(circle);
                    }
                    stageObj.layer.batchDraw();
                } else {
                    layerNum.value = currentCount.value;
                    allLayer.value = currentLayer.value;
                    allCount.value = allLayer.value * currentCount.value;

                    stageObj.stage = new Konva.Stage({
                        container: 'contain',
                        width: width,
                        height: height,
                        draggable: true
                    });
                    stageObj.layer = new Konva.Layer();
                    stageObj.stage.add(stageObj.layer);

                    for (let i = 0; i < currentLayer.value; i++) {
                        let layer = new Konva.Layer();
                        stageObj.stage.add(layer);
                        for (let j = 0; j < currentCount.value; j++) {
                            let circle = createCircle();
                            layer.add(circle);
                        }
                        layer.batchDraw();
                    }
                }
            }
            onMounted(() => {
                initKonva();
            });
            return {
                count,
                currentCount,
                currentLayer,
                showResult,
                allLayer,
                allCount,
                layerNum,
                selectMenu,
                addCircle,
                reDraw
            }
        }
    }
</script>

<style lang="less" scoped>
    .operate {
        width: 800px;
        position: fixed;
        z-index: 888;
        background: #78ff49;
    }
</style>
