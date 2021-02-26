<template>
<div>
<h2 align="center">个人信息表</h2>
<table style="border: 1px;margin: 0 auto;background: snow" width="50%" cellpadding="5" cellspacing="0" >
    <tr>
        <td>姓名</td>
        <td><input value="张俊杰" style="width:95%"></td>
        <td>性别</td>
        <td><select style="width: 96%">
            <option>男</option>
            <option>女</option>
        </select></td>
    </tr>
    <tr>
        <td>手机号码</td>
        <td><input value="xxx" type="tel" style="width:95%"></td>
        <td>电子邮箱</td>
        <td><input value="xx@163.com" type="email" style="width:95%"></td>
       <el-button type="warning"  @click="logout">注销</el-button>
    </tr>
</table>
</div>
</template>
<script>
    export default {
         methods: {
            logout () {
                this.$store.dispatch('logout').then(() => {
                    this.$router.replace('/login')
                })
            }
        },
        computed: {
            user () {
                return this.$store.state.user
            }
        }
    }
     
</script>