<template>
  <div class="administrator">
    <!-- 著区域 -->
    <el-container>
	  <el-header style="background-color: rgb(84, 92, 100);text-align: right; font-size: 12px">
	  	 
	  </el-header>
	  <el-container>
	    <el-aside width="160px" style="border-right:1px solid #eee">
	    	<Manaside></Manaside>

	    </el-aside>
	    <el-container>
	      <el-main style="padding: 25px;min-height: 600px">
	      	  <router-view/>
	      </el-main>
	      <el-footer style="background-color: rgb(84, 92, 100);line-height: 60px;color: #fff">
	      		版权所有：陈传宝
	      </el-footer>
	    </el-container>
	  </el-container>
	</el-container>
    
    
    <!-- <Footers></Footers> -->
</div>
</template>

<script>
import Manaside from './Manaside.vue'	
export default {
  name: 'administrator',
  data () {
    return {
    	
    }
  },
  components:{
   Manaside
  },
  mounted(){
  	this.initials()
  },
  methods: {
      initials(){
      	const blogkey = sessionStorage.getItem("blogkey"); 
      	if(blogkey){
      	this.$router.push('/article');
      	}else{
      		this.$router.push('/login');
      	}
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	*{
		margin: 0;
		padding: 0
	}
	.el-menu-item{
		padding-left: 0!important
	}
	.el-submenu .el-menu-item{
		padding: 0
	}
	.el-menu{
		border-right: none !important;
	}
</style>
