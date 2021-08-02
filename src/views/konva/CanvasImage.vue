<template>
    <div id="container" class="map"></div>
</template>

<script>
    import Konva from 'konva';
    import drawUtil from './index';
    import {reactive, onMounted} from 'vue';

    export default {
        name: "CanvasImage",
        setup() {
            const WIDTH = window.innerWidth;
            const HEIGHT = window.innerHeight;
            const INTERVAL = 30;
            const NODE_WIDTH_HEIGHT = 15;
            const IMAGE_LIST = [
                {
                    key: 'rect',
                    src: require('../../assets/konva/rect.png')
                }
            ];

            const IMAGE_CLONE = new Konva.Image({
                width: NODE_WIDTH_HEIGHT,
                height: NODE_WIDTH_HEIGHT
            });

            let stageObj = reactive({
                stage: null,
                layer: null,
            });
            let loadImage = {};
            let errorNum = 0;
            let scale = 1;

            function initStage() {
                stageObj.stage = new Konva.Stage({
                    container: 'container',
                    width: WIDTH,
                    height: HEIGHT,
                    draggable: true
                });
                stageObj.layer = new Konva.Layer();
                stageObj.stage.add(stageObj.layer);

                const NODE_LIST = drawUtil.createSimulateNodeData();
                for (let i = 0, len = NODE_LIST.length; i < len; i++) {
                    let item = NODE_LIST[i];
                    let x = (item.x + 1) * INTERVAL * 1.1;
                    let y = (item.y + 1) * INTERVAL * 1.1;
                    let rect = IMAGE_CLONE.clone({
                        x: x,
                        y: y,
                        name: x + '-' + y,
                        image: loadImage['rect']
                    });
                    stageObj.layer.add(rect);
                }
                stageObj.layer.draw();
                bindMethods();
            }

            function bindMethods() {
                // stage.getPointerPosition();
                // stage.container().getBoundingClientRect();
                stageObj.stage.on('mouseup', e => {
                    let evt = e.evt;
                    // let posXY = stageObj.stage.getPointerPosition();
                    let offsetX = (evt.offsetX + stageObj.stage.getX()) / INTERVAL / 1.1 * scale;
                    let offsetY = (evt.offsetY + stageObj.stage.getY()) / INTERVAL / 1.1 * scale;
                    console.log({offsetX, offsetY});
                });
                // 滚动
                stageObj.stage.on('wheel', (e) => {
                    let wheel = e.evt.wheelDelta;
                    if (wheel > 0) { // 前
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
                    stageObj.stage.scaleX(scale);
                    stageObj.stage.scaleY(scale);
                });
            }

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
                initImage().then(() => {
                    initStage();
                }).catch(err => {
                    if (errorNum > 5) {
                        return;
                    }
                    initImage();
                    errorNum += 1;
                    console.log('图片加载失败' + err);
                });
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
