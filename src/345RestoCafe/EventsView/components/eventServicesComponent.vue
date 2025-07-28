<script>
import desayunosImage from "@/assets/images/events/desayunos.png";
import almuerzosImage from "@/assets/images/events/almuerzos.png";
import cateringImage from "@/assets/images/events/catering.png";
import coffeeBreakImage from "@/assets/images/events/coffee-break.png";
import coctelImage from "@/assets/images/events/coctel.png";
import afterOfficeImage from "@/assets/images/events/after-office.png";
import eventosEspecialesImage from "@/assets/images/events/eventos-especiales.png";
import cenaImage from "@/assets/images/events/cena.png";

export default {
  name: "eventServicesComponent",
  data(){
    return {
      service: [
        { name: "Desayunos", image: desayunosImage },
        { name: "Almuerzos", image: almuerzosImage },
        { name: "Catering para reuniones de trabajo", image: cateringImage },
        { name: "Coffee Break para eventos", image: coffeeBreakImage },
        { name: "Cocteles para eventos especiales", image: coctelImage },
        { name: "After Office (jueves y viernes)", image: afterOfficeImage},
        { name: "Eventos especiales (cumpleaños, baby showers, día del padre/madre, etc.)", image: eventosEspecialesImage },
        { name: "Cenas a pedido con programación", image: cenaImage }
      ]
    }
  }
}
</script>

<template>
  <div class="eventServicesComponent py-3">
    <div class="container my-5">
      <div class="row">
        <div class="col-12 text-center">
          <h2>Atendemos</h2>
          <h3>Servicios gastronómicos de alta calidad</h3>
          <div class="container mt-5">
            <div class="row g-4">
              <div
                  v-for="(item, index) in service"
                  :key="index"
                  class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
              >
                <div class="w-100 d-flex flex-column align-items-center">
                  <img
                      :src="item.image"
                      class="card-img-top img-fluid"
                      :alt="item.name"
                      style="width: 6rem; max-width: 100%; height: auto;"
                  />
                  <div class="card-body text-center my-4 w-100">
                    <h5 class="card-title">{{ item.name }}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.eventServicesComponent{
  background-color: #eeeeee;
}
h2 {
  font-family: Lora, sans-serif;
  font-size: 30px;
  font-weight: 600;
  color: #b08c64;
  line-height: 42px;
}
h3{
  font-family: Poppins, sans-serif;
  font-weight: 600;
  font-size: 16px;
}
</style>