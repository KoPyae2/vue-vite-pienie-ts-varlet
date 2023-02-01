<template>
  <div class="login_con">
    <div class="title">Login</div>
    <div class="form">
      <div class="custom_input">
        <p class="label">Username</p>
        <input type="text" v-model="username" />
      </div>
      <div class="custom_input">
        <p class="label">Password</p>
        <input type="password" v-model="password" />
      </div>
    </div>
    <button
      class="btn"
      :disabled="password == '' || username == ''"
      @click="loginFun"
    >
      Login
    </button>
    <var-popup :default-style="false" v-model:show="loginSucc">
      <var-result
        class="result"
        type="success"
        title="Success"
        :description="welcomMsg"
      >
        <template #footer>
          <var-button type="success" @click="CloseLoginSuccPop">OK</var-button>
        </template>
      </var-result>
    </var-popup>
  </div>
</template>

<script lang="ts">
import { nextTick, reactive } from "vue-demi";
import { toRefs } from "@vueuse/shared";
import { useRouter } from "vue-router";
import { userStore } from "../../store/user";
export default {
  name: "Login",
  setup() {
    const userStoreData = userStore();
    const router = useRouter();
    const state = reactive({
      username: "chico",
      password: "111111",
      snackbar: false,
      loginSucc: false,
      welcomMsg: "",
    });

    const loginFun = () => {
      // Snackbar["success"]("Login Success");
      // router.push("/");
      userStoreData.setUserData(state.username);
      state.welcomMsg = "Welcome " + state.username;
      state.loginSucc = true;
    };

    const CloseLoginSuccPop = () => {
      state.loginSucc = false;
      setTimeout(() => {
        router.push("/");
      }, 200);
    };

    return {
      ...toRefs(state),
      loginFun,
      CloseLoginSuccPop,
    };
  },
};
</script>

<style lang="scss" scoped>
.login_con {
  .title {
    height: px2rem(400);
    text-align: center;
    margin-top: px2rem(130);
    font-size: px2rem(80);
    font-weight: bold;
  }
  .form {
    margin: 0 auto;
    width: px2rem(600);
    .custom_input {
      width: 100%;
      margin-bottom: px2rem(30);
      .label {
        color: #fff;
        padding-bottom: px2rem(8);
        text-indent: px2rem(20);
      }
      input {
        background-color: green;
        width: px2rem(500);
        height: px2rem(80);
        background-color: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(1px);
        padding: 0 px2rem(50);
        border-radius: px2rem(60);
        color: #fff;
        font-size: px2rem(40);
      }
    }
  }
  .btn {
    width: px2rem(600);
    height: px2rem(80);
    background-color: #f9003e;
    display: block;
    margin: 0 auto;
    border-radius: px2rem(60);
    margin-top: px2rem(80);
    color: #fff;
    &:disabled {
      opacity: 0.5;
    }
  }
  :deep(.var-popup--center) {
    border-radius: px2rem(30);
    width: 80vw;
  }
}
</style>
