<template>
    <el-row class="wrapper">
        <div class="wrapper-menu">
            <div class="wrapper-item" :class="{'active':index =='0'}" @click="index = 0">
                <div class="item">
                    <router-link to="/book/spider" style="color: #fff;">
                        <span class="iconfont">&#xe636;</span>
                        &nbsp;&nbsp;书籍采集
                    </router-link>
                </div>
            </div>
            <div class="wrapper-item" :class="{'active':index =='1'}" @click="index = 1">
                <div class="item">
                    <router-link to="/book/manage" style="color: #fff;">
                        <span class="iconfont">&#xe627;</span>
                        &nbsp;&nbsp;书籍管理
                    </router-link>
                </div>

            </div>
        </div>

    </el-row>
</template>

<script>
    export default {
        name: "Menu",
        data () {
            return {
                index: "0"
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        height: 100%;
        width: 100%;

    }
    .wrapper-menu {
        margin: 60px 20px 20px 20px;
    }
    .wrapper-item {
        width: 100%;
        height: 60px;
        font-size: 20px;
        line-height: 60px;
    }
    .item {
        margin-left: 20px;
    }
    .active {
        background-color: #1D1F20;
        border-radius: 5px;
    }
</style>