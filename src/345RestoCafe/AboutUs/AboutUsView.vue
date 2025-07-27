<script>
import BannerComponent from "@/345RestoCafe/AboutUs/components/bannerComponent.vue";
import AboutComponent from "@/345RestoCafe/AboutUs/components/aboutComponent.vue"
import AboutCarrouselComponent from "@/345RestoCafe/AboutUs/components/aboutCarrouselComponent.vue";
import MisionVisionComponent from "@/345RestoCafe/AboutUs/components/misionVisionComponent.vue";

export default {
  name: "AboutUsView",
  components: {
    MisionVisionComponent,
    AboutCarrouselComponent,
    BannerComponent,
    AboutComponent
  }
}
</script>

<template>
  <BannerComponent/>
  <AboutComponent class="mt-5"/>
  <AboutCarrouselComponent/>
  <MisionVisionComponent/>
</template>

<style scoped>

</style>