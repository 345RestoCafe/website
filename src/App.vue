<template>
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">\
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
  </head>
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
  position: relative;
  margin: 0;
  flex:3;
  background-color: #000;
  color: #fff;
  padding: 20px 0 30px 0;
  text-align: center;
}
</style>
