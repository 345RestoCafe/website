<template>
  <!-- Main title -->
  <header class="bg-dark text-left d-flex align-items-center justify-content-center">
    <div class="opacity-container">
      <div class="container">
        <div class="row justify-content-center text-center align-items-center">
          <div class="col-12">
            <h1 class="text-primary m-5">345 Resto Café</h1>
            <div class="mt-5">
              <a type="button" class="btn btn-primary text-white p-4 pt-3 pb-3 mt-3" href="https://345restocafe.com/la-carta/" target="_self">VER CARTA</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- About Us -->
  <section class="container">
    <div class="row mt-5">
      <!-- Mosaico -->
      <div class="col-12 col-md-6">
        <div class="d-md-flex flex-md-row h-100 gap-3 d-grid">
          <!-- Imagen grande -->
          <div class="col-12 col-md-6 h-100 d-md-flex d-none">
            <img src="../../assets/images/home_view/About1.jpg"
                 alt="Imagen Grande"
                 class="img-fluid w-100 h-100 object-fit-cover" />
          </div>
          <!-- Imágenes pequeñas -->
          <div class="col-12 col-md-6 d-flex flex-column gap-3">
            <img src="../../assets/images/home_view/About2.jpg"
                 alt="Imagen Pequeña 1"
                 class="img-fluid w-100 h-50 object-fit-cover flex-grow-1" />
            <img src="../../assets/images/home_view/About3.jpg"
                 alt="Imagen Pequeña 2"
                 class="img-fluid w-100 h-50 object-fit-cover flex-grow-1" />
          </div>
        </div>
      </div>

      <!-- Columna derecha (texto) -->
      <div class="col-12 col-md-6 mt-4 mt-md-0 p-5 text-center text-md-start align-self-center">
        <h4 class="text-primary">Sobre Nosotros</h4>
        <h2>Resto Café 345</h2>
        <p class="text-light">
          Es un restaurante innovador y creativo que está orientado en ofrecer servicios gastronómicos de alta calidad con atención personalizada.
        </p>
        <button type="button" class="btn-relief btn btn-dark">Ver más</button>
      </div>
    </div>
  </section>



</template>

<script>

import {defineComponent} from "vue";
import UnderDevelopment from "@/public/components/UnderDevelopmentView.vue";

export default defineComponent({
  components: {UnderDevelopment}
})
</script>

<style scoped>
/* Main title */
header {
  background-image: url("../../assets/images/home_view/banner-inicio01.jpg");
  height: 100vh;
  background-size: cover;
  background-position: center;
  position: relative;
}
header h1 {
  font-family: "Times New Roman", sans-serif;
  letter-spacing: 0;
  font-weight: 400;
  font-size: 6rem;
}
header a {
  font-family: "Lora", sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 28px;
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 22px;
  border-radius: 10px;
  opacity: 0.85;
  border-width: 0;
}

/*About us*/
section h4 {
  font-size: 17px;
  font-family: Lora, sans-serif;
  font-weight: 500;
  letter-spacing: 2.5px;
}
section h2 {
  font-family: Lora, sans-serif;
  font-weight: 500;
  font-size: 35px;
  letter-spacing: -1.75px;
}
section p {
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.5;
  margin-top: 30px;
}
section .btn-relief {
  padding: 20px 40px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 3px 3px 0 #808080;
}
section .btn-relief:hover {
  transform: translate(3px, 3px);
  box-shadow: 0 0 0 #808080;
}



</style>