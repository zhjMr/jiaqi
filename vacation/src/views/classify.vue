<template>
    <div>
        <!-- 查询封装 -->
        <query v-model.async="queryForm" :queryTable="queryTable" ref="clear">
            <template v-slot:slot_name="scope">
                <el-button type="primary" @click="onSubmitQuery" icon="el-icon-search">查询</el-button>
                <el-button @click="reset" icon="el-icon-refresh-left">重置</el-button>
                <el-button type="primary" icon="el-icon-circle-plus-outline" @click="queryAdd">新增</el-button>
            </template>
        </query>
        <!-- 表格封装 -->
        <TableTion :tableData="tableData" :column="column" :page="page" @handleCurrentChange="curren"
            @handleSizeChange="size"></TableTion>
    </div>
</template>
<script>
import classify from '../api/classify'
export default {
    components: {
        query: () => import('../components/query.vue'),
        TableTion: () => import('../components/TableTion.vue')
    },
    data() {
        return {
            tableData: [],//列表数据
            //表单
            queryForm: {
                name: "",
                status: "",
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
                    label: "分类名称",
                    prop: "name"
                },
                {
                    type: "select",
                    label: "状态",
                    prop: "status",
                    placeholder: "请选择"
                },
                {
                    type: "slot",
                    name: "slot_name",
                }
            ],
            //表格
            column: [
                {
                    type: "index",
                    label: "序号"
                },
                {
                    prop: "name",
                    label: "分类名称"
                },
                {
                    prop: "sort",
                    label: "排序"
                },
                {
                    prop: "remark",
                    label: "备注"
                },
                {
                    prop: "status",
                    label: "状态"
                },
                {
                    label: "操作",
                    type: "action",
                    actions: [
                        {
                            text: "编辑"
                        },
                        {
                            type: "danger",
                            text: "删除",
                            event: this.articleDel
                        },

                    ]
                },
            ]
        };
    },
    created() {
        this.classify()
    },

    methods: {
        //查询
        onSubmitQuery() {
            this.page.current = 1
            this.classify()
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
            this.classify()
        },
        //展示条数
        size(val) {
            this.page.size = val
            this.classify()
        },
        //删除
        articleDel(value) {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(async () => {
                const response = await classify.classifyDel(value.id)
                console.log(response, 'del');
                this.classify()
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
        //获取分类列表数据
        async classify() {
            try {
                const response = await classify.classifyList(this.page)
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