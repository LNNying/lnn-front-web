<template>
<div class="box-page">
    <p>vue中</p>
    <p>{{ data }}</p>
</div>
</template>

<script>
    import {reactive, toRefs, onMounted} from 'vue'
    export default {
        name: "directive",
        setup() {
            let dataInfo = reactive({
                data: 0
            });

            onMounted(() => {
               setInterval(() => {
                   dataInfo.data += 1;
               }, 1000)
            });

            return {
                ...toRefs(dataInfo)
            }
        }
    }
</script>

<style scoped>

</style>
