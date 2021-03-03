<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="phone" label="电话" width="180"> </el-table-column>
      <el-table-column prop="email" label="邮箱地址"> </el-table-column>
    </el-table>
    <el-button type="warning" @click="logout">注销</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "张俊杰",
         phone: "12345678914",
          email: "1542237464@qq.com"
        },
        {
          name: "张俊杰",
         phone: "12345678914",
          email: "1542237464@qq.com"
        },
        {
          name: "张俊杰",
         phone: "12345678914",
          email: "1542237464@qq.com"
        },
        {
          name: "张俊杰",
         phone: "12345678914",
          email: "1542237464@qq.com"
        },
      ]
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
};
</script>
