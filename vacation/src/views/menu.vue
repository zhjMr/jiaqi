<template>
    <div>
        <TableTion :tableData="tableData"></TableTion>
    </div>
</template>
<script>
import menu from '../api/menu'
export default {
    components: {
        TableTion: () => import('../components/TableTion.vue')
    },
    data() {
        return {
            tableData: [],//角色列表数据
        };
    },
    created() {
        this.menu()
    },
    methods: {
        //获取角色列表数据
        async menu() {
            try {
                const response = await menu.menuList()
                console.log(response);
                this.tableData = response.data.data
            } catch (e) {
                console.log(e);
            }
        }
    }
}
</script>
<style scoped lang="scss">

</style>