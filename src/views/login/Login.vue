<template>
    <div class="login">
        <div class="title">{{ title }}</div>
        <div class="frame">
            <p> <i class="el-icon-coordinate"></i> 欢迎登入</p>
            <el-form ref="form" size="mini" :model="formItem" class="form" :rules="rule">
                <el-form-item prop="userName">
                    <el-input v-model="formItem.userName" placeholder="请输入账户" size="small" prefix-icon="el-icon-user-solid" />
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="formItem.password" type="password" placeholder="请输入密码" size="small" prefix-icon="el-icon-lock" />
                </el-form-item>
                <el-form-item>
                    <div class="line-item">
                        <p><el-checkbox v-model="formItem.remember" size="mini"><span style="color: #ffffff;">记住密码</span></el-checkbox></p>
                        <p><span>注册账户</span></p>
                    </div>
                </el-form-item>
                <el-form-item>
                    <el-button size="small" type="primary" @click="handleSubmit">登入</el-button>
                </el-form-item>
            </el-form>
        </div>
        <footer-page></footer-page>
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