<script>
import BannerComponent from "@/345RestoCafe/ContactUsView/components/bannerComponent.vue";
import TopWaveDividerComponent from "@/public/components/topWaveDividerComponent.vue";
import MainContactPageComponent from "@/345RestoCafe/ContactUsView/components/mainContactPageComponent.vue";
import ContactFormComponent from "@/345RestoCafe/ContactUsView/components/contactFormComponent.vue";

export default {
  name: "ContactUsView",
  components: {
    ContactFormComponent,
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
  <ContactFormComponent/>
</template>

<style scoped>

</style>