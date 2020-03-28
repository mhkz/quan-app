<template>
    <div>
        <el-row>
            <Header></Header>
        </el-row>
        <el-row class="container">
            <el-col :span=7>
                <Aside></Aside>
            </el-col >
            <el-col :span="17">
                <m-content></m-content>
            </el-col>
        </el-row>
        <el-row>
            <Footer></Footer>
        </el-row>
    </div>
</template>

<script>
    import Header from "@/components/layout/Header/Header";
    import Aside from "@/components/layout/Aside/Aside";
    import Footer from "@/components/layout/Footer/Footer";
    import MContent from "@/components/layout/MContent/MContent";
    export default {
        name: "Layout",
        components: {
            Header,
            Aside,
            Footer,
            MContent
        }
    }
</script>

<style scoped>
.container {
    height: 100%;
}
</style>