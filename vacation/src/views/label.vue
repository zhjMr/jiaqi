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
import label from '../api/label'
export default {
    components: {
        TableTion: () => import('../components/TableTion.vue'),
        query: () => import('../components/query.vue')
    },
    data() {
        return {
            tableData: [],//存放数据，
            queryForm: {
                name: "",
                categoryName: "",
            },
            page: {
                current: 1,
                size: 10,
                total: 0,
            },
            queryTable: [
                {
                    type: "input",
                    label: "标签名称",
                    prop: "name"
                },
                {
                    type: "select",
                    label: "分类名称",
                    prop: "categoryName",
                    placeholder: "请选择"
                },
                {
                    type: "slot",
                    name: "slot_name",
                }
            ],
            column: [
                {
                    type: "index",
                    label: "序号"
                },
                {
                    prop: "name",
                    label: "标签名称"
                },
                {
                    prop: "categoryName",
                    label: "分类名称"
                },
                {
                    type: "action",
                    label: "操作",
                    actions: [
                        {
                            text: "编辑",
                        },
                        {
                            type: "danger",
                            text: "删除",
                            event: this.labelDel
                        }
                    ]
                },
            ]
        };
    },
    created() {
        this.label()
    },
    methods: {
        //查询
        onSubmitQuery() {
            this.page.current = 1
            this.label()
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
            this.label()
        },
        //展示条数
        size(val) {
            this.page.size = val
            this.label()
        },
        labelDel(value) {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(async () => {
                const response = await label.labelDel(value.id)
                console.log(response, 'del');
                this.label()
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
        //获取标签管理数据
        async label() {
            try {
                const response = await label.labelList(this.page)
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