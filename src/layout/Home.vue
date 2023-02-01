<template>
  <div class="home_con">
    <router-view />
    <div class="footer">
      <var-bottom-navigation active-color="#ff0037" v-model:active="active">
        <var-bottom-navigation-item
          v-for="(item, index) in homeRoute.children"
          :key="index"
          @click="switchTab"
          :label="putName(item.name)"
          :icon="item.meta?.icon"
        />
        <!-- <var-bottom-navigation-item
          @click="switchTab"
          label="Video"
          icon="play-circle"
        />
        <var-bottom-navigation-item
          @click="switchTab"
          label="Account"
          icon="account-circle"
        /> -->
      </var-bottom-navigation>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, reactive, toRefs } from "vue-demi";
import { homeRoute } from "../router/routes/home";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
export default {
  setup() {
    const { t } = useI18n();
    const router = useRouter();
    const state = reactive({
      active: 0,
    });

    const switchTab = (idx: any) => {
      if (idx == state.active) return;
      let tab = homeRoute.children?.find((item, index) => {
        return index == idx;
      });
      router.push(tab!.path);
    };

    const putName = (name: any) => {
      return t(`home.${name}`);
    };

    const setCurrentTab = () => {
      let curRoute = router.currentRoute.value.path;
      let path = homeRoute.children?.findIndex((item) => {
        return item.path == curRoute;
      });
      state.active = path || 0;
    };

    onMounted(() => {
      setCurrentTab();
      console.log("--");
    });

    return {
      t,
      ...toRefs(state),
      homeRoute,
      switchTab,
      putName,
    };
  },
};
</script>

<style lang="scss">
.home_con {
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
  background: rgb(255, 138, 120);
  background: linear-gradient(
    180deg,
    rgba(255, 138, 120, 1) 0%,
    rgba(255, 65, 112, 1) 100%
  );

  .footer {
    width: 100%;
    position: absolute;
    bottom: 0;
    --bottom-navigation-item-active-background-color: transparent;
    .single_bar {
      display: flex;
      flex-direction: column;
      align-items: center;
      .tab_img {
        width: px2rem(150);
      }
    }

    .var-bottom-navigation {
      padding-top: px2rem(20);
    }
    .var-ripple {
      display: none;
    }
  }
}
</style>
