<template>
    <el-container>
        <el-header class="homeHeader">
            <div class="home_title">菜单树</div>
            <el-dropdown>
                  <span class="el-dropdown-link">
                    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                    <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-header>

        <el-container>
            <el-aside width="200px">
                <el-menu class="el-menu-vertical-demo" router unique-opened>
                    <el-submenu :index="itemIndex+''" :key="itemIndex" v-for="(item, itemIndex) in routes">
                        <template slot="title">
                            <i style="color: #409eff" :class="item.iconCls"></i>
                            <span>{{item.name}}</span>
                        </template>
                        <el-menu-item :index="subItem.path" :key="subItemIndex"
                                      v-for="(subItem, subItemIndex) in item.children">
                            <i style="color: #409eff" :class="subItem.iconCls"></i>
                            <span slot="title">{{subItem.name}}</span>
                        </el-menu-item>
                    </el-submenu>
                </el-menu>

            </el-aside>

            <el-main>
                <router-view/>
            </el-main>
        </el-container>
        <el-footer>Footer</el-footer>

    </el-container>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'Home',
        computed: {
            routes() {
                return this.$store.state.routes;
            }
        }
    }
</script>

<style>
    .homeHeader {
        background-color: #409eff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 15px;
        box-sizing: border-box;
    }


    .home_title {
        color: #fff;
        font-size: 22px;
        display: inline;
        margin-left: 8px;
    }
</style>
