<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <el-input v-model="input"></el-input>
    </div>
</template>

<script>
    import {ref} from 'vue'

    export default {
        name: 'Home',
        components: {},
        setup() {
            let refs = ref(12);
            console.log(refs);
            let input = ref(32);
            return {
                input
            }
        }
    }
</script>
