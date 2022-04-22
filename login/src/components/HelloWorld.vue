<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input v-model="msg" />
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a>
    </p>
    <div>
    </div>
    <button @click="addTimer">开始插入时间</button>
    <ol class="list">
      <li v-for="item in list" :key="item">{{ item }}</li>
    </ol>
    
  </div>
</template>

<script>
export default {
  name: "helloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      timer: null,
      list: []
    }
  },
  methods: {
    addTimer() {
      console.log("点击了按钮");
      if (this.timer === null) {
        this.timer = setInterval(() => {
          this.list.push(new Date().toLocaleString())
        }, 1000)
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

</style>
