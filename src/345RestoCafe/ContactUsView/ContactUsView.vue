<script>
import BannerComponent from "@/345RestoCafe/ContactUsView/components/bannerComponent.vue";
import TopWaveDividerComponent from "@/public/components/topWaveDividerComponent.vue";
import MainContactPageComponent from "@/345RestoCafe/MenuView/components/mainContactPageComponent.vue";

export default {
  name: "ContactUsView",
  components: {
    MainContactPageComponent,
    TopWaveDividerComponent,
    BannerComponent,
  }
}
</script>

<template>
  <BannerComponent/>
  <TopWaveDividerComponent/>
  <MainContactPageComponent/>
</template>

<style scoped>

</style>