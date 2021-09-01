<template>
    <div class="ny-login">
        <div class="ny-bg"></div>
    </div>
</template>

<script>
    /* eslint-disable vue/no-unused-components */

    import config from '../../config/index'
    import FooterPage from "../layout/compont/FooterPage";
    import {reactive, toRefs, ref} from 'vue';
    import {useRouter} from 'vue-router'
    export default {
        name: "Login",
        components: {FooterPage},
        setup() {
            let title = config.title;
            let form = ref(null);
            let router = useRouter();
            const rule = {
                userName: [{required: true, message: '请填写账户', trigger: 'blur'}],
                password: [{required: true, message: '请填写密码', trigger: 'blur'}]
            };
            let dataInfo = reactive({
                formItem: {
                    remember: true,
                    userName: 'admin',
                    password: '123456'
                }
            });

            function handleSubmit() {
                localStorage.setItem('token', 'Test Token');
                form.value.validate(valid => {
                    if (valid) {
                        router.push({
                            path: '/home'
                        })
                    }
                })
            }
            return {
                title,
                form,
                rule,
                ...toRefs(dataInfo),
                handleSubmit
            }
        }
    }
</script>

<style scoped lang="less">
    @import "./Login.less";
</style>
