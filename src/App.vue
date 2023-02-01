<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {});
</script>

<template>
  <div class="main_container">
    <router-view #="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<style lang="scss">
@import "./style/index.scss";
</style>
