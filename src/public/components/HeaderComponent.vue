<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container text-white">
      <div class="row w-100 justify-content-between">
        <!-- Información de contacto -->
        <div class="col-lg-6 d-flex align-items-center justify-content-center flex-wrap">
          <p class="info mb-0 me-2">Resto Café, Bar y Delivery</p>
          <p class="phone mb-0 me-2">+51 993 709 111</p>
          <p class="info mb-0 me-2">/</p>
          <p class="info mb-0 me-2">Eventos</p>
          <p class="phone mb-0">+51 987 955 926</p>
        </div>

        <!-- Correos electrónicos -->
        <div class="col-lg-2 d-flex align-items-center justify-content-center">
          <i class="pi pi-envelope me-2" style="font-size: 1rem"></i>
          <p class="mail mb-0">eventos@345retocafe.com</p>
        </div>

        <!-- Redes sociales -->
        <div class="col-lg-2 d-flex align-items-center justify-content-center align-items-center">
          <a class="pi pi-facebook text-white me-3" style="font-size: 1rem; text-decoration: none;" href="https://www.facebook.com/profile.php?id=100092175221621"></a>
          <a class="pi pi-instagram text-white me-3" style="font-size: 1rem; text-decoration: none;" href="https://www.instagram.com/345restocafe/"></a>
          <a class="pi pi-tiktok text-white me-3" style="font-size: 1rem; text-decoration: none;" href="https://www.tiktok.com/@345restocafe"></a>
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
.navbar{
  transition: all 0.3s ease;
}
p {
  font-family: "Popins", sans-serif;
  font-size: 0.8em;
  font-weight: 400;
  line-height: 32px;
}

.info,
.phone,
.mail {
  margin: 0;
  white-space: nowrap;
}

.phone {
  font-weight: 800;
  letter-spacing: -1px;
}
.mail {
  font-weight: 600;
  font-size: 0.85em;
}

@media (max-width: 1400px) {
  .info, .phone, .mail {
    font-size: 0.7rem;
  }
}

@media (max-width: 1200px) {
  .info, .phone, .mail {
    font-size: 0.6rem;
  }
}
</style>