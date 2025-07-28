<script>
import BannerComponent from "@/345RestoCafe/EventsView/components/bannerComponent.vue";
import EventHeaderComponent from "@/345RestoCafe/EventsView/components/eventHeaderComponent.vue";
import EventServicesComponent from "@/345RestoCafe/EventsView/components/eventServicesComponent.vue";
import ProposalComponent from "@/345RestoCafe/EventsView/components/proposalComponent.vue";

export default {
  name: "EventsView",
  components: {ProposalComponent, EventServicesComponent, EventHeaderComponent, BannerComponent}
}
</script>

<template>
  <banner-component/>
  <event-header-component class="mt-5"/>
  <event-services-component/>
  <proposal-component/>
</template>

<style scoped>
</style>