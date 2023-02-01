<template>
  <Nav title="Detail" />
</template>

<script lang="ts">
import { reactive } from "vue-demi";
import { toRefs } from "@vueuse/shared";
import Nav from "./../../../components/Nav.vue";
export default {
  name: "Detail",
  components: { Nav },
  setup() {
    const state = reactive({});
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped></style>
