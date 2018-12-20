<template>
  	<div class="editor">
  		<el-form ref="form" :model="form">
  			<el-input v-model="form.title" placeholder="标题"></el-input>
  			<!-- <el-form-item> -->
		     <el-select style="width: 100%;margin-top: 20px" v-model="form.clssify" placeholder="请选择分类">
			    <el-option
			      v-for="item in options"
			      :key="item.clssify"
			      :label="item.label"
			      :value="item.clssify">
			    </el-option>
			  </el-select>
  			</el-form-item>
  			<mavon-editor style="min-height: 500px" v-model="form.detail"/>
  			 <el-button type="primary" @click="onSubmit">发布</el-button>
  		</el-form>
   	    
   	    
	</div>
</template>

<script>
  import axios from 'axios'
  import qs from 'qs'
export default {
  name: 'editor',
  data () {
    return {
    	form:{
    		clssify:'',
	    	title:'',
	    	detail: '',
	    	zan:9,
	    	view:29	
    	},
    	options: [{
          clssify: '1',
          label: '笔记'
        }, {
          clssify: '2',
          label: '互联网'
        }, {
          clssify: '3',
          label: '杂谈'
        }]
       
       
    }
  },
  components:{
  
  },
   mounted(){
   
  },
  methods:{
  	onSubmit(){
  		//console.log(this.form.title,this.form.clssify,this.form.detail);
  		 	var data = qs.stringify({
                   title:this.form.title, 
                   clssify:this.form.clssify,
                   detail:this.form.detail,
			             zan:this.form.zan,
			             view:this.form.view
              });
  		    this.$axios.post('/api/note',data)
  		  	.then((res)=>{
                   console.log(res);
                   this.form.title=='',
                   this.from.detail==''
                     
                })
  		  	.catch(function (error) {
              });
              
  			}



	  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.el-button{
		width: 230px;
		float: left;
		margin-top: 20px;
	}
	.editor{
		width: 80%
	}

</style>
