<template>
    <div class="preview" id="preview"></div>
    <div class="contain" id="contain"></div>
</template>

<script>
    import {reactive, onMounted} from 'vue';
    import Konva from 'konva';

    export default {
        name: "StagePreview",
        setup() {

            const width = window.innerWidth;
            const height = window.innerHeight;
            const color = ['#6561ff','#ff8d75', '#ffc02d', '#61ff8e', '#63e4ff', '#ed2eff'];

            let stageObj = reactive({
                stage: null,
                layer: null,
                preStage: null,
                preLayer: null
            });

            function initStage() {
                stageObj.stage = new Konva.Stage({
                    container: 'contain',
                    width: width,
                    height: height,
                    draggable: true
                });
                stageObj.preStage = new Konva.Stage({
                    container: 'preview',
                    width: width / 4,
                    height: height / 4,
                    scaleX: 1 / 4,
                    scaleY: 1 / 4,
                    draggable: true
                });

                stageObj.layer = new Konva.Layer();
                stageObj.stage.add(stageObj.layer);
                createCircle();
            }

            function createCircle() {
                for (let i = 0; i < 10; i++) {
                    let index = Math.floor(Math.random() * color.length);
                    let circle = new Konva.Circle({
                        x: Math.random() * width,
                        y: Math.random() * height,
                        radius: Math.random() * 30,
                        fill: color[index],
                        draggable: true,
                        name: 'shape-' + i
                    });
                    stageObj.layer.add(circle);
                }
                stageObj.layer.batchDraw();
                stageObj.preLayer = stageObj.layer.clone({hitGraphEnabled: false});
                stageObj.preStage.add(stageObj.preLayer);
                stageObj.stage.on('dragmove', (e) => {
                    let target = e.target;
                    let clone = stageObj.preLayer.findOne('.' + target.attrs.name);
                    if (clone) {
                        clone.position(target.position());
                    } else {
                        stageObj.preStage.position(target.position());
                    }
                });
                stageObj.preStage.on('dragmove', (e) => {
                    stageObj.stage.position(e.target.position());
                });
                stageObj.stage.on('wheel', (e) => {
                    wheelData(e, 'preStage');
                });
                stageObj.preStage.on('wheel', (e) => {
                    wheelData(e, 'stage');
                })
            }

            function wheelData(e, key) {
                let target = e.target;
                if (e.evt.wheelDelta > 0) { // 往前滚
                    target.scaleX(target.scaleX() / 2);
                    target.scaleY(target.scaleY() / 2);
                    stageObj[key].scaleX(stageObj[key].scaleX() / 2);
                    stageObj[key].scaleY(stageObj[key].scaleY() / 2);
                } else {
                    target.scaleX(target.scaleX() * 2);
                    target.scaleY(target.scaleY() * 2);
                    stageObj[key].scaleX(stageObj[key].scaleX() * 2);
                    stageObj[key].scaleY(stageObj[key].scaleY() * 2);
                }
            }

            onMounted(() => {
                initStage();
                // console.log(Konva.Util.getRandomColor());
            })
        }
    }
</script>

<style lang="less" scoped>
    .preview {
        position: absolute;
        top: 5px;
        right: 0px;
        z-index: 100;
        border: 1px solid #848484;
        background: #1bb9ff;
    }

</style>
