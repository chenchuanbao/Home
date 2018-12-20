<template>
  <div class="note">
     <!--  <h1>{{content.title}}</h1> -->
      <div v-if="content.title==undefined" v-wechat-title="'陈传宝博客'"></div>
      <div v-else v-wechat-title="content.title+'-陈传宝博客'"></div>
      <div class="passage">
          <div class="content markdown-body" v-html="con"></div>
      </div>
     

      <div style="margin-top: 3em;text-align: center;max-width: 800px;font-size: 1.1em;padding: 1em 0;color: #8a9aa9">
        评论
      </div>
      <div class="commnets">
          <input type="" name="" placeholder="输入评论 （Enter输入）" @keyup.enter="tomsg">
         <!-- <button>提交</button> -->
      </div>
      <div class="commlist">
          <ul>
             <li v-for="(item,index) in commentlist">
                <span>{{item.comname}}</span> 
                <div>
                  <p>
                    {{item.comcon}}
                  </p>
                </div>
                <span class="ctime">{{item.ctime}}</span> 
                <span class="iconfont icon-comment_light" @click="replay(index)"></span> 
                <span class="czan">{{item.czan}}</span>
                <span class="iconfont icon-appreciate_light"></span> 
                <div class="commnets" style="margin: 0.5em 0" v-if="visshow">
                    <input type="" name="" placeholder="输入评论 （Enter输入）" @keyup.enter="tomsg">
                   <!-- <button>提交</button> -->
                </div> 
            </li>
          </ul>

      </div>
  </div>
</template>

<script>
import marked from 'marked'
import NProgress from 'nprogress'
export default {
  name: 'note',
  data () {
    return {
     visshow:false,
     commentlist:[
      {
        comname:'真心英雄',
        comcon:'月下载量千万的 npm 包被黑客篡改',
        ctime:'3分钟前',
        czan:99
      },
       {
        comname:'真心英雄',
        comcon:'月下载量千万的 npm 包被黑客篡改',
        ctime:'3分钟前',
        czan:99
      }
     ],
     content:[],
     con:''
    }
  },
  mounted(){
    var reg=/\/note\/(\w+)/;
    var id = this.$route.path.match(reg)[1];
    //console.log(id);
    this.initial(id);
  },
  methods:{
    tomsg(){
      alert(1)
    },
    replay(index){
      this.visshow=!this.visshow;
      console.log(index)
    },
    initial(id){
      NProgress.start();
      this.$axios.get('/api/note/'+id)
          .then((res)=>{
            NProgress.done();
                 console.log(res);  
                 this.content=res.data;
                 this.con = marked(res.data.detail);     
                })
          .catch(function (error) {
              });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#-tabbar-{
  padding: 20px 0
}
/*@import '../../static/github-markdown.css';*/
.passage{
  padding: 20px 0
}
.note{
  max-width: 1200px;
  margin: auto;
  padding: 15px;
  font-size: 14px;

}
.iconfont{
  cursor: pointer;
  float: right;
}
.ctime{
  color: #8a9aa9
}
.czan{
  color: #8a9aa9;
  float: right;
  position: relative;
  left: -10px;
  top: 2px;
}
.note h1{
  font-size: 1.8em;
  padding: 1em 0;
  text-align: left;
}
.content{
  text-align: left;
}

@media screen and (min-width: 641px){
   .note h1{
    font-size: 1.8em;
    padding: 1em 0;
    text-align: left;
  }
}
@media screen and (max-width: 640px){
   .note h1{
    font-size: 1.4em;
    padding: 1em 0;
    text-align: left;
  }
}
.commnets{
    
    padding: 1em 1em;
    background-color: #fafbfc;
    border-radius: 3px;
    max-width: 800px;
}
.commlist{
  padding: 1em 1em;
    border-radius: 3px;
    max-width: 800px;
    margin-top: 1em
}
.commnets input{
  background-color: #fff;
    border: 1px solid #f1f1f1;/*#007fff*/
    border-radius: 3px;
    height: 32px;
    line-height: 32px;
    width: 100%;
    outline: none;
    text-indent: 15px;
}
ul{
  list-style: none;
}
ul li{
  width: 100%;
  text-align: left;
  border-bottom: 1px solid #eee;
  padding: 0.5em 0
}
ul li span{
  color: #333;
  display: inline-block;
  margin-right: 1em;
}
ul li p{
  line-height: 1.8em;
  padding: 5px 0 8px 0;
  color: #505050;
}
.commnets button{
  font-size: 1.25rem;
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    font-size: 14px;
    padding: 5px 18px;
    border: none;
    border-radius: 3px;
    margin-top: 9px;
    cursor: pointer;
    float: right;
}

</style>
