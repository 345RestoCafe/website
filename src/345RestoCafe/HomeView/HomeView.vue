<template>
  <!-- Main title -->
  <header class="bg-dark text-left d-flex align-items-center justify-content-center">
    <div class="opacity-container">
      <div class="container">
        <div class="row justify-content-center text-center align-items-center">
          <div class="col-12">
            <h1 class="text-primary m-5">345 Resto Café</h1>
            <div class="mt-5">
              <a type="button" class="btn btn-primary text-white p-4 pt-3 pb-3 mt-3" href="https://345restocafe.com/la-carta/" target="_self">VER CARTA</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- About Us -->
  <section class="about container">
    <div class="row mt-5">
      <!-- Mosaico -->
      <div class="col-12 col-md-6">
        <div class="d-md-flex flex-md-row h-100 gap-3 d-grid">
          <!-- Imagen grande -->
          <div class="col-12 col-md-6 h-100 d-md-flex d-none">
            <img src="../../assets/images/home_view/About1.jpg"
                 alt="Imagen Grande"
                 class="img-fluid w-100 h-100 object-fit-cover" />
          </div>
          <!-- Imágenes pequeñas -->
          <div class="col-12 col-md-6 d-flex flex-column gap-3">
            <img src="../../assets/images/home_view/About2.jpg"
                 alt="Imagen Pequeña 1"
                 class="img-fluid w-100 h-50 object-fit-cover flex-grow-1" />
            <img src="../../assets/images/home_view/About3.jpg"
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
        <button type="button" class="btn-relief btn btn-dark">Ver más</button>
      </div>
    </div>
  </section>

  <!-- Carrusel de reseñas -->
  <section class="reviews mt-5">
    <div class="container">
      <div class="row justify-content-center">
        <div id="carouselReviews" class="carousel slide carousel-dark text-black shadow p-3 mb-5 bg-body-tertiary rounded" data-bs-ride="carousel">
          <div class="carousel-inner text-center">
            <div class="carousel-item active">
              <i class="pi pi-comments review-icon"></i>
              <div class="review-text">
                <p>Cálido y tranquilo espacio, que te permite disfrutar y compartir en tranquilidad. Su carta presenta una exquisita variedad a elegir y los postres son una delicia.</p>
                <h5>Cliente</h5>
                <h4>Regina Angulo</h4>
              </div>
            </div>
            <div class="carousel-item">
              <i class="pi pi-comments review-icon"></i>
              <div class="review-text">
                <p>Me encantó la atención, no te sientes como cliente, te sientes como un amigo de siempre. Me encantó la comida, el ambiente tranquilo y muy relajado.</p>
                <h5>Cliente</h5>
                <h4>Susana Álvarez</h4>
              </div>
            </div>
            <div class="carousel-item">
              <i class="pi pi-comments review-icon"></i>
              <div class="review-text">
                <p>360 LGC MIND SPORT estuvo en 345 Resto Café Restaurante degustando su plato fuerte «Bistec a lo Pobre» excelente almuerzo, un lugar acogedor y excelente servicio.</p>
                <h5>Cliente</h5>
                <h4>Luis Gómez</h4>
              </div>
            </div>
            <div class="carousel-item">
              <i class="pi pi-comments review-icon"></i>
              <div class="review-text">
                <p>Combinación perfecta de buen servicio al cliente y comida muy sabrosa. Mi visita a 345 Resto Café superó todas mis expectativas.</p>
                <h5>Cliente</h5>
                <h4>Roberto Zagal</h4>
              </div>
            </div>
            <div class="carousel-item">
              <i class="pi pi-comments review-icon"></i>
              <div class="review-text">
                <p>La atención y comunicación es excelente, te ofrecen alternativas para que tu experiencia sea agradable y quedes satisfecho.</p>
                <h5>Cliente</h5>
                <h4>Sergio Bustamante</h4>
              </div>
            </div>
            <div class="carousel-item">
              <i class="pi pi-comments review-icon"></i>
              <div class="review-text">
                <p>345 Resto Cafe sirve sin lugar a dudas el mejor sándwich de bondiola! Ambiente acogedor y atención de primera.</p>
                <h5>Cliente</h5>
                <h4>Cecilia López</h4>
              </div>
            </div>
          </div>

          <!-- Botones de navegación -->
          <button class="carousel-control-prev d-lg-flex d-none" type="button" data-bs-target="#carouselReviews" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next d-lg-flex d-none" type="button" data-bs-target="#carouselReviews" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- La Carta -->
  <section class="carta container">
    <div class="row mt-5 justify-content-center">
      <div class="col-md-12">
        <h5 class="text-primary text-center mt-5">Que Ofrecemos</h5>
        <h4 class="text-black text-center">La Carta</h4>
        <p class="text-light text-center mt-4">Variedad de platos, bocaditos, bebidas y postres a su entera disposición</p>
      </div>
      <div class="col-md-10">
        <div class="row">
          <div class="col-6 col-sm-3 d-flex justify-content-center">
            <img src="../../assets/images/home_view/plato1.jpg" alt="Plato1" class="img-fluid">
          </div>
          <div class="col-6 col-sm-3 d-flex justify-content-center">
            <img src="../../assets/images/home_view/plato2.jpg" alt="Plato2" class="img-fluid">
          </div>
          <div class="col-6 col-sm-3 d-flex justify-content-center">
            <img src="../../assets/images/home_view/plato3.jpg" alt="Plato3" class="img-fluid">
          </div>
          <div class="col-6 col-sm-3 d-flex justify-content-center">
            <img src="../../assets/images/home_view/plato4.jpg" alt="Plato4" class="img-fluid">
          </div>
        </div>
      </div>
      <div class="mt-5 text-center">
        <button type="button" class="btn-relief btn btn-dark">Ver Carta</button>
      </div>
    </div>
  </section>

