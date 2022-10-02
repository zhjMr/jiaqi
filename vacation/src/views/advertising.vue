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
import advertising from '../api/advertising'
export default {
    components: {
        query: () => import('../components/query.vue'),
        TableTion: () => import('../components/TableTion.vue')
    },
    data() {
        return {
            tableData: [], //广告类表数据
            queryForm: {
                status: "",
                title: "",
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
                    label: "广告标题",
                    prop: "title"
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
            column: [
                {
                    type: 'index',
                    label: "序号"
                },
                {
                    prop: "title",
                    label: "广告标题"
                },
                {
                    type: "image",
                    prop: "imageUrl",
                    label: "广告图片",
                },
                {
                    prop: "advertTarget",
                    label: "广告链接"
                },
                {
                    prop: "status",
                    label: "广告状态"
                },
                {
                    prop: "sort",
                    label: "广告排序"
                },
                {
                    type: 'action',
                    label: "操作",
                    actions: [
                        {

                            text: "编辑"
                        },
                        {
                            type: "danger",
                            text: "删除",
                            event: this.advertisingDel
                        },
                    ]
                },
            ]
        };
    },
    created() {
        this.advertising()
    },
    methods: {
        //查询
        onSubmitQuery() {
            this.page.current = 1
            this.advertising()
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
            this.advertising()
        },
        //展示条数
        size(val) {
            this.page.size = val
            this.advertising()
        },
        //删除
        async advertisingDel(value) {
            try {
                const response = await advertising.advertisingDel(value.id)
                console.log(response);
                this.$message.success('删除成功')
                this.advertising()
            } catch (e) {
                console.log(e);
            }

        },
        //获取广告列表数据
        async advertising() {
            try {
                const response = await advertising.advertisingList(this.page)
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