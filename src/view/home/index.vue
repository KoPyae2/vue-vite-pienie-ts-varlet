<template>
  <Nav :title="t('home.home')" class="nav" :leftarrow="false">
    <!-- <button>Red</button> -->
  </Nav>

  <Banner :data="images" />

  <p class="hello">{{ t("home.hello") }}</p>
  <var-button class="btn" type="primary" @click="changeLang('cn')"
    >Change Lang (cn)</var-button
  ><br />
  <var-button class="btn" type="primary" @click="changeLang('en')"
    >Change Lang (en)</var-button
  ><br />
  <var-button class="btn" type="primary" @click="changeLang('jp')"
    >Change Lang (jp)</var-button
  >
</template>

<script lang="ts">
import { onMounted, reactive } from "vue-demi";
import { toRefs } from "@vueuse/shared";
import Banner from "./component/banner.vue";
import Nav from "./../../components/Nav.vue";
import { useI18n } from "vue-i18n";
import language from "./../../locales/getlang";
import { changeLanguage } from "./../../locales/i18n";
import { testApi } from "./../../api/home";

export default {
  namr: "Home",
  components: {
    Nav,
    Banner,
  },
  setup() {
    const { t } = useI18n();
    const state = reactive({
      images: [] as string[],
    });

    const getImages = () => {
      state.images = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq5E5-Fxq1sqgdb4AFeXB3EAHcvnSeJ0LM6Q&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmhVgjVV8e5N44IeVpPNhJ07TSQVzIVgRBdA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4GBoV1sdU51HerXSVJkjy0ARWyhAfgssmpg&usqp=CAU",
      ];
    };

    const changeLang = (lang: any) => {
      console.log(lang);
      changeLanguage(lang);
    };
    onMounted(() => {
      getImages();
      language;
      testApi({}).then((res) => {
        console.log(res);
      });
      console.log(import.meta.env.VITE_APP_API);
    });

    return {
      t,
      ...toRefs(state),
      changeLang,
    };
  },
};
</script>

<style lang="scss" scoped>
.nav {
  button {
    position: absolute;
    top: 0;
  }
}
.hello {
  text-align: center;
  padding-top: px2rem(20);
  color: #fff;
  font-size: px2rem(50);
}
.btn {
  display: block;
  margin: 0 auto;
}
.btn:first-child {
  margin-top: px2rem(90);
}
</style>
