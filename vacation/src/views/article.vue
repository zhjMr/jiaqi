<template>
    <div>
        <!-- 查询封装 -->
        <query v-model.async="queryForm" :queryTable="queryTable" ref="clear">
            <template v-slot:slot_name="scope">
                <el-button type="primary" @click="onSubmitQuery" icon="el-icon-search">查询</el-button>
                <el-button @click="reset" icon="el-icon-refresh-left">重置</el-button>
            </template>
        </query>
        <!-- 表格封装 -->
        <TableTion :tableData="tableData" :column="column" :page="page" @handleCurrentChange="curren"
            @handleSizeChange="size"></TableTion>
    </div>
</template>
<script>
import article from '../api/index'
import proTypes from '../enum/filter'
export default {
    components: {
        TableTion: () => import('../components/TableTion.vue'),
        query: () => import('../components/query.vue')
    },
    data() {
        return {
            queryForm: {
                title: "",
                status: "",
            },
            //查询数据
            queryTable: [
                {
                    type: "input",
                    label: "文章标题",
                    prop: "title",
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
            //表格数据
            tableData: [],
            //分页
            page: {
                current: 1,
                size: 10,
                total: 0,
            },
            //表格字段
            column: [
                {
                    type: "index",
                    label: "序号",
                },
                {
                    prop: "title",
                    label: "文章标题",
                },
                {
                    prop: "viewCount",
                    label: "浏览数",
                },
                {
                    prop: "thumhup",
                    label: "点赞数",
                },
                {
                    prop: "ispublic",
                    label: "是否公开",
                },
                {
                    prop: "status",
                    label: "状态",
                    formatter: (row, column, cellValue, index) => {
                        return proTypes.porType[row.status]
                    }
                },
                {
                    prop: "updateDate",
                    label: "最后更新时间",
                },
                {
                    type: "action",
                    label: "操作",
                    width: "300",
                    actions: [
                        {
                            text: "删除",
                            type: "danger",
                            event: this.articleDel
                        },
                        {
                            text: "查看",
                            type: "primary",
                            event: this.articleLook
                        },
                        {
                            text: "审核",
                            type: "success",
                            event: this.articleAudit
                        },
                    ]
                },
            ]
        };
    },
    created() {
        this.article()
    },
    methods: {
        //当前条数
        curren(val) {
            this.page.current = val
            this.article()
        },
        //展示条数
        size(val) {
            this.page.size = val
            this.article()
        },
        //重置
        reset() {
            this.$refs['clear'].queryFrom()
        },
        //查询
        onSubmitQuery() {
            this.page.current = 1
            this.article()
        },
        //删除
        articleDel(value) {

        },
        //查看
        articleLook(value) {


        },
        //审核
        articleAudit(value) {


        },
        //获取文章列表数据
        async article() {
            try {
                const response = await article.articleList(this.page)
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