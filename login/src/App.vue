<template>
  <div id="app">
    <img @click="jumpLogin" alt="Vue logo" src="./assets/logo.png">
    <helloWorld :msg="msg"/>
  </div>
</template>

<script>
import helloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    helloWorld
  },
  data() {
    return {
      msg: 'Welcome to Your Deji App'
    }
  },
  methods: {
    jumpLogin() {
      
    }
  },
}
</script>

<style >
*{margin:0;padding: 0;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#title {
  font-weight: bold;
  font-size: 50px;
  color: blueviolet;
  height: 30px;
  background-color: blanchedalmond;
}
</style>
