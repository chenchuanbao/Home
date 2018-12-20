<template>
  <div class="home" style="box-sizing: border-box;overflow: hidden;">
    <div style="width: 90%;left: 5%;text-align: right;display: table;position: fixed;top: 3%;z-index: 999">
          <!-- <span><router-link to="/reg">注册</router-link></span> -->
          <router-link v-show="iconshow" to="/" style="margin-bottom: 40px;float: right;">
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

        <router-link v-show="!iconshow" to="/reg" style="margin-bottom: 40px;float: right;">
            <el-dropdown>
            <span class="el-dropdown-link">
              注册 / 登入<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <!-- <el-dropdown-item>退出</el-dropdown-item> -->
              <el-dropdown-item>设置</el-dropdown-item>
            </el-dropdown-menu>
           </el-dropdown>
        </router-link>  

    </div>
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
    	:linesDistance="130"        
    	:moveSpeed="3"        
    	:hoverEffect="true"        
    	hoverMode="grab"        
    	:clickEffect="true"        
    	clickMode="push">
    </vue-particles>
    <!-- 著区域 -->
    <div class="mains">
    		
    		<div>
    			<img src="../assets/my.jpg">
    		</div>
    		<div style="padding: 30px 0">
    			<span class="iconfont icon-shouye"><router-link to="/article"> 博客</router-link> </span>
    			<span class="iconfont icon-GitHub"><a target="_blank" href="https://github.com/Chencb1991"> Github</a></span>
    			<span class="iconfont icon-fabu1"><router-link to="/"> 项目</router-link> </span>
    			<span class="iconfont icon-like"><router-link to="/"> 介绍</router-link> </span>
    		</div>
    		<div>
    			<span class="box" style="font-size: 15px;padding: 30px 0" v-html="mytit"></span>
    		</div>
    		<Footers></Footers>
    </div>
</div>
</template>

<script>
import Footers from './Footer'	
import NProgress from 'nprogress'	
export default {
  name: 'home',
  data () {
    return {
         i:0,
         text:"敢问路在何方, 路在脚下！",
         mytit:'',
         titles:'',
         timer:0,
         iconshow:false,
         blogname:''
    }
  },
  beforeCreate(){
    NProgress.start();
  },
    
  mounted(){
    NProgress.done();
    this.init();
    this.counts()
  },
  components:{
  Footers
  },
  methods:{
    init(){
      const blogkey = sessionStorage.getItem("blogkey");
      if(blogkey){
          this.iconshow=true;
          this.blogname=blogkey
        }else{
          this.iconshow=false
        }
    },
    counts(){       
       if (this.i <= this.text.length) {
          this.mytit = this.text.slice(0, this.i++) + '_'
          this.timer = setTimeout(this.counts, 300)
        }
        else {
          this.mytit = this.text//结束打字,移除 _ 光标
          clearTimeout(this.timer)
        }
      },
      loginout(){
        sessionStorage.removeItem("blogkey");
        this.init();
        this.$message('您已退出账号');
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.home{
	

}
	div.mains{
		position: fixed;
		width: 100%;	
		top: 0;
		bottom: 0;
		top: 260px;
        box-sizing: border-box;
		
	}
	div.mains div{
		width: 100%;
		text-align: center;
		
	}
	div.mains div img{
		width: 80px;
		border-radius: 50%;
		height: auto;
		
		
	}

	
	.iconfont{
		font-size: 16px;
	}
	div.mains div span{
		display: inline-block;
		padding: 0 12px 0 0px;
	}
	.footers{
        position: fixed;
        bottom: 0
    }

</style>
