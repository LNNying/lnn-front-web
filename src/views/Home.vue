<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import {ref} from 'vue'

    export default {
        name: 'Home',
        components: {
            HelloWorld
        },
        setup() {
            let refs = ref(12);
            console.log(refs);
        }
    }
</script>
