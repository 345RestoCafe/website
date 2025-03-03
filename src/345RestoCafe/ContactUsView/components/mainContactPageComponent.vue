<script>
export default {
  name: "mainContactPageComponent"
}
</script>

<template>
  <div class="container">
    <div class="row">
      <h4 class="text-primary my-3">Contáctanos</h4>
      <h5 class="text-secondary">Estaremos encantados de poder atenderlos</h5>
      <p class="text-secondary my-3">Para cualquier consulta o pedido ponemos los siguientes canales a disposición</p>
    </div>

    <div class="row my-5">
      <!-- Columna de Texto -->
      <div class="col-12 col-md-6 mt-4 mt-md-0 p-5 text-center text-md-start align-self-center justify-content-center">
        <h4 class="text-primary">Dirección</h4>
        <h6 class="text-secondary mb-5">Tomas Ramsey 930 - Piso 13 <br> Magdalena del Mar. Lima, Perú</h6>
        <h4 class="text-primary">Cafetería, barra, restaurante y delivery:</h4>
        <h6 class="text-secondary mb-3"><i class="pi pi-phone"/>&nbsp; +51 993 709 111</h6>
        <h6 class="text-secondary mb-5"><i class="pi pi-envelope"/>&nbsp; contacto@345restocafe.com</h6>
        <h6 class="text-secondary mb-3"><i class="pi pi-phone"/>&nbsp; +987 955 926</h6>
        <h6 class="text-secondary mb-5"><i class="pi pi-envelope"/>&nbsp; eventos@345restocafe.com</h6>
      </div>

      <!-- Mosaico -->
      <div class="col-12 col-md-6">
        <div class="d-md-flex flex-md-row h-100 gap-3 d-grid">
          <!-- Imagen grande -->
          <div class="col-12 col-md-6 h-100 d-md-flex d-none">
            <img src="../../../assets/images/contact/contacto1.jpg"
                 alt="Imagen Grande"
                 class="img-fluid w-100 h-100 object-fit-cover" />
          </div>
          <!-- Imágenes pequeñas -->
          <div class="col-12 col-md-6 d-flex flex-column gap-3">
            <img src="../../../assets/images/contact/contacto2.jpg"
                 alt="Imagen Pequeña 1"
                 class="img-fluid w-100 h-50 object-fit-cover flex-grow-1" />
            <img src="../../../assets/images/contact/contacto3.jpg"
                 alt="Imagen Pequeña 2"
                 class="img-fluid w-100 h-50 object-fit-cover flex-grow-1" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h4 {
  font-family: Lora, sans-serif;
  font-weight: 500;
  font-size: 19px;
  text-transform: uppercase;
}
h5{
  font-family: Lora, sans-serif;
  font-weight: 400;
  font-size: 35px;
  text-transform: uppercase;
  line-height: 45px;
  letter-spacing: -0.05em;
}
h6 {
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  font-family: Poppins, sans-serif;
}
p {
  font-size: 15px;
  line-height: 27px;
  font-family: Poppins, sans-serif;
}
</style>