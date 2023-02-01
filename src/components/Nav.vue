<template>
  <div class="nav_con">
    <var-app-bar :title="title" title-position="center">
      <template #left>
        <var-button color="transparent" round text v-if="leftarrow">
          <var-icon @click="GoBack" name="chevron-left" :size="24" />
        </var-button>
        <slot></slot>
      </template>
      <template #right v-if="!rightslot">
        <slot></slot>
      </template>
    </var-app-bar>
  </div>
</template>

<script lang="ts">
import { reactive } from "vue-demi";
import { toRefs } from "@vueuse/shared";
import { defineProps, onMounted } from "vue";
export default {
  name: "navbar",
  props: {
    title: {
      default: "",
      type: String,
    },
    leftarrow: {
      default: () => {
        return true;
      },
      type: Boolean,
    },
    rightslot: {
      default: () => {
        return "";
      },
      type: Boolean,
    },
  },

  setup(props) {
    const state = reactive({});
    const GoBack = () => {
      console.log("Back");
      window.history.go(-1);
    };

    onMounted(() => {});
    return { ...toRefs(state), GoBack };
  },
};
</script>

<style lang="scss" scoped>
.nav_con {
  .var-app-bar {
    background-color: #fff;
    color: #000;
  }
  .var-app-bar__title {
    font-weight: bold;
  }
  :deep(.var-app-bar__title) {
    font-weight: bolder;
  }
}
</style>
