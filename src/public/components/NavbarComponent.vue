<template>
  <div class="navbar">
    <a class="logo-img" href="#">
      <img class="logo-img" src="https://i.imgur.com/LRb0Ub2.png" title="source: imgur.com" />
    </a>

    <button class="menu-button" @click="toggleMenu" aria-label="Menu button">
      &#9776;
    </button>

    <div class="nav-links" :class="{ 'nav-active': showMenu }">
      <button
          class="nav-button"
          aria-label="Home button"
          :class="{ active: actualView === 'inicio' }"
          @click="directTo('inicio')"
      >
        Inicio
      </button>

      <button
          class="nav-button"
          aria-label="About us button"
          :class="{ active: actualView === 'nosotros' }"
          @click="directTo('nosotros')"
      >
        Nosotros
      </button>

      <button
          class="nav-button"
          aria-label="Our menu button"
          :class="{ active: actualView === 'la-carta' }"
          @click="directTo('la-carta')"
      >
        La Carta
      </button>

      <button
          class="nav-button"
          aria-label="Events button"
          :class="{ active: actualView === 'eventos' }"
          @click="directTo('eventos')"
      >
        Eventos
      </button>

      <button
          class="nav-button"
          aria-label="Contact button"
          :class="{ active: actualView === 'contacto' }"
          @click="directTo('contacto')"
      >
        Contacto
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationButtons",
  data() {
    return {
      actualView: "inicio",
      showMenu: false,
    };
  },
  methods: {
    directTo(view) {
      this.actualView = view;
      this.$router.push(`/${view}`);
      this.showMenu = false;
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style scoped>
.logo-img{
  height: 100px;
  padding-right: 50px;
}
.navbar{
  display: flex;
  flex-wrap: wrap;
  font-family: Lora, sans-serif;
  background-color: white;
  font-weight: 300;
  height: 130px;
  justify-content: center;
  padding-top: 50px;
}

.nav-button{
  font-family: Lora, sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 18px;
  background-color: transparent;
  position: relative;
  margin: 2.1em .4em;
  border: none;
  width: auto;
  max-height: 40px;
  padding-top: 10px;
}
.nav-button::after{
  content:"";
  position: absolute;
  width: 0;
  height: 3px;
  background-color: #cb9755;
  bottom: 0;
  left: 0;
  transition: width 0.1s ease-in;
}
.nav-button:hover::after{
  width: 100%;
}
.nav-button:hover{
  transition-duration: 150ms;
  color: #cb9755;
}
.nav-button.active::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: #cb9755;
  bottom: 0;
  left: 0;
  transition: width 0.1s ease-in;
}

.menu-button {
  display: none;
  background-color: #000;
  border: none;
  font-size: 0.8em;
  cursor: pointer;
  color: #fff;
  height: 25px;
  border-radius: 5px;
  margin-top: 15px;
  margin-left: 200px;
}

@media (max-width: 1066px) {
  .navbar {
    padding-top: 110px;
  }
  .logo-img{
    padding-right: 10px;
  }
}

@media (max-width: 707px) {
  .nav-button{
    font-size: 0.8em;
  }
}

@media (max-width: 430px) {
  .logo-img {
    height: 50px;
  }
  .menu-button {
    display: block;
  }

  .nav-links {
    margin-top: 55px;
    display: none;
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 130px;
    left: 0;
    background-color: #000;
    z-index: 1000;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  .nav-links.nav-active {
    display: flex;
  }
  .nav-button {
    margin: 10px 0;
    text-align: center;
    color: white;
  }
  .nav-button.active::after {
    content: "";
    position: absolute;
    width: 15%;
    height: 1px;
    background-color: #cb9755;
    left: 182px;
    transition: width 0.1s ease-in;
  }
}
</style>