<template>
  <LandingPageComponent/>
  <AboutComponent/>
  <ReviewCarrouselComponent/>
  <MenuComponent/>
  <EventsComponent/>
</template>

<script>
import AboutComponent from "@/345RestoCafe/HomeView/components/aboutComponent.vue";
import ReviewCarrouselComponent from "@/345RestoCafe/HomeView/components/reviewCarrouselComponent.vue";
import MenuComponent from "@/345RestoCafe/HomeView/components/menuComponent.vue";
import LandingPageComponent from "@/345RestoCafe/HomeView/components/landingPageComponent.vue";
import EventsComponent from "@/345RestoCafe/HomeView/components/eventsComponent.vue";
export default {
  components: {
    EventsComponent,
    LandingPageComponent,
    MenuComponent,
    ReviewCarrouselComponent,
    AboutComponent
  }
}
</script>

<style scoped>
</style>