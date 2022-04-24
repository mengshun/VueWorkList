<template>
  <div class="container">
    <!-- 标题 -->
    <p class="title">手机密码登录</p>
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
          :type="showPswType"
          placeholder="请输入密码"
          v-model="loginData.smsCode"
          @focus="smsCodeFocus"
          @blur="smsCodeEnded"
        />
        <button @click="showPswAction" class="fetchCode">
          {{ showPsw ? "隐藏密码" : "显示密码" }}
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
      :disabled="!isLoginButtonEnable"
      :class="isLoginButtonEnable ? 'loginButtonEnable' : 'loginButtonDis'"
    >
      登录
    </button>
    <!-- 密码登录按钮 -->
    <br />
    <div class="pswLoginContainer">
      <button @click="pswLogin" class="pswLoginBtn">
        验证码登录
        <img
          src="../assets/icon_pwd_login.png"
          alt="icon_pwd_login"
          style="width: 20px; height: 20px; margin-left: 3px"
        />
      </button>
    </div>
    <!-- 底部协议和 第三方登录 -->
    <thirdLogin class="third" hideProtocol="true"></thirdLogin>
  </div>
</template>

<script>
import thirdLogin from "../components/ThirdLogin.vue";
import axios from "axios";
import { encryptDes } from "../encryptTool.js";
export default {
  name: "LoginPws",
  components: {
    thirdLogin,
  },
  data() {
    return {
      loginData: {
        phone: "13605162851",
        smsCode: "123456",
        phoneIsEditing: false,
        smsCodeIsEditing: false,
      },
      showPsw: false, // 是否显式 密码
    };
  },
  computed: {
    // 登录按钮是否可用
    isLoginButtonEnable() {
      return (
        this.loginData.phone.length > 0 && this.loginData.smsCode.length > 0
      );
    },
    showPswType() {
      return this.showPsw ? "text" : "password";
    },
  },
  methods: {
    showPswAction() {
      console.log("点击了显示密码");
      this.showPsw = !this.showPsw;
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
      let params = {
        captcha: "",
        phone: this.loginData.phone,
        loginNo: this.loginData.phone,
        password: encryptDes(this.loginData.smsCode, "MOBCB123"),
        // password: "09cfa31cda5ab3c6",
        nameType: "crmcardcode",
        loginType: "crmcard",
        usermark: "DEJI9541VDKWPWIY1U4",
        isFromH5Login: 1,
        loginChacnel: "mportal_web",
        mallId: 11,
        tm: 1650780285,
        clientType: "liteApp",
        appVersion: "1.0",
        appUid: 0,
        osVersion: "IOS",
        source: "portal_web",
        appkey: "498CZZDC",
        deviceId: "JUBNTPJRFLOIA63",
      };
      axios
        .post(
          "https://o2osit.dejiplaza.com/dj-open-api/authentication/password",
          params
        )
        .then((res) => {
          console.log(res);
          if (res.data.code == 200) {
            this.$router.push({
              path: "/home",
            });
          } else {
            alert(res.data.msg);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    pswLogin() {
      window.history.go(-1); // 返回上一页 不刷新
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
  margin-right: 20px;
  height: 40px;
  width: 50%;
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
}
.loginButtonDis {
  background-color: lightgray;
}
.loginButtonEnable {
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
