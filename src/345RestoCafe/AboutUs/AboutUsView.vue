<script>
import BannerComponent from "@/345RestoCafe/AboutUs/components/bannerComponent.vue";
import TopWaveDividerComponent from "@/public/components/topWaveDividerComponent.vue";
import AboutComponent from "@/345RestoCafe/AboutUs/components/aboutComponent.vue"
import AboutCarrouselComponent from "@/345RestoCafe/AboutUs/components/aboutCarrouselComponent.vue";

export default {
  name: "AboutUsView",
  components: {
    AboutCarrouselComponent,
    TopWaveDividerComponent,
    BannerComponent,
    AboutComponent
  }
}
</script>

<template>
  <BannerComponent/>
  <TopWaveDividerComponent/>
  <AboutComponent/>
  <AboutCarrouselComponent/>
</template>

<style scoped>

</style>