<template>
  <footer class="bg-dark text-light py-5">
    <div class="container text-center pt-5">
      <div class="mb-3">
        <img src="../../assets/images/logo.png" alt="Logo" class="img-fluid" style="width: 250px;">
        <p class="my-4 fw-bold">Resto Café, Bar y Delivery</p>
      </div>
      <div class="row">
        <div class="col-md-4 text-md-start text-center text-white">
          <h5 class="text-primary">Resto Café, Bar y Delivery</h5>
          <p><i class="pi pi-phone"></i> +51 993 709 111</p>
          <p><i class="pi pi-map-marker"></i> Tomas Ramsey 930 - Piso 13,<br> Magdalena, Lima, Perú</p>
          <h5 class="text-primary mt-4">Eventos</h5>
          <p><i class="pi pi-phone my-0"></i> +51 987 955 926</p>
          <p><i class="pi pi-envelope"></i> eventos@345restocafe.com</p>
        </div>
        <div class="col-md-4 text-center align-self-center">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.289258216881!2d-77.06093992593462!3d-12.092339342748936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c9ab63012999%3A0xb254c9814dd875e6!2sPiso%2013%2C%20Tom%C3%A1s%20Ramsey%20930%2C%20Magdalena%20del%20Mar%2015076!5e0!3m2!1ses-419!2spe!4v1688662866676!5m2!1ses-419!2spe"
              class="img-fluid w-100 mb-4"
              style="min-height: 200px"
          />
          <a href="https://wa.me/+51993709111" target="_blank" class="d-none d-md-block text-primary reservas">Reservas</a>
        </div>
        <div class="col-md-4 text-md-end text-center mt-4">
          <h6 class="text-white">Menú</h6>
          <ul class="list-unstyled">
            <li><a href="#" class="text-light" @click="directTo('')">Inicio</a></li>
            <li><a href="#" class="text-light" @click="directTo('nosotros')">Nosotros</a></li>
            <li><a href="#" class="text-light" @click="directTo('la-carta')">La Carta</a></li>
            <li><a href="#" class="text-light" @click="directTo('eventos')">Eventos</a></li>
            <li><a href="#" class="text-light" @click="directTo('contacto')">Contacto</a></li>
          </ul>
        </div>
      </div>
      <div class="row mt-5">
        <p>© Copyright 2023 | 345 Resto Café</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  methods: {
    directTo(view) {
      this.$router.push(`/${view}`);
    },
  },
};
</script>

<style scoped>
h5 {
  font-family: Lora, sans-serif;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 1px;
  font-weight: 700;
}
p {
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
}
li a{
  font-size: 16px;
  line-height: 26px;
  font-weight: 400;
  font-family: Poppins, sans-serif;
  text-decoration: none;
}
.reservas {
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
}
</style>