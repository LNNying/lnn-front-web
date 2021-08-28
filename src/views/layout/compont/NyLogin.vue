<template>
    <div class="ny-login">
        <span>进入园区</span>
        <span>|</span>
        <span>开通权限</span>
    </div>
</template>

<script>
    export default {
        name: "NyLogin"
    }
</script>

<style lang="less" scoped>
    .ny-login {
        line-height: 60px;
        height: 100%;
        span {
            padding: 2px;
        }
        span:nth-child(1), span:nth-child(3) {
            cursor: pointer;
            font-weight: bold;
            &:hover {
                color: #046EFA;
            }
        }
    }
</style>
