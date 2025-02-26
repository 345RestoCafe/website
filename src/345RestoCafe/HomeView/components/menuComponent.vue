<script>
export default {
  name: "menuComponent"
}
</script>

<template>
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
            <img src="../../../assets/images/plato/plato1.jpg" alt="Plato1" class="img-fluid">
          </div>
          <div class="col-6 col-sm-3 d-flex justify-content-center">
            <img src="../../../assets/images/plato/plato2.jpg" alt="Plato2" class="img-fluid">
          </div>
          <div class="col-6 col-sm-3 d-flex justify-content-center">
            <img src="../../../assets/images/plato/plato3.jpg" alt="Plato3" class="img-fluid">
          </div>
          <div class="col-6 col-sm-3 d-flex justify-content-center">
            <img src="../../../assets/images/plato/plato4.jpg" alt="Plato4" class="img-fluid">
          </div>
        </div>
      </div>
      <div class="mt-5 mb-5 text-center">
        <a type="button" class="btn-relief btn btn-dark" href="https://345restocafe.com/la-carta" target="_self">Ver Carta</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.carta h5{
  font-size: 17px;
  font-family: Lora, sans-serif;
  font-weight: 400;
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
</style>