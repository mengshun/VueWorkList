<template>
  <div class="third_container">
    <div class="third_login_tip">更多登录方式</div>
    <div class="third_icons">
      <img @click="thirdAction(item)" v-for="item in thirdList" :key="item.tag" :src="item.icon" style="width: 50px; height: 50px; padding: 10px;" />
    </div>
    <br>
    <div v-if="!hideProtocol" class="third_login_tip">未注册德基广场会员的手机号, 登录时将自动注册; 且您注册/登录, 代表您已同意<a :href="userProtocol" style="text-decoration:none;">《用户协议》</a>、<a :href="privacyUrl" style="text-decoration:none;">《隐私政策》</a></div>
  </div>
</template>

<script>
export default {
  name: "thirdLogin",
  props: {
    hideProtocol: String
  },
  data() {
    return {
      userProtocol: "https://m.baidu.com",
      privacyUrl: "https://3g.qq.com",
      thirdList: [
        {
          name: "微信",
          icon: require("../assets/login_wechat.png"),
          tag: 0,
        },
        {
          name: "微博",
          icon: require("../assets/login_weibo.png"),
          tag: 1,
        },
        {
          name: "苹果",
          icon: require("../assets/apple_login.png"),
          tag: 2,
        },
      ],
    };
  },

  methods: {
    thirdAction(item) {
      console.log(item);
      alert(item.name);
    },
  },
};
</script>
<style>
.third_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.third_login_tip {
  font-size: 10px;
  color: gray;
}
.third_icons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
</style>
