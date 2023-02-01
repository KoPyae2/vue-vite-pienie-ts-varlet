<script setup lang="ts">
import { computed, ref } from "vue";
import { userStore } from "../store/user";

defineProps<{ msg: string }>();

const count = ref(0);
const userStoreData = userStore();

const name = computed(() => userStoreData.userName);
const age = computed(() => userStoreData.age);
const gender = computed(() => userStoreData.gender);

const setData = () => {
  userStoreData.setUserData("nana", 12, 1);
};

const checkGender = (gender: number) => {
  switch (gender) {
    case 0:
      return "Unknow";
    case 1:
      return "Male";
    case 2:
      return "Female";
  }
};
</script>

<script lang="ts">
export default {};
</script>

<template>
  <h1>Name:{{ name }}</h1>
  <h1>Age:{{ age }}</h1>
  <h1>Gender:{{ checkGender(gender) }}</h1>

  <button type="button" @click="setData">Generate Data</button>

  <!-- <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div> -->
  <var-breadcrumbs>
    <var-breadcrumb>Home</var-breadcrumb>
    <var-breadcrumb>Link 1</var-breadcrumb>
    <var-breadcrumb>Link 2</var-breadcrumb>
  </var-breadcrumbs>
</template>

<style scoped></style>
