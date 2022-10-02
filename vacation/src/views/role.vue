<template>
    <div>
        <query v-model.async="queryForm" :queryTable="queryTable" ref="clear">
            <template v-slot:slot_name="scope">
                <el-button type="primary" @click="onSubmitQuery" icon="el-icon-search">查询</el-button>
                <el-button @click="reset" icon="el-icon-refresh-left">重置</el-button>
                <el-button type="primary" icon="el-icon-circle-plus-outline" @click="queryAdd">新增</el-button>
            </template>
        </query>
        <TableTion :tableData="tableData" :column="column" :page="page" @handleCurrentChange="curren"
            @handleSizeChange="size"></TableTion>
    </div>
</template>
<script>
import role from '../api/role'
export default {
    components: {
        query: () => import('../components/query.vue'),
        TableTion: () => import('../components/TableTion.vue')
    },
    data() {
        return {
            tableData: [],//角色列表数据
            queryForm: {
                name: "",
            },
            //分页
            page: {
                current: 1,
                size: 10,
                total: 0,
            },
            queryTable: [
                {
                    type: "input",
                    label: "角色名称",
                    prop: "name",
                    placeholder: "请选择"
                },
                {
                    type: "slot",
                    name: "slot_name",
                }
            ],
            column: [
                {
                    type: "selection",
                },
                {
                    type: "index",
                    label: "序号"
                },
                {
                    prop: "name",
                    label: "角色名称"
                },
                {
                    prop: "remark",
                    label: "备注"
                },
                {
                    type: "action",
                    label: "操作",
                    actions: [
                        {
                            text: "分配权限",
                            type: "primary"
                        },
                        {
                            text: "编辑",
                            type: "success"
                        },
                        {
                            text: "删除",
                            type: "danger",
                            event: this.roleDel
                        },
                    ]
                },
            ]
        };
    },
    created() {
        this.role()
    },
    methods: {
        //查询
        onSubmitQuery() {
            this.page.current = 1
            this.role()
        },
        //重置
        reset() {
            this.$refs['clear'].queryFrom()
        },
        //新增
        queryAdd() {

        },
        //当前条数
        curren(val) {
            this.page.current = val
            this.role()
        },
        //展示条数
        size(val) {
            this.page.size = val
            this.role()
        },
        //删除
        roleDel(value) {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(async () => {
                const response = await role.roleDel(value.id)
                console.log(response);
                this.role()
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        //获取角色列表数据
        async role() {
            try {
                const response = await role.roleList(this.page)
                console.log(response);
                this.tableData = response.data.data.records
                this.page.total = response.data.data.total
            } catch (e) {
                console.log(e);
            }
        }
    }
}
</script>
<style scoped lang="scss">

</style>