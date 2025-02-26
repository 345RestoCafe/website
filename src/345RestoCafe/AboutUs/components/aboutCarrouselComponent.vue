<script setup>
import Carousel from "primevue/carousel";

const images = [
  { src: new URL("../../../assets/images/events/eventos1.jpg", import.meta.url).href, alt: "Eventos 345RestoCafe" },
  { src: new URL("../../../assets/images/events/eventos2.jpg", import.meta.url).href, alt: "Eventos 345RestoCafe" },
  { src: new URL("../../../assets/images/events/eventos3.jpg", import.meta.url).href, alt: "Eventos 345RestoCafe" },
  { src: new URL("../../../assets/images/events/eventos4.jpg", import.meta.url).href, alt: "Eventos 345RestoCafe" },
  { src: new URL("../../../assets/images/events/eventos5.jpg", import.meta.url).href, alt: "Eventos 345RestoCafe" },
  { src: new URL("../../../assets/images/events/eventos5.jpg", import.meta.url).href, alt: "Eventos 345RestoCafe" },
];

const responsiveOptions = [
  {
    breakpoint: "1012px", // Escritorio
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: "755px", // Tablets
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: "457px", // Móviles
    numVisible: 1,
    numScroll: 1
  }
];
</script>

<template>
  <div class="wrapper mt-5">
    <div class="container p-5">
      <h3 class="my-4 text-secondary">"Servicios gastronómicos de alta calidad con atención personalizada"</h3>
      <Carousel
          :value="images"
          :numVisible="4"
          :numScroll="1"
          :circular="true"
          :autoplayInterval="3000"
          :responsiveOptions="responsiveOptions"
          containerClass="custom-carousel"
      >
        <template #item="slotProps">
          <div class="carousel-item">
            <img :src="slotProps.data.src" :alt="slotProps.data.alt" class="carousel-img" />
          </div>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<style scoped>
h3 {
  font-size: 30px;
  line-height: 43px;
  font-weight: 400;
  font-family: Lora, sans-serif;
  letter-spacing: -0.05em;
}
.wrapper {
  background-color: #ededed;
}
.carousel-item {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
}
.carousel-img {
  width: 100%;
  max-width: 300px;
  height: auto;
  object-fit: cover;
  border-radius: 5px;
}
</style>