<template>
  <header-component class="app-header"/>
  <navbar-component class="navbar"/>
  <router-view/>
  <footer-component/>
</template>

<script>

import HeaderComponent from "@/public/components/HeaderComponent.vue";
import NavbarComponent from "@/public/components/NavbarComponent.vue";
import FooterComponent from "@/public/components/FooterComponent.vue";
import 'primeicons/primeicons.css'

export default {
  name: 'App',
  components: {
    FooterComponent,
    NavbarComponent,
    HeaderComponent
  }
}
</script>

<style>
template{
  background-color: white;
  margin: 0;
}
</style>
