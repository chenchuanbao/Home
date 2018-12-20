<template>
  <div class="homes">
    <!-- 著区域 -->
    <Headers></Headers>
    
    <div style="max-width: 1200px;margin: 50px auto">
        <router-view/>
     </div>
    <Footers></Footers>
</div>
</template>

<script>
import Headers from './Header'
import Footers from './Footer'	
export default {
  name: 'homes',
  data () {
    return {
    
    }
  },
  components:{
    Headers,
    Footers
  },
  methods:{
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

	
	 div img{
		width: 80px;
		border-radius: 50%;
		height: auto;
			
	}

	
	.iconfont{
		font-size: 16px;
	}
	 div span{
		display: inline-block;
		padding: 0 12px 0 0px;
	}
	

</style>
