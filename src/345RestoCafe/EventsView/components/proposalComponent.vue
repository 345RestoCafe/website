<script>
import GalleryComponent from "@/345RestoCafe/EventsView/components/galleryComponent.vue";

export default {
  name: "proposalComponent",
  components: {GalleryComponent}
}
</script>

<template>
  <div class="proposal py-5">
    <div class="container">
      <div class="row g-4 align-items-center">
        <div class="col-12 col-md-6 text-center">
          <GalleryComponent/>
        </div>
        <div class="col-12 col-md-6">
          <h2>Proponemos:</h2>
          <ul>
            <li>Descuentos en el servicio de menú para pedidos, semanales, quincenales o mensuales</li>
            <li>Pago con descuento por planilla (Con acuerdos con sus empresas)</li>
            <li>Contratos para atender cumpleaños de sus trabajadores (Tortas, bebidas, bocaditos, etc)</li>
            <li>Envío de postres, tortas o Box temáticos a pedido</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.proposal {
  padding: 50px 0;
  background-color: #eeeeee;
}
h2 {
  text-align: right;
  font-family: Lora, sans-serif;
  font-size: 38px;
  font-weight: 600;
  color: #b08c64;
  line-height: 42px;
}
li {
  direction: rtl;
  text-align: right;
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.5;
  margin-top: 30px;
  align-content: end;
}
</style>