<template>
    <div class="container" :style="{ height: containerHeight + 'px' }">
        <div class="wrapper">
            <router-view name="main"></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Content",
        data () {
            return {
                containerHeight: 0,
            }
        },
        mounted() {
            this.containerHeight = document.body.clientHeight - 155;
        }
    }
</script>

<style scoped lang="scss">
@import "src/assets/styles/color";
.container {
    height: 100%;
    margin: 20px;
    border-radius: 5px;
    background-color: #383E43;
}
.wrapper {
    margin: 10px;
    padding: 30px 50px;
}
</style>