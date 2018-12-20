<template>
  	<div class="manage">
  		  <el-row :gutter="12">
          <el-col :span="8">
            <el-card shadow="hover">
              总是显示
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover">
              鼠标悬浮时显示
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover">
              从不显示
            </el-card>
          </el-col>
        </el-row>
           	    
	  </div>
</template>

<script>

export default {
  name: 'manage',
  data () {
    return {
    
    }
  },
  components:{
   
  },
  methods:{
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
	

</style>
