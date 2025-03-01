<script>
export default {
  name: "reviewCarrouselComponent"
}
</script>

<template>
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
</template>

<style scoped>
.reviews {
  background-image: url("../../../assets/images/background/background1.jpg");
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
</style>