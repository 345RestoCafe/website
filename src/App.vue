<template>
  <div class="main-container">
    <header-component class="app-header"/>
    <navbar-component class="navbar"/>
    <div class="content">
      <router-view/>
    </div>
    <footer-component class="footer"/>
  </div>
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
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}
.main-container {
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.footer {
  margin: 0;
  background-color: #000;
  color: #fff;
  padding: 20px 0;
  text-align: center;
}
</style>
