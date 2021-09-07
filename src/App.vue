<template>
    <div v-cloak>
        <router-view/>
    </div>
</template>
<script>
    import {onMounted} from 'vue';
    import {useRouter} from 'vue-router';

    export default {
        name: "App",
        setup() {
            const router = useRouter();

            function checkToken() {
                const token = localStorage.getItem('token-ny');
                if (token) {
                    const validData = token.split(';');
                    if (validData.includes('ny')) {
                        return;
                    }
                }
                router.push({
                    path: '/login'
                })
            }

            onMounted(() => {
                checkToken();
            });
        }
    }
</script>

<style lang="less">
</style>
