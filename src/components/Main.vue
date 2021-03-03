<template>
    <div class="wraper">
        <h1>请登录</h1>      
     <el-button  type="success" @click="login">点击登录</el-button>
    </div>
</template>

<script>
    export default {
        methods: {
            login () {
                this.$router.push('/login')
            },
        },
        computed: {
            user () {
                return this.$store.state.user
            }
        }
    }
</script>
<style  scoped>
 .wraper{
   text-align: center;
   
} 

</style>