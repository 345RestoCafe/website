<template>
  <div class="footer">
    <div class="logo-container">
      <img alt="logo" src="./assets/logo.png">
      <p class="title">Resto Café, Bar y Delivery</p>
    </div>
    <div class="info-container">
      <div class="left-row">
        <p class="subtitle">Resto Café, Bar y Delivery</p>
        <i class="pi pi-phone" style="font-size: 1em">&nbsp;+51 993 709 111</i>
        <i class="pi pi-envelope" style="font-size: 1em">&nbsp;contacto@345restocafe.com</i>
        <i class="pi pi-map-marker" style="font-size: 1em">&nbsp;Tomas Ramsey 930 - Piso 13. Magdalena, Lima, Perú</i>

        <p class="subtitle">Eventos</p>
        <i class="pi pi-phone" style="font-size: 1em">&nbsp;+51 987 955 926</i>
        <i class="pi pi-envelope" style="font-size: 1em">&nbsp;eventos@345restocafe.com</i>
      </div>
      <div class="center-row">
        <p>Here is the map</p>
        <a class="subtitle">Reservas</a>
      </div>
      <div class="right-row">
        <p class="navigation-sidebar">Menú</p>
        <button
            class="nav-button"
            aria-label="Home button"
            @click="directTo('inicio')"
        >
          Inicio
        </button>
        <button
            class="nav-button"
            aria-label="About us button"
            @click="directTo('nosotros')"
        >
          Nosotros
        </button>
        <button
            class="nav-button"
            aria-label="Our menu button"
            @click="directTo('la-carta')"
        >
          La Carta
        </button>
        <button
            class="nav-button"
            aria-label="Events button"
            @click="directTo('eventos')"
        >
          Eventos
        </button>
        <button
            class="nav-button"
            aria-label="Contact button"
            @click="directTo('contacto')"
        >
          Contacto
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.footer {
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 0.9em;
  padding: 0;
  position: absolute;
  clear: both;
  background-color: #000;
  color: #fff;
  display: block;
  box-sizing: border-box;
}
.logo-container{
  display: flex;
  justify-content: center;
}

.info-container {
  display: flex;
  justify-content: space-between;
}
.left-row {
  display: flex;
  flex-direction: column;
}

.center-row {
  flex-direction: column;
}

.right-row {
  display: flex;
  flex-direction: column;
}
</style>