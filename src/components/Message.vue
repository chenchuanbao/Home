<template>
  <div class="message">
      <el-form>
		  <el-input v-model="msgtit"></el-input>
		  <el-input type="textarea" v-model="msgcon"></el-input>
		  <el-button  row='30' type="primary" @click="submitForm">提交</el-button>
		</el-form>
  </div>
</template>

<script>
export default {
  name: 'message',
  data () {
    return {
     msgtit:'',
     msgcon:''
    }
  },
  methods:{
  	submitForm(){

  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.message{
	position: absolute;
  	top: 20%;
  	width: 50%;
  	left: 25%
}
.el-input{
	margin-bottom: 12px;
}
.el-button{
	width: 100%;
	margin-top: 12px
}
</style>
