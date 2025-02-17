<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container text-white">
      <div class="row w-100 align-items-center">
        <!-- Información de contacto -->
        <div class="col-md-6 d-flex align-items-center justify-content-center">
          <p class="info mb-0 mt-0 m-2">Resto Café, Bar y Delivery</p>
          <p class="phone mb-0 mt-0 m-2">+51 993 709 111</p>
          <p class="info mb-0 mt-0 m-2">/</p>
          <p class="info mb-0 mt-0 m-2">Eventos</p>
          <p class="phone mb-0 mt-0 m-2">+51 987 955 926</p>
        </div>

        <!-- Correos electrónicos -->
        <div class="col-md-2 d-flex align-items-center justify-content-center">
          <i class="pi pi-envelope me-2" style="font-size: 1rem"></i>
          <p class="mail mb-0">contacto@345restocafe.com</p>
        </div>
        <div class="col-md-2 d-flex align-items-center justify-content-center">
          <i class="pi pi-envelope me-2" style="font-size: 1rem"></i>
          <p class="mail mb-0">eventos@345retocafe.com</p>
        </div>

        <!-- Redes sociales -->
        <div class="col-md-2 d-flex align-items-center justify-content-center">
          <a class="pi pi-facebook text-white m-2" style="font-size: 1rem; text-decoration: none;" href="https://www.facebook.com/profile.php?id=100092175221621"></a>
          <a class="pi pi-instagram text-white m-2" style="font-size: 1rem; text-decoration: none;" href="https://www.instagram.com/345restocafe/"></a>
          <a class="pi pi-tiktok text-white m-2" style="font-size: 1rem; text-decoration: none;" href="https://www.tiktok.com/@345restocafe"></a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style scoped>
p {
  font-family: "Popins", sans-serif;
  font-size: 0.8em;
  font-weight: 400;
  line-height: 32px;
}
.phone {
  font-weight: 800;
  letter-spacing: -1px;
}
.mail {
  font-weight: 600;
  font-size: 0.85em;
}
</style>