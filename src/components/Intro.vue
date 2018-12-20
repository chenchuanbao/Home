<template>
  <div class="intro about">
      <h3>基本信息：</h3>
      
      <span class="line"></span>
      <h3>个人项目：</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
  </div>
</template>

<script>
export default {
  name: 'intro',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.intro{

}
.about h3{
  text-align: left;
  padding: 1em 0;
  font-size: 1.2em;
}
.about p{
  font-size: 1.1em;
  line-height: 1.8em;
  text-align: left;
}
span.line{
  display: inline-block;
  width: 100%;
  color: #eee;
  margin-top: 0.5em;
  font-weight: normal;
  height: 1px;
  background: #eee
}
</style>
