<template>
  <div class="articles">
      <div class="section">
         <ul>
           <li v-for="(item,index) in lists">
             <router-link :to="'/note/'+item._id">
                <div>
                  <span style="color: #ff0000" v-if="index<2">New</span> <span>{{item.time}}</span>  - <span>笔记</span>
                </div> 
                <strong>{{item.title}}</strong>
                <div class="comment">
                  <span class="iconfont icon-appreciate_light"></span> <span class="comments">{{item.zan}}</span>
                  <span class="iconfont icon-comment_light"></span> <span class="comments">{{item.view}}</span>
                </div>
             </router-link>
           </li>

<!-- 
           <li>
             <router-link to='/'>
                <div>
                  <span style="color: #ff0000">New</span> <span>2018-11-09</span>  - <span>笔记</span>
                </div> 
                <strong>月下载量千万的 npm 包被黑客篡改，Vue 开发者可能正在遭受攻击</strong>
                <div class="comment">
                  <span class="iconfont icon-appreciate_light"></span> <span class="comments">99</span>
                  <span class="iconfont icon-comment_light"></span> <span class="comments">99</span>
                </div>
             </router-link>
           </li> -->




         </ul>
      </div>
  </div>
</template>

<script>
import NProgress from 'nprogress'
export default {
  name: 'articles',
  data () {
    return {
     lists:[]
    }
  },
  mounted(){
    this.ins();
  },
  methods:{
    ins(){
       //初始查找
       NProgress.start(); 
       this.$axios.get('/api/note')
          .then((res)=>{
            NProgress.done();
            console.log(res);
              this.lists = res.data
          })
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.articles{
  max-width: 1200px;
  margin: auto;
  padding: 15px;
  font-size: 14px;
}
ul{
  list-style: none;
}

ul li{
  border-bottom: 1px solid #eee;
  padding: 5px 0;
}

ul li a strong{
  display: inline-block;
  width: 100%;
  font-size: 1.2em;
  color: #2e3135;
  font-weight: 600;
  padding: 4px 0
}
ul li a div{
  text-align: left;
}
ul li a span{
  font-size: 12px;
  display: inline-block;
  margin: 4px 6px;
}
ul li a span:first-child{
  margin-left: 0
}
ul li a{
  text-align: left;
}

@media screen and (min-width: 641px){
    ul li a strong{
    display: inline-block;
    width: 100%;
    font-size: 1.2em;
    color: #2e3135;
    font-weight: 600
  }
  .icon-appreciate_light,.icon-comment_light{
    font-size: 1.4em;
  }
  .comments{
    position: relative;top: -2px;left: -8px;
  }
}

@media screen and (max-width: 640px){
    ul li a strong{
    display: inline-block;
    width: 100%;
    font-size: 1em;
    color: #2e3135;
    font-weight: 600
  }
   .icon-appreciate_light,.icon-comment_light{
    font-size: 1.1em;
  }
   .comments{
    position: relative;top: -1px;left: -8px;
  }
}


</style>
