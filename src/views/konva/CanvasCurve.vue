<template>
    <div id="container" class="map"></div>
</template>

<script>
    import Konva from 'konva';
    import {reactive, onMounted} from 'vue';
    export default {
        name: "CanvasCurve",
        setup() {
            /**
             * 二次、三次赛贝斯曲线
             * @type {number}
             */
            const WIDTH = window.innerWidth;
            const HEIGHT = window.innerHeight;

            let stageObj = reactive({
                stage: null,
                curveLayer: null,
                lineLayer: null,
                anchorLayer: null,
                quad: null,
                bezier: null
            });

            function initStage() {
                stageObj.stage = new Konva.Stage({
                    container: 'container',
                    width: WIDTH,
                    height: HEIGHT
                });
                stageObj.curveLayer = new Konva.Layer();
                stageObj.anchorLayer = new Konva.Layer();
                stageObj.lineLayer = new Konva.Layer();
                stageObj.stage.add(stageObj.curveLayer);
                stageObj.stage.add(stageObj.lineLayer);
                stageObj.stage.add(stageObj.anchorLayer);
                initLine();
                drawCurves();
                updateDottedLines();
            }


            // 构建锚点 生成锚点 并返回改点对象
            function buildAnchor(x, y) {
                let anchor = new Konva.Circle({
                    x: x,
                    y: y,
                    radius: 20,
                    stroke: '#666',
                    fill: '#ddd',
                    strokeWidth: 2,
                    draggable: true
                });

                anchor.on('mouseover', function() {
                    document.body.style.cursor = 'pointer';
                    this.strokeWidth(4);
                    stageObj.anchorLayer.draw();
                });
                anchor.on('mouseout', function() {
                    document.body.style.cursor = 'default';
                    this.strokeWidth(2);
                    stageObj.anchorLayer.draw();
                });

                anchor.on('dragend', function() {
                    drawCurves();
                    updateDottedLines();
                });

                stageObj.anchorLayer.add(anchor);
                return anchor;
            }

            // 初始化点线
            function initLine() {
                // 线的点坐标
                let quadLine = new Konva.Line({
                    dash: [10, 10, 0, 10],
                    strokeWidth: 3,
                    stroke: 'black',
                    lineCap: 'round',
                    id: 'quadLine',
                    opacity: 0.3,
                    points: [0, 0]
                });

                let bezierLine = new Konva.Line({
                    dash: [10, 10, 0, 10],
                    strokeWidth: 3,
                    stroke: 'black',
                    lineCap: 'round',
                    id: 'bezierLine',
                    opacity: 0.3,
                    points: [0, 0]
                });

                stageObj.lineLayer.add(quadLine);
                stageObj.lineLayer.add(bezierLine);

                stageObj.quad = {
                    start: buildAnchor(60, 30),
                    control: buildAnchor(240, 110),
                    end: buildAnchor(80, 160)
                };

                stageObj.bezier = {
                    start: buildAnchor(280, 20),
                    control1: buildAnchor(530, 40),
                    control2: buildAnchor(480, 150),
                    end: buildAnchor(300, 150)
                };

                stageObj.anchorLayer.on('beforeDraw', () => {
                    drawCurves();
                    updateDottedLines();
                })
            }

            // 生成二次、三次曲线
            function drawCurves() {
                let context = stageObj.curveLayer.getContext();

                context.clear();

                context.beginPath();
                context.moveTo(stageObj.quad.start.attrs.x, stageObj.quad.start.attrs.y);
                // 二次赛贝斯曲线
                context.quadraticCurveTo(
                    stageObj.quad.control.attrs.x,
                    stageObj.quad.control.attrs.y,
                    stageObj.quad.end.attrs.x,
                    stageObj.quad.end.attrs.y
                );
                context.setAttr('strokeStyle', 'red');
                context.setAttr('lineWidth', 4);
                context.stroke();

                context.beginPath();
                context.moveTo(stageObj.bezier.start.attrs.x, stageObj.bezier.start.attrs.y);
                // 三次赛贝斯曲线
                context.bezierCurveTo(
                    stageObj.bezier.control1.attrs.x,
                    stageObj.bezier.control1.attrs.y,
                    stageObj.bezier.control2.attrs.x,
                    stageObj.bezier.control2.attrs.y,
                    stageObj.bezier.end.attrs.x,
                    stageObj.bezier.end.attrs.y
                );
                context.setAttr('strokeStyle', 'blue');
                context.setAttr('lineWidth', 4);
                context.stroke();
            }

            // 动态更新 点线
            function updateDottedLines() {
                let q = stageObj.quad;
                let b = stageObj.bezier;

                let quadLine = stageObj.lineLayer.findOne('#quadLine');
                let bezierLine = stageObj.lineLayer.findOne('#bezierLine');

                quadLine.points([
                    q.start.attrs.x,
                    q.start.attrs.y,
                    q.control.attrs.x,
                    q.control.attrs.y,
                    q.end.attrs.x,
                    q.end.attrs.y
                ]);

                bezierLine.points([
                    b.start.attrs.x,
                    b.start.attrs.y,
                    b.control1.attrs.x,
                    b.control1.attrs.y,
                    b.control2.attrs.x,
                    b.control2.attrs.y,
                    b.end.attrs.x,
                    b.end.attrs.y
                ]);
                stageObj.lineLayer.draw();
            }

            onMounted(() => {
                initStage();
            })

        }
    }
</script>

<style lang="less" scoped>
    .map {
        overflow: hidden;
        height: 100vh;
        background: rgb(218, 224, 232);
    }
</style>
