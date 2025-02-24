<script setup>
import { ref, computed } from "vue";

// Cargar imágenes correctamente usando import
const images = [
  { src: new URL("../../../assets/images/home_view/eventos1.jpg", import.meta.url).href, alt: "Eventos 345RestoCafe" },
  { src: new URL("../../../assets/images/home_view/eventos2.jpg", import.meta.url).href, alt: "Eventos 345RestoCafe" },
  { src: new URL("../../../assets/images/home_view/eventos3.jpg", import.meta.url).href, alt: "Eventos 345RestoCafe" },
  { src: new URL("../../../assets/images/home_view/eventos4.jpg", import.meta.url).href, alt: "Eventos 345RestoCafe" },
  { src: new URL("../../../assets/images/home_view/eventos5.jpg", import.meta.url).href, alt: "Eventos 345RestoCafe" },
];

const currentIndex = ref(0);

// Asegurar que displayedImages siempre tenga al menos 4 elementos visibles
const displayedImages = computed(() => {
  const totalImages = [...images, ...images]; // Para hacer el efecto circular
  return totalImages.slice(currentIndex.value, currentIndex.value + 4);
});

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
};
</script>


<template>
  <section class="eventos mt-5">
    <div class="row mt-5">
      <div class="col-md-12 mt-5">
        <h5 class="text-primary text-center mt-5">Brindamos Los Mejores Servicios En</h5>
        <h4 class="text-black text-center">Eventos Corporativos o Sociales</h4>
      </div>
    </div>
    <div class="container">
      <div class="carousel-container">
        <div class="carousel-wrapper">
          <div class="carousel-track" :style="{ transform: `translateX(-${currentIndex * 25}%)` }">
            <div v-for="(image, index) in displayedImages" :key="index" class="carousel-item">
              <img :src="image.src" class="img-fluid rounded" :alt="image.alt" />
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" @click="prevSlide">
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" @click="nextSlide">
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>

/* Eventos */
.eventos {
  background-color: #ededed;
}
.eventos h5{
  font-size: 17px;
  font-family: Lora, sans-serif;
  font-weight: 400;
  letter-spacing: 2.5px;
  text-transform: uppercase;
}
.eventos h4{
  font-size: 35px;
  font-family: Lora, sans-serif;
  font-weight: 400;
  letter-spacing: -1.75px;
  text-transform: uppercase;
}
.eventos p {
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  line-height: 1.8;
  font-weight: 400;
}
.carousel-container {
  position: relative;
  width: 100%;
  max-width: 800px;
  overflow: hidden;
}
.carousel-wrapper {
  display: flex;
  overflow: hidden;
  width: 100%;
}
.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}
.carousel-item {
  flex: 0 0 25%;
  padding: 5px;
}
.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  padding: 10px;
  cursor: pointer;
}
.carousel-control-prev {
  left: 10px;
}
.carousel-control-next {
  right: 10px;
}
.carousel-control-prev-icon,
.carousel-control-next-icon {
  width: 20px;
  height: 20px;
  background-color: white;
  display: inline-block;
  mask-size: contain;
}
</style>