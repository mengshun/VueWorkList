<template>
  <div class="container">
    <!-- 标题 -->
    <p class="title">手机验证码登录</p>
    <!-- 手机号和短信验证码输入框 -->
    <div class="inputContainer">
      <div class="inputSubContainer">
        <img class="inputicon" src="../assets/icon_phone.png" />
        <input
          class="inputTextField"
          type="text"
          placeholder="请输入手机号"
          v-model="loginData.phone"
          @focus="phoneFocus"
          @blur="phoneEnded"
        />
      </div>
      <div
        class="line"
        :class="{selectLine: loginData.phoneIsEditing}"
      ></div>
      <div class="inputSubContainer">
        <img class="inputicon" src="../assets/icon_sms_code.png" />
        <input
          class="inputTextField"
          type="number"
          placeholder="请输入短信验证码"
          v-model="loginData.smsCode"
          @focus="smsCodeFocus"
          @blur="smsCodeEnded"
        />
        <button @click="fetchSMSCode" class="fetchCode">
          {{ cutDownTime > 0 ? cutDownTime : "获取验证码" }}
        </button>
      </div>
      <div
        class="line"
        :class="{selectLine: loginData.smsCodeIsEditing}"
      ></div>
    </div>
    <!-- 登录按钮 -->
    <br />
    <button
      class="loginButton"
      @click="loginAction"
      :disabled="!isActive"
      :class="{loginButtonActiveColor: isActive}"
    >
      登录
    </button>
    <!-- 密码登录按钮 -->
    <br />
    <div class="pswLoginContainer">
      <button @click="pswLogin" class="pswLoginBtn">
        密码登录
        <img
          src="../assets/icon_pwd_login.png"
          alt="icon_pwd_login"
          style="width: 20px; height: 20px; margin-left: 3px"
        />
      </button>
    </div>
    <!-- 底部协议和 第三方登录 -->
    <thirdLogin class="third"></thirdLogin>
  </div>
</template>

<script>
import thirdLogin from "../components/ThirdLogin.vue";

export default {
  name: "LoginPhone",
  components: {
    thirdLogin,
  },
  data() {
    return {
      loginData: {
        phone: "",
        smsCode: "",
        phoneIsEditing: false,
        smsCodeIsEditing: false,
      },
      cutDownTime: 0, // 倒计时
    };
  },
  computed: {
    // 登录按钮是否可用
    isActive() {
      return (
        this.loginData.phone.length > 0 && this.loginData.smsCode.length > 0
      );
    },
  },
  methods: {
    fetchSMSCode() {
      if (this.cutDownTime > 0) {
        let msg = "请等待" + this.cutDownTime + "秒后再试";
        console.log(msg);
        alert(msg);
        return;
      }
      this.cutDownTime = 10;
      let timer = setInterval(() => {
        this.cutDownTime--;
        console.log("倒计时 ", this.cutDownTime);
        if (this.cutDownTime <= 0) {
          this.cutDownTime = 0;
          clearInterval(timer);
        }
      }, 1000);
    },
    phoneFocus() {
      this.loginData.phoneIsEditing = true;
    },
    phoneEnded() {
      this.loginData.phoneIsEditing = false;
    },
    smsCodeFocus() {
      this.loginData.smsCodeIsEditing = true;
    },
    smsCodeEnded() {
      this.loginData.smsCodeIsEditing = false;
    },
    loginAction() {
      let msg =
        "你输入的账号: " +
        this.loginData.phone +
        " 密码: " +
        this.loginData.smsCode;
      alert(msg);
    },
    pswLogin() {
      console.log("密码登录");
      window.location.href = "./loginpsw";
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.container {
  display: flex;
  margin: 0 10px;
  flex-direction: column;
}
.title {
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
}
.inputContainer {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}
.inputSubContainer {
  height: 50px;
  display: flex;
  align-items: center;
}
.inputicon {
  width: 25px;
  height: 25px;
}
.inputTextField {
  border: 0;
  margin-left: 10px;
  right: 20px;
  height: 40px;
  width: 60%;
  font-size: 16px;
}
.inputTextField::placeholder {
  color: lightgray;
  font-size: 14px;
}
.inputTextField:focus {
    outline-style: none;
}
.line {
  background-color: lightgray;
  height: 1px;
  margin: 0;
}
.selectLine {
  background-color: black;
}
.loginButton {
  color: white;
  border-color: none;
  border-width: 0;
  border-radius: 20px;
  height: 40px;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  background-color: lightgray;
}
.loginButtonActiveColor {
  background-color: black;
}
.fetchCode {
  display: flex;
  position: absolute;
  font-size: 12px;
  color: gray;
  background-color: white;
  padding: 5px 0px;
  width: 80px;
  border-radius: 5px;
  justify-content: center;
  border: 1px solid lightgray;
  right: 20px;
}
.pswLoginContainer {
  display: flex;
  width: 100%;
  height: 30px;
  justify-content: center;
}
.pswLoginBtn {
  padding-left: 20px;
  padding-right: 20px;
  border-color: white;
  background-color: white;
  border: 0;
  border-radius: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: 10px;
}
.third {
  display: flex;
  position: absolute;
  bottom: 30px;
  left: 20px;
  right: 20px;
}
</style>
