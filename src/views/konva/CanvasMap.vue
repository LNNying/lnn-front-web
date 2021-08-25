<template>
    <!--舞台stage也可以调用draw与batchDraw()方法-->
    <div class="info-frame" v-show="frameOffset.show" :style="{left: frameOffset.x + 'px', top: frameOffset.y + 'px'}"></div>
    <div id="container" class="map"></div>
</template>

<script>
    import {reactive, onMounted, toRefs} from 'vue';
    import Konva from 'konva';
    import drawUtil from './index'
    export default {
        name: "CanvasMap",
        setup() {
            const WIDTH = window.innerWidth;
            const HEIGHT = window.innerHeight;
            const NODE_WIDTH_HEIGHT = 15;
            const INTERVAL = 30;
            const COLOR_OBJ = {
                rectStroke: 'rgb(133, 145, 158)',
                rectFill: 'rgb(154, 170, 189)',
                clickColor: 'rgb(244, 131, 238)'
            };
            const IMAGE_LIST = [
                {
                    key: 'rect',
                    src: require('../../assets/konva/rect.png')
                }
            ];
            // const CLONE_RECT = new Konva.Rect();
            // const IMAGE_CLONE = new Konva.Image({
            //     width: NODE_WIDTH_HEIGHT,
            //     height: NODE_WIDTH_HEIGHT
            // });
            const CLONE_RECT = new Konva.Rect();
            let scaleOffset = {
                x: 0,
                y: 0,
            };
            let scale = 1;
            let loadImage = {};
            let errorNum = 0;
            let isDown = false;
            let stageObj = reactive({
                stage: null,
                baseLayer: null,
                mapLayer: null
            });
            let dataObj = reactive({
                clickNode: null,
                frameOffset: {
                    x: 0,
                    y: 0,
                    show: false
                }
            });

            // 初始化舞台
            function initStage() {
                stageObj.stage = new Konva.Stage({
                    container: 'container',
                    width: WIDTH,
                    height: HEIGHT,
                    draggable: true,
                });
                stageObj.baseLayer = new Konva.Layer();
                stageObj.mapLayer = new Konva.Layer();
                stageObj.stage.add(stageObj.baseLayer);
                stageObj.stage.add(stageObj.mapLayer);
                bindMethod();
            }

            // 生成点位
            function initMap() {
                const NODE_LIST = drawUtil.createSimulateNodeData();
                for (let i = 0, len = NODE_LIST.length; i <len; i++) {
                    let item = NODE_LIST[i];
                    let x = (item.x + 1) * INTERVAL * 1.1;
                    let y = (item.y + 1) * INTERVAL * 1.1;
                    let rect = CLONE_RECT.clone({
                        x: x,
                        y: y,
                        name: x + '-' + y,
                        width: NODE_WIDTH_HEIGHT,
                        height: NODE_WIDTH_HEIGHT,
                        fill: COLOR_OBJ.rectFill
                    });
                    // let rect = IMAGE_CLONE.clone({
                    //     x: x,
                    //     y: y,
                    //     name: x + '-' + y,
                    //     image: loadImage['rect']
                    // });
                    stageObj.mapLayer.add(rect);
                }
                stageObj.mapLayer.draw();
            }

            // 绑定方法
            function bindMethod() {
                stageObj.stage.on('mousedown', () => {
                    // console.log(e);
                    isDown = true;
                    dataObj.frameOffset.show = false;
                });
                stageObj.stage.on('mouseup', (e) => {
                    // console.log({x: stageObj.stage.getX(), y: stageObj.stage.getY()});
                    isDown = false;
                    if (dataObj.clickNode) {
                        dataObj.clickNode.fill(COLOR_OBJ.rectFill);
                    }
                    if (!e.target.attrs.name) {
                        return;
                    }
                    dataObj.clickNode = e.target;
                    e.target.fill(COLOR_OBJ.clickColor);
                    setScaleOffset(e);
                    stageObj.stage.batchDraw();
                });
                // 滚动
                stageObj.stage.on('wheel', (e) => {
                    let wheel = e.evt.wheelDelta;
                    if (wheel < 0) { // 前
                        if (scale > 2) {
                            return;
                        }
                        scale += .2;
                    } else { // 后
                        if (scale < 0) {
                            return;
                        }
                        scale -= .2;
                    }
                    stageObj.stage.setAttrs({
                        offset: {
                            x: scaleOffset.x,
                            y: scaleOffset.y
                        },
                        x: scaleOffset.x / 2,
                        y: scaleOffset.y / 3
                    });
                    stageObj.stage.scaleX(scale);
                    stageObj.stage.scaleY(scale);
                    stageObj.stage.batchDraw();
                });
                // 移上来
                stageObj.stage.on('mousemove', e => {
                    let target = e.target;
                    if (!target.getName() || isDown) {
                        dataObj.frameOffset.show = false;
                        return;
                    }

                    dataObj.frameOffset.x = (target.getX() + NODE_WIDTH_HEIGHT) * scale + stageObj.stage.getX();
                    dataObj.frameOffset.y = (target.getY() + NODE_WIDTH_HEIGHT) * scale + stageObj.stage.getY();

                    // dataObj.frameOffset.show = true;
                });
                stageObj.stage.on('dragend', () => {
                    // console.log(e);
                })
            }

            function setScaleOffset(e) {
                scaleOffset.x = e.target.getX();
                scaleOffset.y = e.target.getY();
                console.log(scaleOffset);
            }

            // 构建地图图片
            function initCanvas(interval, colorObj) {
                // 生成地图图片
                return new Promise(((resolve, reject) => {
                    try {
                        // 横向 宽 纵向 高
                        const ROUTE_INTERVAL_R = NODE_WIDTH_HEIGHT * .55;
                        // 横向 高 纵向宽
                        const ROUTE_INTERVAL_C = NODE_WIDTH_HEIGHT * .6;

                        let canvas = document.createElement('canvas');
                        canvas.height = window.innerHeight * 3;
                        canvas.width = window.innerWidth * 3;
                        document.body.appendChild(canvas);
                        let ctx = canvas.getContext('2d');
                        const NODE_LIST = drawUtil.createSimulateNodeData();
                        for (let i = 0, len = NODE_LIST.length; i < len; i++) {
                            let item = NODE_LIST[i];
                            let x = (item.x + 1) * interval * 1.1;
                            let y = (item.y + 1) * interval * 1.1;
                            ctx.beginPath();
                            ctx.fillStyle = colorObj.rectFill;
                            ctx.strokeStyle = colorObj.rectStroke;
                            // ctx.fillRect(x, y, NODE_WIDTH_HEIGHT, NODE_WIDTH_HEIGHT);

                            drawUtil.createCanvasArrow(ctx, 1, x - ROUTE_INTERVAL_R - 1, y + NODE_WIDTH_HEIGHT / 4.5, ROUTE_INTERVAL_R, ROUTE_INTERVAL_C);
                            drawUtil.createCanvasArrow(ctx, 2, x + NODE_WIDTH_HEIGHT + 1, y + NODE_WIDTH_HEIGHT / 4.5, ROUTE_INTERVAL_R, ROUTE_INTERVAL_C);
                            drawUtil.createCanvasArrow(ctx, 3, x + NODE_WIDTH_HEIGHT / 4.5, y - ROUTE_INTERVAL_R - 1, ROUTE_INTERVAL_R, ROUTE_INTERVAL_C);
                            drawUtil.createCanvasArrow(ctx, 4, x + NODE_WIDTH_HEIGHT / 4.5, y + NODE_WIDTH_HEIGHT + 1, ROUTE_INTERVAL_R, ROUTE_INTERVAL_C);
                        }
                        let image = new Image();
                        image.src = canvas.toDataURL('baseMap/png');
                        document.body.removeChild(canvas);
                        resolve(image);
                    } catch (e) {
                        reject(e)
                    }
                }));
            }

            // 初始化点位图片
            function initImage() {
                return new Promise((resolve, reject) => {
                    for (let i = 0, len = IMAGE_LIST.length; i < len; i++) {
                        let item = IMAGE_LIST[i];
                        let image = new Image();
                        image.src = item.src;
                        if (!image.complete) {
                            reject('error')
                        }
                        loadImage[item.key] = image;
                        resolve('success');
                    }
                })
            }


            onMounted(() => {
                initCanvas(INTERVAL, COLOR_OBJ).then(response => {
                    initStage();
                    let image = new Konva.Image({
                        x: 0,
                        y: 0,
                        image: response,
                        width: WIDTH,
                        height: HEIGHT,
                        scaleX: 3,
                        scaleY: 3
                    });
                    stageObj.baseLayer.add(image);
                    stageObj.baseLayer.draw();
                }).catch(err => {
                    throw Error(err);
                });
                initImage().then(() => {
                    initMap();
                }).catch(err => {
                    if (errorNum > 3) {
                        return;
                    }
                    initImage();
                    errorNum += 1;
                    console.log(err);
                });

                window.onresize = function () {
                    stageObj.stage.setWidth(window.innerWidth);
                    stageObj.stage.setHeight(window.innerHeight);
                }
            });

            return {
                ...toRefs(dataObj)
            }
        }
    }
</script>

<style lang="less" scoped>
    .info-frame {
        position: absolute;
        background: rgba(255, 84, 93, 0.6);
        width: 100px;
        height: 50px;
        z-index: 100;
    }
    .map {
        overflow: hidden;
        height: 100vh;
        background: rgb(218, 224, 232);
    }
</style>
