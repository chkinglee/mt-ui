<template>
    <div>
        <div>
            <router-link to="/home">Menu</router-link>
        </div>
        <img alt="Vue logo" src="../assets/logo.png">
        <el-form :rules="rules" :model="loginForm" class="loginContainer">
            <h3 class="loginTitle">系统登录</h3>
            <el-form-item prop="username">
                <el-input type="text" v-model="loginForm.username" auto-complete="off"
                          placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="text" v-model="loginForm.password" auto-complete="off" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-button type="primary" style="width: 100%">登录</el-button>
        </el-form>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'Index',
        components: {},
        data() {
            return {
                rules: {
                    username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
                    password: [{required: true, message: '请输入密码', trigger: 'blur'}]
                },
                loginForm: {username: 'admin', password: '123'}
            }
        }
    }
</script>

<style>
    .loginContainer {
        border: 1px solid #eaeaea;
        border-radius: 15px;
        background-clip: padding-box;
        margin: 180px auto;
        width: 350px;
        padding: 15px 35px 15px 35px;
        background: #fff;
        box-shadow: 0 0 25px #cac6c6;
    }

    .loginTitle {
        margin: 15px auto 20px auto;
        text-align: center;
        color: #505458;
    }
</style>
