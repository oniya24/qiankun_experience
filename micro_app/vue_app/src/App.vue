<template>
  <div id="app">
    这里是全局变量: {{ state }}
    <el-button @click="handleGlobalStateChange">更改全局变量</el-button>
    <el-menu class="el-menu-demo" mode="horizontal">
      <el-menu-item index="display"><router-link to="/display">dispaly</router-link></el-menu-item>
      <el-menu-item index="category" ><router-link to="/category">category</router-link></el-menu-item>
      <el-menu-item index="detail"><router-link to="/detail">detail</router-link></el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      state: null
    }
  },
  methods: {
    handleGlobalStateChange() {
      this.$store.dispatch({type: 'Save', payload: { age: '13546' }})
    }
  },
  mounted () {
    this.state = this.$store.getState();
    this.$store.subscribe(()=>{
      console.log("vue app", this.$store.getState())
      this.state = this.$store.getState()
    })
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
