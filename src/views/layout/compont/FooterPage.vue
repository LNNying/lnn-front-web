<template>
    <div class="footer">
        {{ desc }} {{fullYear}}
    </div>
</template>

<script>
    import config from '../../../config/index'
    export default {
        name: "FooterPage",
        setup() {

            let desc = config.copyright;

            return {
                fullYear: new Date().getFullYear(),
                desc
            }
        }
    }
</script>

<style scoped>
.footer {
    position: absolute;
    color: #fff;
    width: 100%;
    height: 20px;
    text-align: center;
    bottom: 0;

}
</style>
