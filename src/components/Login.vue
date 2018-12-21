<template>
  <div class="login">
     <vue-particles  
    	color="#dedede"    
    	:particleOpacity="0.7"        
    	:particlesNumber="80"        
    	shapeType="circle"        
    	:particleSize="4"        
    	linesColor="#dedede"        
    	:linesWidth="1"        
    	:lineLinked="true"        
    	:lineOpacity="0.4"        
    	:linesDistance="150"        
    	:moveSpeed="3"        
    	:hoverEffect="true"        
    	hoverMode="grab"        
    	:clickEffect="true"        
    	clickMode="push">
    </vue-particles>	
    <div class="mains">
    	<div style="position: absolute;top: 50px;width: 90%;left: 5%;text-align: right;">
    		<span class="iconfont  icon-back_android_light" style="float: left;"><router-link to="/"> 返回首页</router-link></span>
			<!-- <span><router-link to="/reg">注册</router-link></span>
			<span><router-link to="/login">登入</router-link></span> -->
		</div>

		
    	<el-form  ref="form" :model="form">
    		<div style="margin-bottom: 40px;">
				<span class="" style="font-size: 30px;color: rgb(0, 127, 255)">Hero</span>
			</div>
		   <el-input v-model="form.uname"></el-input>	 
		   <el-input v-model="form.password"></el-input>
		   <el-button type="primary" @click="onSubmit">登入</el-button>
		</el-form>
		<router-link to="/reg" style="margin-top: 20px;display: inline-block;"> <span class="iconfont icon-fabu"></span> 注册</router-link>
    </div>
  </div>
</template>

<script>
import NProgress from 'nprogress'
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'login',
  data () {
    return {
     form:{
     		uname:'',
     		password:''
     	}
    }
  },
  beforeCreate(){
    NProgress.start();
  },
    
  mounted(){
    NProgress.done();
   
  },
  methods:{
  	onSubmit(){
  			var _this = this;
  			var data = qs.stringify({
                   uname:this.form.uname, 
                   //password:this.form.password
                 
              });
  		  	 if(this.form.uname&&this.form.password){
  		  	 	this.$axios.post('/api/login',data)
	  		  	.then((res)=>{
	                  // console.log(res.data[0].password);
	                  	console.log(res.data);
	                   if(res.data==null){
	                   	  this.$message.error('不存在的账号和密码');
	                   }else{
	                   	   if(res.data==this.form.password){
	                   		this.$message({
					          message: '恭喜登陆成功',
					          type: 'success'
					        });
					        sessionStorage.setItem("blogkey", this.form.uname);
					        this.$router.push('/article');
		                    
		                   }else{
		                   	  this.$message.error('不存在的账号和密码');
		                   	  _this.form.uname=null;
		                   	  _this.from.password=null
		                   }
	                   }
	                  
	                   
	                     
	                })
	  		  	.catch(function (error) {
	              });  
	  		  	 }else{
	  		  	 	 this.$message.error('请正确填写账号和密码');
	  		  	 }
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	div.mains{
		position: fixed;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		top: 0;
		bottom: 0;
		padding-top: 220px;
		overflow: hidden;
	}
	.el-form{
		width: 360px;
		margin: auto;
		background: #fff;
		padding: 20px;
		border-radius: 5px;
	}
	.el-button{
		width: 100%;
	}
	.el-input{
		margin-bottom: 22px;
	}
	div.mains div span{
		display: inline-block;
		padding: 0 12px 0 0px;
	}
</style>
