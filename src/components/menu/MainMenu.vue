<template>
    <div class="ny-main-menu">
        <el-menu
                class="ny-menu"
                text-color="#9D9D9D"
                :unique-opened="true"
                :default-active="activeMenu"
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
    import {useRouter} from 'vue-router'
    export default {
        name: "MainMenu",
        props: {
            menuList: {
                Array,
                default: () => []
            },
            activeMenu: {
                String
            }
        },
        setup() {
            const route = useRouter();

            function selectMenu(name) {
                route.push({
                    name: name
                })
            }

            return {
                selectMenu
            }
        }
    }
</script>

<style lang="less">
    .ny-main-menu {
        background: #ffff;
        height: 100%;
        .ny-menu-title {
            height: 60px;
            width: 100%;
            background: #FFF;
        }
    }
</style>
