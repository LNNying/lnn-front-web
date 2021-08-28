<template>
    <div class="ny-header">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "NyHead"
    }
</script>

<style lang="less" scoped>
    .ny-header {
        width: 1400px;
        height: 100%;
        display: flex;
        justify-content: space-between;
    }
</style>
