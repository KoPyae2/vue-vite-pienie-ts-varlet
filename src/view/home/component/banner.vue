<template>
  <div class="banner_con">
    <var-swipe class="swipe-example">
      <var-swipe-item v-for="item in data" :key="item">
        <img class="swipe-example-image" :src="item" />
      </var-swipe-item>
    </var-swipe>
  </div>
</template>

<script lang="ts">
import { reactive } from "vue-demi";
import { PropType } from "vue";
export default {
  name: "Banner",
  props: {
    data: {
      default: () => {
        return [];
      },
      type: Array as PropType<string[]>,
    },
  },
  setup() {
    const state = reactive({});

    return {};
  },
};
</script>

<style lang="scss" scoped>
.banner_con {
  width: px2rem(800);
  height: px2rem(400);
  margin: 0 auto;
  margin-top: px2rem(30);
  border-radius: px2rem(20);
  overflow: hidden;
  .swipe-example {
    height: 100%;
  }

  .swipe-example-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }
}
</style>
