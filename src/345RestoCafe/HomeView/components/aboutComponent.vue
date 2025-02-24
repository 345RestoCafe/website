<script>
export default {
  name: "aboutComponent"
}
</script>

<template>
  <section class="about container">
    <div class="row mt-5">
      <!-- Mosaico -->
      <div class="col-12 col-md-6">
        <div class="d-md-flex flex-md-row h-100 gap-3 d-grid">
          <!-- Imagen grande -->
          <div class="col-12 col-md-6 h-100 d-md-flex d-none">
            <img src="../../../assets/images/home_view/About1.jpg"
                 alt="Imagen Grande"
                 class="img-fluid w-100 h-100 object-fit-cover" />
          </div>
          <!-- Imágenes pequeñas -->
          <div class="col-12 col-md-6 d-flex flex-column gap-3">
            <img src="../../../assets/images/home_view/About2.jpg"
                 alt="Imagen Pequeña 1"
                 class="img-fluid w-100 h-50 object-fit-cover flex-grow-1" />
            <img src="../../../assets/images/home_view/About3.jpg"
                 alt="Imagen Pequeña 2"
                 class="img-fluid w-100 h-50 object-fit-cover flex-grow-1" />
          </div>
        </div>
      </div>

      <!-- Columna derecha (texto) -->
      <div class="col-12 col-md-6 mt-4 mt-md-0 p-5 text-center text-md-start align-self-center justify-content-center">
        <h4 class="text-primary">Sobre Nosotros</h4>
        <h2>Resto Café 345</h2>
        <p class="text-light">
          Es un restaurante innovador y creativo que está orientado en ofrecer servicios gastronómicos de alta calidad con atención personalizada.
        </p>
        <a type="button" class="btn-relief btn btn-dark" href="https://345restocafe.com/nosotros" target="_self">Ver más</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about h4 {
  font-size: 17px;
  font-family: Lora, sans-serif;
  font-weight: 500;
  letter-spacing: 2.5px;
}
.about h2 {
  font-family: Lora, sans-serif;
  font-weight: 500;
  font-size: 35px;
  letter-spacing: -1.75px;
}
.about p {
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.5;
  margin-top: 30px;
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