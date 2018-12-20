<template>
  	<div class="manaside">
  		<el-row class="tac">
        <el-col :span="12" style="clear:both;width: 100%">
          <el-menu router 
            default-active="/manage"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
             <el-menu-item index="/manage">
              <i class="el-icon-menu"></i>
              <span slot="title">主页</span>
            </el-menu-item>
            <el-menu-item index="/editor">
              <i class="el-icon-edit-outline"></i>
              <span slot="title">发布</span>
            </el-menu-item>
            <el-menu-item index="/">
              <i class="el-icon-document"></i>
              <span slot="title">列表</span>
            </el-menu-item>
            <el-menu-item index="/">
              <i class="el-icon-setting"></i>
              <span slot="title">设置</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
   	    
   	    
	</div>
</template>

<script>

export default {
  name: 'manaside',
   data () {
    return {
      
    }
  },
  components:{
   
  },
  methods:{
  	 handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	

</style>
