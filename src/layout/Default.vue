<template>
  <div class="def_con">
    <router-view />
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style>
.def_con {
  position: relative;
  height: 100vh;
  overflow-y: scroll;
  background: rgb(255, 138, 120);
  background: linear-gradient(
    180deg,
    rgba(255, 138, 120, 1) 0%,
    rgba(255, 65, 112, 1) 100%
  );
}
</style>
