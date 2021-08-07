<template>
    <div id="container"></div>
</template>

<script>
    import {onMounted} from 'vue';
    import Konva from 'konva';
    export default {
        name: "MulateRotate",
        setup() {
            function initFun() {
                let stage = new Konva.Stage({
                    container: 'container',
                    width: window.innerWidth,
                    height: window.innerHeight,
                    draggable: true
                });
                let layer = new Konva.Layer();
                stage.add(layer);

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

                let img = imageRect.clone({
                    x: 300,
                    y: 100,
                    image: image,
                    width: 15,
                    height: 15,
                    rotation: 72,
                    offset: {
                        x: 7.5,
                        y: 7.5
                    }
                });

                layer.add(rect);
                layer.add(img);
                setInterval(() => {
                    let timer = new Date().getTime() * 90;
                    let tween = new Konva.Tween({
                        node: img,
                        easing: Konva.Easings.Linear,
                        duration: 1,
                        rotation: timer / 1000,
                        onFinish : function() {
                            tween.destroy();
                        }
                    });
                    tween.play();
                    // img.rotate(timer / 1000);
                }, 1000)
            }

            onMounted(() => {
                initFun();
            })

        }
    }
</script>

<style scoped>

</style>
