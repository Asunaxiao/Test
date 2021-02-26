<template>
  <div id="app">
    <el-container>
        <el-header class="header" height="150px">
          <h2>我是张俊杰，哈哈哈</h2>
          <h4>路由挑战</h4>
        </el-header>
      
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style >

  .header{
    background-color: #409EFF;
    color: white;
	text-align: center;
  }
  div,span,image{
		box-sizing: border-box;
	}
	#app{
		font-size: 20px;
	}

	.cube-input {
		padding: 1px 10px;
		font-size: .5rem;
	}

	.page {
		position: relative;
		width: 100%;
		height: 100vh;
		padding: 10px 15px 0;
	}

	.page .tab-bar {
		left: 0;
		position: absolute;
		bottom: 0;
		width: 100%;
		z-index: 999;
		font-size: 16px;
	}
</style>
