<script>
import BannerComponent from "@/345RestoCafe/ContactUsView/components/bannerComponent.vue";
import MainContactPageComponent from "@/345RestoCafe/ContactUsView/components/mainContactPageComponent.vue";
import ContactFormComponent from "@/345RestoCafe/ContactUsView/components/contactFormComponent.vue";
import AboutComponent from "@/345RestoCafe/AboutUs/components/aboutComponent.vue";

export default {
  name: "ContactUsView",
  components: {
    AboutComponent,
    ContactFormComponent,
    MainContactPageComponent,
    BannerComponent,
  }
}
</script>

<template>
  <BannerComponent/>
  <MainContactPageComponent  class="mt-5"/>
  <ContactFormComponent/>
</template>

<style scoped>

</style>