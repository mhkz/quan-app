<template>
    <div>
        <div class="spider-container spider-header">
            <div class="spider-item-id">序号</div>
            <div class="spider-item-name">名称</div>
            <div class="spider-item-action">
                操作
            </div>
        </div>
        <div v-for="{name, id} in spiderList" :key="id" class="spider-container">
            <div class="spider-item-id">{{id}}</div>
            <div class="spider-item-name">{{name}}</div>
            <div class="spider-item-action">
                <el-button type="primary" @click="bindCategory(1)">绑定分类</el-button>
                <el-button type="primary">开始采集</el-button>
                <el-button type="danger">删除</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Spider",
        data () {
            return {
                spiderList: [{
                    id: 1,
                    name: '笔趣阁',
                }]
            }
        },
        methods: {
            bindCategory(id) {
                this.$router.push(`/book/bind-category/${id}`)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../assets/styles/color";
    .spider-container {
        display: flex;
        height: 40px;
        line-height: 40px;
        background-color:  #343a40;
    }
    .spider-header{
        font-size: 20px;
        background-color: #2f2f2f;
    }
    .spider-item-id {
        flex: 1;
        text-align: center;
    }
    .spider-item-name {
        flex: 3;
        text-align: center;
    }
    .spider-item-action {
        flex: 3;
        text-align: center;
        color: $cyan;
    }
</style>