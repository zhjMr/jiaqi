<template>
    <div>
        <el-col>
            <el-menu :default-active="activeName" class="el-menu-vertical-demo" background-color="#304155" text-color="#fff"
                active-text-color="#419fff" router>
                <el-menu-item index="home">
                    <i class="el-icon-s-home"></i>
                    <span slot="title">首页</span>
                </el-menu-item>
                <el-submenu index="blogs">
                    <template slot="title">
                        <i class="el-icon-notebook-2"></i>
                        <span>博客管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="article"> <i class="el-icon-notebook-1"></i>文章管理</el-menu-item>
                        <el-menu-item index="classify"> <i class="el-icon-collection"></i>分类管理</el-menu-item>
                        <el-menu-item index="label"> <i class="el-icon-price-tag"></i>标签管理</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="4">
                    <i class="el-icon-orange"></i>
                    <span slot="title">广告管理</span>
                </el-menu-item>
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-setting"></i>
                        <span>系统管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1"> <i class="el-icon-user"></i>用户管理</el-menu-item>
                        <el-menu-item index="1-2"> <i class="el-icon-c-scale-to-original"></i>角色管理</el-menu-item>
                        <el-menu-item index="1-2"> <i class="el-icon-printer"></i>菜单管理</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="4">
                    <i class="el-icon-office-building"></i>
                    <span slot="title">积云教育官网</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </div>
</template>
<script>
export default {
    data() {
        return {

        };
    },
    computed: {
        activeName() {
            return this.$route.name
        }
    },
    created() {
        console.log(this.$route);
    },
    methods: {

    }
}
</script>
<style scoped lang="scss">

</style>