</template>

<script>
import {defineComponent} from "vue";
import UnderDevelopment from "@/public/components/UnderDevelopmentView.vue";

export default defineComponent({
  components: {UnderDevelopment}
})
</script>

<style scoped>
/* Main title */
header {
  background-image: url("../../assets/images/home_view/banner-inicio01.jpg");
  height: 100vh;
  background-size: cover;
  background-position: center;
  position: relative;
}
header h1 {
  font-family: "Times New Roman", sans-serif;
  letter-spacing: 0;
  font-weight: 400;
  font-size: 6rem;
}
header a {
  font-family: "Lora", sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 28px;
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 22px;
  border-radius: 10px;
  opacity: 0.85;
  border-width: 0;
}

/* About us */
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

/* Carrusel de reseñas */
.reviews {
  background-image: url("../../assets/images/home_view/background-2.jpg");
  min-height: 50vh; /* Usa min-height en lugar de height fija */
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 20px;
}
.reviews .carousel-inner {
  padding: 20px 0;
}
.reviews .slide {
  background-color: white;
  padding: 35px 50px 50px 50px;
  width: 90%;
  border-radius: 5px;
  min-height: 370px;
  max-width: 1000px; /* Evita que se haga demasiado ancho */
  margin: 0 auto; /* Centra en pantallas grandes */
}
.reviews .review-icon {
  background: #c19655;
  color: white;
  padding: 20px;
  border-radius: 100px;
  font-size: 1.5rem;
  margin: 30px auto;
}
.reviews .review-text {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}
.reviews p {
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  line-height: 1.8;
  font-weight: 400;
}
.reviews h5 {
  font-weight: 400;
  font-size: 14px;
  margin-top: 7px;
  margin-bottom: 28px;
  color: #96969699;
  text-transform: uppercase;
}
.reviews h4 {
  font-weight: 700;
  font-size: 17px;
  letter-spacing: -1px;
  color: black;
}
.reviews .carousel-control-next,
.reviews .carousel-control-prev {
  width: 10%;
}
@media (max-width: 768px) {
  .reviews .slide {
    width: 95%; /* Más ancho en móviles */
    padding: 25px;
  }
  .reviews .carousel-control-next,
  .reviews .carousel-control-prev {
    width: 15%; /* Asegura que los botones sean accesibles */
  }
  .reviews .carousel-control-prev {
    left: -30px; /* Reduce la posición */
  }
  .reviews .carousel-control-next {
    right: -30px;
  }
}
@media (max-width: 480px) {
  .reviews .review-icon {
    font-size: 1.2rem;
    padding: 15px;
  }
  .reviews p {
    font-size: 14px;
  }
  .reviews h5 {
    font-size: 13px;
  }
  .reviews h4 {
    font-size: 16px;
  }
  .reviews .carousel-control-prev,
  .reviews .carousel-control-next {
    width: 20%;
    left: -10px;
    right: -10px;
  }
}

/* La Carta */
.carta h5{
  font-size: 17px;
  font-family: Lora, sans-serif;
  font-weight: 500;
  letter-spacing: 2.5px;
  text-transform: uppercase;
}
.carta h4{
  font-size: 35px;
  font-family: Lora, sans-serif;
  font-weight: 500;
  letter-spacing: -1.75px;
}
.carta p {
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  line-height: 1.8;
  font-weight: 400;
}
.carta img {
  max-width: 100%;
  height: auto;
}
</style>