<template>
  <div class="footer">
    <div class="logo-container">
      <img class="logo" src="../../../public/logo.png">
      <p class="title">Resto Café, Bar y Delivery</p>
    </div>
    <div class="info-container">
      <div class="left-row">
        <h1 class="subtitle">Resto Café, Bar y Delivery</h1>
        <i class="pi pi-phone" style="font-size: 1em">&nbsp;<h3 class="info">+51 993 709 111</h3></i>
        <i class="pi pi-envelope" style="font-size: 1em">&nbsp;<h3 class="info">contacto@345restocafe.com</h3></i>
        <i class="pi pi-map-marker" style="font-size: 1em">&nbsp;<h3 class="info">Tomas Ramsey 930 - Piso 13. Magdalena, Lima, Perú</h3></i>

        <h1 class="subtitle">Eventos</h1>
        <i class="pi pi-phone" style="font-size: 1em">&nbsp;<h3 class="info">+51 987 955 926</h3></i>
        <i class="pi pi-envelope" style="font-size: 1em">&nbsp;<h3 class="info">eventos@345restocafe.com></h3></i>
      </div>
      <div class="center-row">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.289258216881!2d-77.06093992593462!3d-12.092339342748936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c9ab63012999%3A0xb254c9814dd875e6!2sPiso%2013%2C%20Tom%C3%A1s%20Ramsey%20930%2C%20Magdalena%20del%20Mar%2015076!5e0!3m2!1ses-419!2spe!4v1688662866676!5m2!1ses-419!2spe"></iframe>
        <a class="map-subtitle">Reservas</a>
      </div>
      <div class="right-row">
        <h2 class="navigation-sidebar">Menú</h2>
        <div class="nav-buttons-container">
          <a
              class="nav-button"
              aria-label="Home button"
              @click="directTo('')"
          >
            Inicio
          </a>
          <a
              class="nav-button"
              aria-label="About us button"
              @click="directTo('nosotros')"
          >
            Nosotros
          </a>
          <a
              class="nav-button"
              aria-label="Our menu button"
              @click="directTo('la-carta')"
          >
            La Carta
          </a>
          <a
              class="nav-button"
              aria-label="Events button"
              @click="directTo('eventos')"
          >
            Eventos
          </a>
          <a
              class="nav-button"
              aria-label="Contact button"
              @click="directTo('contacto')"
          >
            Contacto
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default  {
  name: 'FooterComponent',
  methods: {
    directTo(view) {
      this.actualView = view;
      this.$router.push(`/${view}`);
      this.showMenu = false;
    },
  }
}
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
  flex-direction: column;
  align-items: center;
  padding: 30px 0 20px 0;
}
.logo {
  width: 150px;
}
.title {
  font-family: Lora, sans-serif;
  font-size: 1em;
  font-weight: 700;
  line-height: 18px;
  color: #777777;
}

.info-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.left-row {
  display: flex;
  flex-direction: column;
  width: 220px;
  font-size: 1em;
  line-height: 24px;
  text-transform: none;
  font-weight: 600;
  padding-left: 20%;
}
.subtitle {
  font-family: Lora, sans-serif;
  font-size: 1.1em;
  font-weight: 700;
  line-height: 18px;
  color:#c19655
}
i{
  display: flex;
  align-items: center;
}
.info {
  font-size: 1em;
  font-family: Popins, sans-serif;
}

.center-row {
  display: flex;
  flex-direction: column;
  padding: 0 50px;
}
.map-subtitle{
  padding-top: 30px;
  align-self: center;
  font-family: Lora, sans-serif;
  font-size: 1.1em;
  font-weight: 700;
  line-height: 18px;
  color:#c19655
}

.right-row {
  display: flex;
  flex-direction: column;
  width: 220px;
  font-size: 1em;
  line-height: 24px;
  text-transform: none;
  font-weight: 600;
  padding-right: 20%;
  align-items: end;
}
.nav-buttons-container {
  display: flex;
  flex-direction: column;
}
.navigation-sidebar {
  font-family: Popins, sans-serif;
  font-size: 1.2em;
  text-align: right;
}
.nav-button {
  text-decoration: none;
  background: transparent;
  color: #999999;
  border: none;
  font-family: Popins, sans-serif;
  width: 60px;
  text-align: right;
}
.nav-button:hover {
  color: white;
  position: relative;
  left: 0;
  transition: left 0.1s ease-in-out;
}

@media (max-width: 1400px) {
  .logo {
    width: 100px;
  }
  .left-row {
    font-size: 0.7em;
    padding-left: 10%;
  }
  .right-row {
    font-size: 0.7em;
    padding-right: 10%;
  }

}

@media (max-width: 840px) {
  .info-container{
    flex-direction: column;
  }
  .left-row {
    padding: 0;
    align-self: center;
  }
  .subtitle {
    text-align: center;
  }
  i {
      text-align: center;
      justify-content: center;
      align-items: center;
  }

  iframe {
    align-self: center;
    width: 200px;
  }

  .right-row {
    align-self: center;
    padding: 0;
    width: 70px;
  }
  .navigation-sidebar {
    align-self: center;
  }
  .nav-button {
    text-align: center;
  }
}
</style>