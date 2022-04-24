<template>
  <div class="home">
    <div class="inputContainer">
      <img src="../assets/icon_pwd_login.png" alt="输入图标" class="icon" />
      <input type="text" placeholder="输入文字" class="input" />
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>

<style>
* {
  display: flex;
}
.home {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: antiquewhite;
  flex-direction: column;
  align-items: flex;
}
.inputContainer {
  height: 50px;
  /* width: 80%; */
  background-color: aquamarine;
  align-items: center;
  margin: 10px;
}
.icon {
    margin-left: 10px;
  width: 30px;
  height: 30px;
}
.input {
  margin-left: 10px;
  height: 30px;
  width: calc(100% - 60px);
  border: 0;
  outline-style: none;
}
</style>
