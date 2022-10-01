<template>
    <el-container>
        <el-aside width="200px">
            <Appasside></Appasside>
        </el-aside>
        <el-main>
            <Appmain></Appmain>
        </el-main>
    </el-container>
</template>
<script>
export default {
    components: {
        Appasside: () => import('../container/Appaside'),
        Appmain: () => import('../container/AppMain')
    },
    data() {
        return {

        };
    },
    created() {
       
    },
    methods: {
      
    },
};
</script>
<style scoped lang="scss">
.el-aside {
    background-color: #304155;
    color: #333;

}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    padding: 0;

}

.el-container {
    height: 100%;
}
</style>
