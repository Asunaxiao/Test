<template>
  <div class="logindemo">
    <el-form ref="form" :model="user" :rules="rules" status-icon label-width="100px">
      <el-row type="flex" justify="center">
        <el-col :span="5">
          <el-form-item label-width="110px">
            <span>
              <font color="#B3D8FF" size="5">登录页面</font>
            </span>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="5">
          <el-form-item label="账户：" prop="name">
            <el-input v-model="user.name" size="small"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="5">
          <el-form-item label="密码：" prop="password">
            <el-input type="password" v-model="user.password" size="small"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="5">
          <el-form-item>
            <el-button type="primary" @click="submit">登录</el-button>
             <el-row type="flex" justify="center">
        <font color="pink" size="3">手机：12345678910<br>密码：zjj123456</font>
      </el-row>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>


<script>
  export default {
    name: 'logindemo',
    data() {
      return {
        user: {},
        rules: {
          name: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { min: 11, max: 11, message: '长度为11个字符', trigger: 'blur' }
          ],
          password: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        },
        { min: 8, max: 15, message: '密码长度应大于等于8个字符小于16个字符!', trigger: "blur" },
      {
        trigger: 'blur',
        validator: (rule, value, callback) => {
          var password = /(?![A-Z]*$)(?![a-z]*$)(?![0-9]*$)(?![^a-zA-Z0-9]*$)/
          console.log(password.test(value))
          if (!password.test(value)) {
            callback(new Error('密码必须由字母、数字组成!'))
          }
          else{
            callback()
          }
        } },
       ],
        },
      }
    },
    methods: {
      /*提交进行判断的函数 */
      submit() {
        this.$refs.form.validate((valid) => {//form是el-form 标签中ref="form"名称
          if (!valid) return
              this.$http.post('/api/login',this.user).then(res=>{
                    if(res.data.code===200){
                        //登录成功
                        this.$router.push('/info')
                     }else{
                        //登录失败
                        this.$message({
                         type: 'error',
                          message: '用户名或密码错误',
                         showClose: true
                       })
                        this.$router.push('/login')
                    }
                })
        })
      },
    },
  }
</script>

<style scoped>

</style>