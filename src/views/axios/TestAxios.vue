<template>
    <el-button size="mini" type="primary" @click="sendHttp">发送Axios请求</el-button>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "TestAxios",
        setup() {
            function sendHttp() {
                axios.get('http://localhost:8081',
                    {'Content-Type': 'text/plain'}).then(response => {
                    console.log(response);
                })
            }

            return {
                sendHttp
            }
        }
    }
</script>

<style scoped>

</style>
