<template>
    <div>
        文章列表
    </div>
</template>
<script>
import article from '../api/index'
export default {
    data() {
        return {

        };
    },
    created() {
        this.article()
    },
    methods: {
        async article() {
            try {
                const response = await article.articleList()
                console.log(response);
            } catch (e) {
                console.log(e);
            }
        }
    }
}
</script>
<style scoped lang="scss">

</style>