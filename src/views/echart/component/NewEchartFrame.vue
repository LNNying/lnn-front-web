<template>
    <slot />
    <el-row :gutter="10">
        <el-col :span="8">
            <slot name="content" />
        </el-col>
        <el-col :span="8">
            <slot name="config" />
        </el-col>
        <el-col :span="8">
            <slot name="echart" />
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "NewEchartFrame"
    }
</script>

<style scoped>

</style>
