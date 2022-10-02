<template>
    <div>
        <el-table :data="tableData" border>
            <template v-for="item in column">
                <!-- 全选处理 -->
                <el-table-column v-if="item.type =='selection'" :type="item.type" :label="item.label">
                </el-table-column>
                <!-- 序号处理 -->
                <el-table-column v-else-if="item.type=='index'" :type="item.type" :label="item.label">
                </el-table-column>
                <!-- 表格处理 -->
                <el-table-column :prop="item.prop" :label="item.label" v-else-if="!item.type">
                </el-table-column>
                <!-- 图片处理 -->
                <el-table-column :label="item.label" v-else-if="item.type=='image'">
                    <template v-slot="scope">
                        <img :src="scope.row[item.prop]" alt="">
                    </template>
                </el-table-column>
                <!-- 操作处理 -->
                <el-table-column :label="item.label" v-else-if="item.type=='action'" :width="item.width">
                    <template v-slot="scope">
                        <el-button size="mini" v-for="(ele,index) in item.actions" :key="index"
                            @click="ele.event(scope.row)" :type="ele.type">
                            {{ele.text}}
                        </el-button>
                    </template>
                </el-table-column>
            </template>
        </el-table>
        <!-- 分页处理 -->
        <div class="block">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="page.current" :page-sizes="pageSize" :page-size="page.size" :layout="layout"
                :total="page.total">
            </el-pagination>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        tableData: {
            type: Array,
            default: () => []
        },
        column: {
            type: Array,
            default: () => []
        },
        page: {
            type: Object,
            default: () => { }
        },
        pageSize: {
            type: Array,
            default: () => [10, 20, 30, 40, 50]
        },
        layout: {
            type: String,
            default: "total, sizes, prev, pager, next, jumper"
        }
    },
    data() {
        return {

        };
    },
    methods: {
        handleCurrentChange(value) {
            this.$emit('handleCurrentChange', value)
        },
        handleSizeChange(value) {
            this.$emit('handleSizeChange', value)
        },
    }
}
</script>
<style scoped lang="scss">
.el-table {
    width: 95%;
    margin: auto;

    img {
        width: 100px;
        height: 50px;
    }
}
</style>