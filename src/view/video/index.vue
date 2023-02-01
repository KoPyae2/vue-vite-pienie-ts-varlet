<template>
  <p>Video</p>
  <var-button class="btn" type="primary" @click="request">Req</var-button>
</template>

<script lang="ts">
export default {
  setup() {
    const request = async () => {
      console.log("kk");
    };
    return { request };
  },
};
</script>

<style></style>
