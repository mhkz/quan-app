<template>
    <div class="container" :style="{ height: containerHeight + 'px' }">
        <div class="wrapper">
            <router-view name="aside"></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Aside",
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

<style scoped>
.container {
    height: 100%;
    margin: 20px;
    border-radius: 5px;
    background-color: #383E43;
}
.wrapper {
}
</style>