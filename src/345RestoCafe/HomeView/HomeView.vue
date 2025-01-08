<template>
  <div class="view-container">
    <section class="home_page">
      <h1 class="title">345 Resto Café</h1>
      <div class="view-menu">
        <a class="view-menu-button" href="https://345restocafe.com/la-carta/" target="_self" data-type="button">VER CARTA</a>
      </div>
    </section>
    <section class="about-section">
      <div class="about-us-image-gallery">
        <div class="about-us-large-image">
          <img src="../../../public/home_view/About1.jpg" alt="Imagen Grande" />
        </div>
        <div class="about-us-small-images">
          <img src="../../../public/home_view/About2.jpg" alt="Imagen Pequeña 1" />
          <img src="../../../public/home_view/About3.jpg" alt="Imagen Pequeña 2" />
        </div>
      </div>
      <div class="about-info">
        <h4>SOBRE NOSOTROS</h4>
        <h2>Resto Café 345</h2>
        <p>
          Es un restaurante innovador y creativo que está orientado en ofrecer servicios gastronómicos de alta calidad con atención personalizada.
        </p>
        <button class="about-us-more-button">Ver Más</button>
      </div>
    </section>

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
  font-family: "Lora", sans-serif;
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

.about-section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 100px 20px;
}
.about-us-image-gallery {
  display: flex;
  gap: 20px;
}
.about-us-large-image img {
  width: auto;
  height: 441px;
  border-radius: 5px;
}
.about-us-small-images {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.about-us-small-images img {
  width: 290px;
  height: 210.5px;
  border-radius: 5px;
}
.about-info {
  max-width: 500px;
  padding: 20px 50px;
}
.about-info h4 {
  font-size: 17px;
  font-family: Lora, sans-serif;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 2.5px;
  color: rgba(193, 150, 85, 0.75);
  margin: 0;
}
.about-info h2 {
  font-family: Lora, sans-serif;
  font-weight: 500;
  font-size: 35px;
  letter-spacing: -1.75px;
  line-height: 45.5px;
  text-transform: none;
  margin: 10px 0;
}
.about-info p {
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.5;
  color: #777;
  margin-top: 30px;
}
.about-us-more-button {
  padding: 20px 40px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin: 20px 0;
}
.about-us-more-button:hover {
  background-color: #444;
}


@media (max-width: 670px) {
  .title {
    font-size: 4rem;
  }

  .about-us-large-image img {
    width: 200px;
  }
  .about-us-small-images img {
    width: 95px;
  }
}
@media (max-width: 430px) {
  .home_page {
    min-height: 700px;
  }
  .title {
    font-size: 3rem;
  }
}
</style>