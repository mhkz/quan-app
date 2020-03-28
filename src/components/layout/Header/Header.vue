<template>


    <el-row class="header">
        <el-col :span="4" >
            <div class="logo">
                全库书籍管理系统
            </div>
        </el-col>

        <el-col :span="20">
            <nav>
                <ul>
                    <router-link to="/book" class="tool-btn" active-class="active">书籍管理</router-link>
                    <router-link to="/login"  class="tool-btn">视频</router-link>
                    <router-link to="/login" class="tool-btn">音乐</router-link>
                    <router-link to="/login" class="tool-btn">读书</router-link>
                    <router-link to="/login" class="tool-btn">导航</router-link>
                </ul>
            </nav>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        data() {
            return {
            };
        },
    };
</script>

<style scoped>
    .header {
        height: 65px;
        width: 100%;
        line-height: 60px;
        background-color: #383E43;
    }

    .logo{
        text-align: center;
    }
    nav {
        /*width: 99%;*/
        margin:0 auto;
        height:100%;
    }

    .tool-btn {
        width: 80px;
        display: inline-block;
        font-weight: bold;
        padding-left: 20px;
        padding-right: 20px;
        line-height: 64px;
        text-align: center;
        font-size: 18px;
        color: #fff;
    }
    .tool-btn:hover{
        cursor: pointer;
    }

    .active {
        border-radius: 5px;
        background-color: #1D1F20;
    }

</style>
