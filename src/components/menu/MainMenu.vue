<template>
    <div class="ny-main-menu">
        <div class="ny-menu-title">
            这是一个菜单头
        </div>
        <el-menu
                class="ny-menu"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                @select="selectMenu"
        >
            <template v-for="(item, index) in menuList">
                <el-submenu v-if="item.children && item.children.length" :key="index + 'P'" :index="item.name">
                    <template #title>
                        <i :class="item.icon"></i>
                        <span>{{ item.title }}</span>
                    </template>
                    <el-menu-item v-for="(menuItem, i) in item.children" :key="i" :index="menuItem.name">
                        {{ menuItem.title }}
                    </el-menu-item>
                </el-submenu>
                <el-menu-item v-else :index="item.name" :key="index + 'C'">
                    <i :class="item.icon"></i>
                    <template #title>{{ item.title }}</template>
                </el-menu-item>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import {onMounted} from 'vue';
    import {useRouter} from 'vue-router'
    export default {
        name: "MainMenu",
        props: {
            menuList: {
                Array,
                default: () => []
            }
        },
        setup() {
            const ROUTER = useRouter();

            function selectMenu(name) {
                ROUTER.push({
                    name: name
                })
            }
            onMounted(() => {
            });

            return {
                selectMenu
            }
        }
    }
</script>

<style lang="less" scoped>
    .ny-main-menu {
        background: #545c64;
        height: 100%;
        .ny-menu-title {
            height: 60px;
            width: 100%;
            background: #FFF;
        }
    }
</style>
