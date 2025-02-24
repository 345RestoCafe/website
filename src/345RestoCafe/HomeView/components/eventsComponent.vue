<script setup>
import Carousel from 'primevue/carousel';

const images = [
  { src: new URL("../../../assets/images/home_view/eventos1.jpg", import.meta.url).href, alt: "Eventos 345RestoCafe" },
  { src: new URL("../../../assets/images/home_view/eventos2.jpg", import.meta.url).href, alt: "Eventos 345RestoCafe" },
  { src: new URL("../../../assets/images/home_view/eventos3.jpg", import.meta.url).href, alt: "Eventos 345RestoCafe" },
  { src: new URL("../../../assets/images/home_view/eventos4.jpg", import.meta.url).href, alt: "Eventos 345RestoCafe" },
  { src: new URL("../../../assets/images/home_view/eventos5.jpg", import.meta.url).href, alt: "Eventos 345RestoCafe" },
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
  <section class="eventos mt-5">
    <div class="row mt-5">
      <div class="col-md-12 mt-5">
        <h5 class="text-primary text-center mt-5">Brindamos Los Mejores Servicios En</h5>
        <h4 class="text-black text-center">Eventos Corporativos o Sociales</h4>
      </div>
    </div>
    <div class="container mt-5">
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
    <div class="container mt-5">
      <div class="col-md-12">
        <h3 class="text-primary text-center mt-5">Atendemos</h3>
      </div>
      <div class="row mt-5 justify-content-center">
        <div class="col-md-4 justify-content-center align-self-center">
          <div class="d-flex align-items-center mb-4 justify-content-md-start justify-content-center">
            <img src="../../../assets/images/home_view/icon1.png" alt="eventos" class="icon img-fluid align-self-center"/>
            <h6 class="m-2">Desayunos</h6>
          </div>
          <div class="d-flex align-items-center mb-4 justify-content-md-start justify-content-center">
            <img src="../../../assets/images/home_view/icon2.png" alt="eventos" class="icon img-fluid"/>
            <h6 class="m-2">Catering para reuniones de trabajo</h6>
          </div>
          <div class="d-flex align-items-center mb-4 justify-content-md-start justify-content-center">
            <img src="../../../assets/images/home_view/icon3.png" alt="eventos" class="icon img-fluid"/>
            <h6 class="m-2">Cocteles para eventos especiales</h6>
          </div>
          <div class="d-flex align-items-center mb-md-0 mb-4 justify-content-md-start justify-content-center">
            <img src="../../../assets/images/home_view/icon4.png" alt="eventos" class="icon img-fluid"/>
            <h6 class="m-2">Eventos Especiales</h6>
          </div>
        </div>
        <div class="col-md-4 justify-content-center align-self-center">
          <div class="d-flex align-items-center mb-4 justify-content-md-start justify-content-center">
            <img src="../../../assets/images/home_view/icon5.png" alt="eventos" class="icon img-fluid align-self-center"/>
            <h6 class="m-2">Almuerzos</h6>
          </div>
          <div class="d-flex align-items-center mb-4 justify-content-md-start justify-content-center">
            <img src="../../../assets/images/home_view/icon6.png" alt="eventos" class="icon img-fluid"/>
            <h6 class="m-2">Coffee Break para eventos</h6>
          </div>
          <div class="d-flex align-items-center mb-4 justify-content-md-start justify-content-center">
            <img src="../../../assets/images/home_view/icon7.png" alt="eventos" class="icon img-fluid"/>
            <h6 class="m-2">After Office (Jueves y viernes)</h6>
          </div>
          <div class="d-flex align-items-center mb-md-0 mb-4 justify-content-md-start justify-content-center">
            <img src="../../../assets/images/home_view/icon8.png" alt="eventos" class="icon img-fluid"/>
            <h6 class="m-2">Cenas a pedido con programación</h6>
          </div>
        </div>
        <div class="col-md-4 align-self-center text-center">
          <img src="../../../assets/images/home_view/eventos_main.jpg" alt="Eventos 345RestoCafe" class="carousel-img img-fluid" />
        </div>
      </div>
      <div class="mt-5 text-center">
        <a type="button" class="btn-relief btn btn-dark" href="https://345restocafe.com/eventos" target="_self">Ver más</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.eventos {
  background-color: #ededed;
  padding: 20px 0 60px 0;
}
h3{
  font-size: 22px;
  font-family: Lora, sans-serif;
  font-weight: 400;
  letter-spacing: 2.5px;
  text-transform: uppercase;
}
h4 {
  font-size: 35px;
  font-family: Lora, sans-serif;
  font-weight: 400;
  letter-spacing: -1.75px;
  text-transform: uppercase;
}
h5 {
  font-size: 17px;
  font-family: Lora, sans-serif;
  font-weight: 400;
  letter-spacing: 2.5px;
  text-transform: uppercase;
}
h6{
  font-size: 19px;
  font-family: Lora, sans-serif;
  font-weight: 400;
  color: #4D4D4DFF;
  line-height: 22px;
  letter-spacing: -0.5px;
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
.icon {
  width: 50px;
  height: 50px;
}
.btn-relief {
  padding: 20px 40px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 5px 5px 0 #808080;
}
.btn-relief:hover {
  transform: translate(5px, 5px);
  box-shadow: 0 0 0 #808080;
}
</style>
