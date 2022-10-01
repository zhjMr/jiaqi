<template>
    <div>
        <div class="box">我是主体页面头部的内容</div>
          <router-view></router-view>
    </div>
</template>
<script>
export default {
    data () {
        return {
    
        };
    },
    methods:{
    
    }
}
</script>
<style scoped lang="scss">
    .box{
     width: 100%;
     height: 50px;
     border-bottom: 2px solid #ccc;
     line-height: 50px;
    }
</style>