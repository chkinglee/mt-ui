<template>
    <el-container>
        <el-header class="homeHeader">
            <div>
                菜单树
            </div>
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
            <el-aside width="200px">Aside</el-aside>

            <el-main>Main</el-main>
        </el-container>
        <el-footer>Footer</el-footer>

    </el-container>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'Menu'
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
</style>
