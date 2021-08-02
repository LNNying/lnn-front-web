<template>
    <div class="global">
        <div class="map1" id="container1"></div>
        <div class="map2" id="container2"></div>
    </div>
</template>

<script>
    import Konva from 'konva';
    import {onMounted} from 'vue';
    import drawUtil from './index'
    export default {
        name: "CanvasTwo",
        setup() {
            const WIDTH = window.innerWidth;
            const HEIGHT = window.innerHeight;
            const CLONE_RECT = new Konva.Rect();
            // const CLONE_CIRCLE = new Konva.Circle();
            const INTERVAL = 30;
            const NODE_WIDTH_HEIGHT = 15;
            const NODE_LIST = drawUtil.createSimulateNodeData();
            const COLOR_OBJ = {
                rectStroke: 'rgb(133, 145, 158)',
                rectFill: 'rgb(154, 170, 189)',
                clickColor: 'rgb(244, 131, 238)'
            };

            let stageObj = {
                stage1: null,
                layer1: null,
                stage2: null,
                layer2: null
            };

            // 底层显示全局地图
            function initStage1() {
                stageObj.stage1 = new Konva.Stage({
                    container: 'container1',
                    width: WIDTH,
                    height: HEIGHT,
                    draggable: true
                });
                stageObj.layer1 = new Konva.Layer();
                stageObj.stage1.add(stageObj.layer1);
            }

            function initStage2() {
                stageObj.stage2 = new Konva.Stage({
                    container: 'container2',
                    width: WIDTH,
                    height: HEIGHT,
                    draggable: true
                });
                stageObj.layer2  = new Konva.Layer();
                stageObj.stage2.add(stageObj.layer2);

                for (let i = 0, len = NODE_LIST.length; i < len; i++) {
                    let item = NODE_LIST[i];
                    let x = (item.x + 1) * INTERVAL * 1.1;
                    let y = (item.y + 1) * INTERVAL * 1.1;
                    let rect = CLONE_RECT.clone({
                        x: x,
                        y: y,
                        name: x + '-' + y,
                        width: NODE_WIDTH_HEIGHT,
                        height: NODE_WIDTH_HEIGHT,
                        fill: 'red'
                    });
                    stageObj.layer2.add(rect);
                }
                stageObj.stage2.on('dragmove', () => {
                    stageObj.stage1.setAttr('x', stageObj.stage2.getX());
                    stageObj.stage1.setAttr('y', stageObj.stage2.getY());
                });
                stageObj.stage2.on('mouseup', (e) => {
                    let name = e.target.getName();
                    let rect = stageObj.stage2.findOne('.' + name);
                    if (rect) {
                        rect.fill('blue')
                    }
                })
            }

            onMounted(() => {
                drawUtil.initCanvas(INTERVAL, COLOR_OBJ, NODE_WIDTH_HEIGHT).then(response => {
                    initStage1();
                    let image = new Konva.Image({
                        x: 0,
                        y: 0,
                        image: response.image,
                        width: WIDTH,
                        height: HEIGHT,
                        scaleX: response.scale,
                        scaleY: response.scale
                    });
                    stageObj.layer1.add(image);
                    initStage2();
                }).catch(err => {
                    console.log(err);
                });
            })
        }
    }
</script>

<style lang="less" scoped>
    .global {
        position: relative;
        .map1 {
            position: absolute;
            overflow: hidden;
            height: 100vh;
            background: rgb(218, 224, 232);
        }
        .map2 {
            position: absolute;
            overflow: hidden;
            height: 100vh;
            z-index: 10;
        }
    }
</style>
