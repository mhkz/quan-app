<template>
    <el-row class="wrapper">
      绑定分类
    </el-row>
</template>

<script>
    export default {
        name: "BindCategory",
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