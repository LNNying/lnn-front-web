<template>
    <el-input v-model="rotate" style="width: 200px;" />
    <el-button type="primary" style="margin-left: 10px" @click="setRotate">旋转</el-button>
    <div id="container" class="map"></div>
</template>

<script>
    import {onMounted, reactive, toRefs} from 'vue';
    import Konva from 'konva';
    export default {
        name: "MulateRotate",
        setup() {
            let dataInfo = reactive({
                rotate: 0,
                rotatCar: null,
                layer: null,
                stage: null
            });

            function setRotate() {
                let rotate = Number(dataInfo.rotate);
                console.log(rotate);
                // dataInfo.rotatCar.rotation(rotate);
                createTween(dataInfo.rotatCar, rotate);
                dataInfo.stage.batchDraw();
            }

            function createTween(node, rotation) {
                let tween = new Konva.Tween({
                    node: node,
                    easing: Konva.Easings.Linear,
                    duration: 1,
                    rotation: rotation,
                    onFinish: function() {
                        tween.destroy();
                    }
                });
                tween.play();
            }

            function initFun() {
                dataInfo.stage = new Konva.Stage({
                    container: 'container',
                    width: window.innerWidth,
                    height: window.innerHeight,
                    draggable: true
                });
                dataInfo.layer = new Konva.Layer();
                dataInfo.stage.add(dataInfo.layer);

                let image = new Image();
                image.src = require('../../assets/konva/agv.png');
                let imageRect = new Konva.Image();
                let rect = new Konva.Rect({
                    name: 's',
                    x: 200,
                    y: 100,
                    fill: 'blue',
                    stroke: '#000',
                    width: 15,
                    height: 15,
                    offset: {
                        x: 7.5,
                        y: 7.5
                    }
                });

                dataInfo.rotatCar = imageRect.clone({
                    x: 500,
                    y: 100,
                    image: image,
                    width: 15,
                    height: 15,
                    rotation: dataInfo.rotate,
                    offset: {
                        x: 7.5,
                        y: 7.5
                    }
                });

                let img = imageRect.clone({
                    x: 300,
                    y: 100,
                    image: image,
                    width: 15,
                    height: 15,
                    rotation: 0,
                    offset: {
                        x: 7.5,
                        y: 7.5
                    }
                });

                dataInfo.layer.add(rect);
                dataInfo.layer.add(img);
                dataInfo.layer.add(dataInfo.rotatCar);
                setInterval(() => {
                    let timer = new Date().getTime() * 90;
                    let tween = new Konva.Tween({
                        node: img,
                        easing: Konva.Easings.Linear,
                        duration: 1,
                        rotation: timer / 1000,
                        onFinish: function() {
                            tween.destroy();
                        }
                    });
                    tween.play();
                    // img.rotate(timer / 1000);
                }, 1000)
            }

            onMounted(() => {
                initFun();
            });

            return {
                ...toRefs(dataInfo),
                setRotate
            };

        }
    }
</script>

<style lang="less" scoped>
    .map {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>
