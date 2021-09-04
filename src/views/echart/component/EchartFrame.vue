<template>
    <slot></slot>
    <div class="flex margin-top-10">
        <slot name="echart"></slot>
        <div class="echart-content-border padding-10">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EchartFrame"
    }
</script>

<style scoped>
</style>
