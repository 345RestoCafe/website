<template>
  <nav :class="['navbar navbar-expand-lg navbar-light bg-white', { 'navbar-fixed': isHeaderHidden }]">
    <div class="container-fluid m-5 mt-0 mb-0">
      <!-- Logo -->
      <a class="navbar-brand" href="#">
        <img class="logo-img" src="https://i.imgur.com/LRb0Ub2.png" alt="Logo" />
      </a>
      <!-- Botón de menú para móviles -->
      <button class="navbar-toggler" type="button" @click="toggleMenu" aria-label="Menu button">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Enlaces de navegación -->
      <div class="collapse navbar-collapse" :class="{ 'show': showMenu }" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <button
                  class="nav-link btn btn-link"
                  :class="{ 'active': actualView === '' }"
                  @click="directTo('')"
              >
                Inicio
              </button>
            </li>
            <li class="nav-item">
              <button
                  class="nav-link btn btn-link"
                  :class="{ 'active': actualView === 'nosotros' }"
                  @click="directTo('nosotros')"
              >
                Nosotros
              </button>
            </li>
            <li class="nav-item">
              <button
                  class="nav-link btn btn-link"
                  :class="{ 'active': actualView === 'la-carta' }"
                  @click="directTo('la-carta')"
              >
                La Carta
              </button>
            </li>
            <li class="nav-item">
              <button
                  class="nav-link btn btn-link"
                  :class="{ 'active': actualView === 'eventos' }"
                  @click="directTo('eventos')"
              >
                Eventos
              </button>
            </li>
            <li class="nav-item">
              <button
                  class="nav-link btn btn-link"
                  :class="{ 'active': actualView === 'contacto' }"
                  @click="directTo('contacto')"
              >
                Contacto
              </button>
            </li>
          </ul>
        </div>
    </div>
  </nav>
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
.navbar {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 15px 10%;
  transition: all 0.3s ease;
}

.navbar-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 10px 0;
}

.logo-img {
  height: 100px;
  transition: height 0.3s ease;
}

.nav-link {
  font-family: "Lora", sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #444444;
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  margin: 0 10px;
  padding: 10px 12px;
}

.nav-link::after {
  content: "";
  position: absolute;
  width: 0;
  height: 3px;
  background-color: #cb9755;
  bottom: 0;
  left: 0;
  transition: width 0.1s ease-in;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link:hover {
  color: #cb9755;
}

.nav-link.active::after {
  width: 100%;
}

/* Estilos responsivos */
@media (max-width: 1070px) {
  .logo-img {
    height: 80px;
  }

  .navbar {
    padding: 15px 5%;
  }

  .navbar-fixed {
    padding: 10px 5%;
  }

  .nav-link {
    font-size: 16px;
    margin: 5px 0;
  }
}

</style>