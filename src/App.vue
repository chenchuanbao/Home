<template>
  <div id="app">
     <router-view v-wechat-title='$route.meta.title'></router-view>
      
  </div>
</template>

<script>
 
export default {
  name: 'App',
   beforeCreate(){
   
  },
    
  mounted(){
    
  },
  methods:{
    init(){

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nprogress .bar {
      background: rgb(0, 127, 255) !important; 
    }
.markdown-body h2 {
    padding-bottom: 1.5em;
  }

*{
  margin: 0;
 padding: 0
}
a{
  text-decoration: none;
  color: #2c3e50;
}
/* 开始过渡阶段,动画出去阶段 */
.fade-enter-active,.fade-leave-active{
  transition: all 0.5s ease-out;
}
/* 进入开始 */
.fade-enter{
  transform: translateY(300px);
  opacity: 0;
}
/* 出去终点 */
.fade-leave-active{
  transform: translateY(-300px);
  opacity: 0;
}
#particles-js{
  position: fixed;
  top:0;
  bottom: 0;
  left: 0;
  right: 0

}
</style>
