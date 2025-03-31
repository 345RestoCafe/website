<script>
export default {
  name: "aboutComponent"
}
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-6 mx-5">
        <h5 class="text-primary">Sobre Nosotros</h5>
        <h4>Resto Café 345</h4>
        <p>Resto Café 345 es un restaurante innovador y creativo que está orientado en ofrecer servicios gastronómicos de alta calidad con atención personalizada.</p>
        <p>Brindamos servicios para diversos tipos de eventos, sean corporativos o sociales, con una atención exclusiva que cuida los mínimos detalles.</p>
        <p>Contamos con una variedad de platos, bocaditos, bebidas y postres a su entera disposición que podrán encontrar de lunes a viernes desde las 8:00am hasta las 6:00pm.</p>
        <a type="button" class="btn-relief btn btn-dark" href="https://345restocafe.com/nosotros" target="_self">Ver más</a>
      </div>
      <div class="col-4 text-center align-self-center d-none d-md-block">
        <img class="img-fluid" src="../../../assets/images/about/About1.jpg" alt="345RestoCafe"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
h5 {
  font-size: 17px;
  font-family: Lora, sans-serif;
  font-weight: 500;
  letter-spacing: 2.5px;
  text-transform: uppercase;
}
h4 {
  font-family: Lora, sans-serif;
  font-weight: 500;
  font-size: 35px;
  letter-spacing: -1.75px;
}
p {
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
</style>