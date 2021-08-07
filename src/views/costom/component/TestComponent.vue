<template>
    <div>
        注册组件：
        通过component注册：直接在main.js中引入组件，Vue.component()方法注入
        通过use(插件的方式)注册：定一个一个js文件，如下
        <code>
            import Test from './component/TestComponent';

            const TestComponent = {
                install: function(Vue) {
                    Vue.component(Test);
                }
            }
            export default TestComponent;
        </code>
        在main.js通过Vue.use()注入。
    </div>
</template>

<script>
    export default {
        name: "TestComponent"
    }
</script>

<style scoped>

</style>
