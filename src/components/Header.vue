<template>
  <div class="headers">
  	<div style="max-width: 1200px;margin: auto;padding: 0 15px">
  		
     	<router-link to="/" style="color:#007fff;font-weight: bold;">HERO</router-link>
        <router-link to="/article" >笔记</router-link>
        <router-link to="/" >杂谈</router-link>
        <!-- <router-link to="/intro" >介绍</router-link> -->
        <router-link to="/" style="float: left;">留言</router-link>
        <router-link to="/">项目</router-link>

        <input v-model="key" class="sforms" type="svalue" name="" placeholder="Enter" @keyup.enter="search"><span class="iconfont icon-sousuo"></span>

        <router-link v-show="iconshow" to="/login" style="margin-bottom: 40px;float: right;">注册 / 登入</router-link>
        <router-link v-show="!iconshow" to="/" style="margin-bottom: 40px;float: right;">
        	<el-dropdown>
				  <span class="el-dropdown-link">
				    {{blogname}}<i class="el-icon-arrow-down el-icon--right"></i>
				  </span>
				  <el-dropdown-menu slot="dropdown">
				    <el-dropdown-item> <span @click="loginout">退出</span></el-dropdown-item>
				    <el-dropdown-item>设置</el-dropdown-item>
				  </el-dropdown-menu>
				</el-dropdown>
        </router-link>
  	</div>
        
  </div>
</template>

<script>
export default {
  name: 'headers',
  data () {
    return {
      iconshow:true,
      blogname:'',
      key:''
    }
  },
  mounted(){
  	this.initials()
  },
  methods:{
  	 initials(){
      	const blogkey = sessionStorage.getItem("blogkey"); 
      	if(blogkey){
      		this.iconshow=false;
      		this.blogname=blogkey
      	}else{
      		this.iconshow=true;
      	}
      },
      loginout(){
      	sessionStorage.removeItem('blogkey');
      	this.initials();
      	this.$message('您已退出账号');
      },
      search(){
  		 if(!this.key==''){
	  		 	this.$axios.get('/api/so',{title:this.key})
	           .then((res)=>{
	            console.log(res);
	         
	          })
  		 }
  		}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
	
	
	@media screen and (max-width: 640px){
		.headers a{
			display: inline-block;
			text-align: center;
			float: left;
			line-height: 40px;
			box-sizing: border-box;
			padding: 0 8px;
			font-size: 12px;
			}
		.headers{
	     position: fixed;
	     width: 100%;
	     left: 0;
	     top: 0;
	     bottom: 0;
	     background: #fff;
	     z-index: 999;
	     box-sizing: border-box;
	     height: 40px;
	     border-bottom: 1px solid #eee;
	     box-shadow: 2px 0 2px #eee
		}
		.sforms{
	   		display: none; 
		}
		.icon-sousuo{
		display: none;
		}
	}
	@media screen and (min-width: 641px){
		.headers a{
			display: inline-block;
			text-align: center;
			float: left;
			line-height: 50px;
			box-sizing: border-box;
			padding: 0 16px;
			}
		.headers{
	     position: fixed;
	     width: 100%;
	     left: 0;
	     top: 0;
	     bottom: 0;
	     background: #fff;
	     z-index: 999;
	     box-sizing: border-box;
	     height: 50px;
	     border-bottom: 1px solid #eee;
	     box-shadow: 2px 0 2px #eee
		}
		.sforms{
	    background-color: #fff;
	    background-image: none;
	    border-radius: 4px;
	    border: 1px solid #dcdfe6;
	    box-sizing: border-box;
	    color: #606266;
	    display: inline-block;
	    font-size: inherit;
	    height: 32px;
	    line-height: 32px;
	    margin-top: 9px;
	    outline: none;
	    padding: 0 35px;
	    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
	    font-size: 14px
		}

		.icon-sousuo{
		display: inline-block;
		width: 32px;
		height: 32px;
		position: relative;
		left: -35px;
		cursor: pointer;
	}
	}
	
</style>
