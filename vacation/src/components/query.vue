<template>
    <div>
        <el-form :inline="true" :model="value" class="demo-form-inline" ref="queryFrom">
            <template v-for="item in queryTable">
                <el-form-item :label="item.label" v-if="item.type=='input'" :prop="item.prop">
                    <el-input v-model="value[item.prop]"></el-input>
                </el-form-item>
                <el-form-item :label="item.label" v-else-if="item.type=='select'" :prop="item.prop">
                    <el-select v-model="value[item.prop]" :placeholder="item.placeholder">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item :prop="item.prop">
                    <slot :name="item.name"></slot>
                </el-form-item>
            </template>

        </el-form>
    </div>
</template>
<script>
export default {
    props: {
        value: {
            type: Object,
            default: () => { }
        },
        queryTable: {
            type: Array,
            default: () => []
        }
    },
    data() { 
        return {

        };
    },
    methods: {
        queryFrom() {
            this.$refs['queryFrom'].resetFields()
        }
    }
}
</script>
<style scoped lang="scss">
.demo-form-inline {
    padding-top: 20px;
}
</style>