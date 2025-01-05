<template>
  <div :class="['navbar', { 'navbar-fixed': isHeaderHidden }]">
    <div class="navbar-brand">
      <a class="logo-img" href="#">
        <img class="logo-img" src="https://i.imgur.com/LRb0Ub2.png" title="source: imgur.com" />
      </a>
    </div>

    <button class="menu-button" @click="toggleMenu" aria-label="Menu button">
      &#9776;
    </button>

    <div class="nav-links" :class="{ 'nav-active': showMenu }">
      <button
          class="nav-button"
          aria-label="Home button"
          :class="{ active: actualView === '' }"
          @click="directTo('')"
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
  props: {
    isHeaderHidden: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      actualView: "/",
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
.navbar-brand {
  padding: 0;
  width: auto;
  flex: none;
  position: relative;
  display: block;
  margin-right: 40px;
}
.logo-img{
  height: 100px;
}
.navbar{
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  font-weight: 300;
  height: 100%;
  max-height: 180px;
  justify-content: center;
  width: 100%;
  z-index: 1001;
  padding-top: 50px;
  padding-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-fixed {
  position: fixed;
  max-height: 140px;
  padding: 20px;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 999;
}

.nav-button{
  font-family: "Lora", sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0;
  color: #444444;
  background-color: transparent;
  position: relative;
  margin: 1.8em .4em;
  padding: 10px 12px;
  border: none;
  width: auto;
  max-height: 40px;
  cursor: pointer;
}
.nav-button::after{
  content:"";
  position: absolute;
  width: 0;
  height: 3px;
  color: #cb9755;
  bottom: 0;
  left: 0;
  transition: width 0.1s ease-in;
}
.nav-button:hover::after{
  width: 100%;
  color: #cb9755;
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
  color: #cb9755;
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

@media (max-width: 1125px) {
  .navbar {
    padding-top: 110px;
    max-height: 240px;
  }
  .navbar-fixed {
    top:0;
    padding-top: 30px;
    max-height: 150px;
  }
}

@media (max-width: 800px) {
  .nav-button{
    font-size: 0.8em;
  }
}

@media (max-width: 670px) {
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
    position: fixed;
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
    left: 160px;
    transition: width 0.1s ease-in;
  }
}
</style>
