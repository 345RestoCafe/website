<template>
  <div class="view-container">
    <div class="home_page">
      <h1 class="title">345 Resto Café</h1>
      <div class="view-menu">
        <a class="view-menu-button" href="https://345restocafe.com/la-carta/" target="_self" data-type="button">VER CARTA</a>
      </div>
    </div>
    <div class="about-us_page">
      <div class="about-us_container">
        <div class="about-us_container">

        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {defineComponent} from "vue";
import UnderDevelopment from "@/public/components/UnderDevelopmentView.vue";

export default defineComponent({
  components: {UnderDevelopment}
})
</script>

<style scoped>
.view-container {
  padding-bottom: 100px;
  width: 100%;
  font-family: Popins, sans-serif;
  justify-self: center;
  justify-items: center;
}
.home_page {
  min-height: 1000px;
  min-width: 0;
  width: 100%;
  background-image: url("../../../public/home_view/banner-inicio01.jpg");
  align-content: center;
  justify-items: center;
}
.title {
  font-family: "Times New Roman", sans-serif;
  height: auto;
  width: auto;
  color: rgb(193, 150, 85);
  white-space: nowrap;
  text-align: left;
  line-height: 53px;
  letter-spacing: 0;
  font-weight: 400;
  font-size: 6rem;
  backdrop-filter: none;
  filter: none;
  transform-origin: 50% 50%;
  opacity: 1;
  transform: translate(0px, 0px);
  visibility: visible;
}
.view-menu {
 display: flex;
}
.view-menu-button {
  z-index: 10;
  font-family: "Times New Roman", sans-serif;
  background-color: rgba(193, 150, 85, 0.75);
  text-transform: uppercase;
  height: auto;
  width: auto;
  color: white;
  text-decoration: none;
  white-space: nowrap;
  min-height: 0;
  min-width: 0;
  max-height: none;
  max-width: none;
  text-align: left;
  line-height: 28px;
  letter-spacing: 1px;
  font-weight: 400;
  font-size: 25px;
  padding: 20px 35px;
  border-radius: 15px;
  backdrop-filter: none;
  filter: none;
  transform-origin: 50% 50%;
  opacity: 1;
  transform: translate(0px, 0px);
  visibility: visible;
  border-width: 0;
}

@media (max-width: 1068px) {
  .view-container {
    padding-top: 220px;
  }
}

@media (max-width: 678px) {
  .view-container {
    padding-top: 300px;
  }
  .title {
    font-size: 4rem;
  }
}

@media (max-width: 578px) {
  .view-container {
    padding-top: 300px;
  }
  .title {
    font-size: 3rem;
  }
}

@media (max-width: 430px) {
  .view-container {
    padding-top: 180px;
  }
}
</style>