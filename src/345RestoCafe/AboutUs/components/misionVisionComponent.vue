<script>
export default {
  name: "misionVisionComponent"
}
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-10">
          <h4 class="text-secondary my-5">Mision y Visión</h4>
          <div class="row justify-content-center">
            <div class="col-12 col-md-6 text-center">
              <img src="../../../assets/images/icons/icon9.png" alt="eventos" class="icon img-fluid"/>
              <h5 class="my-3 text-secondary">Misión</h5>
              <p class="p-3">Nuestra misión es ofrecer una experiencia culinaria excepcional a nuestros clientes, combinando sabores auténticos, ingredientes frescos y un servicio cálido y acogedor. Nos esforzamos por superar las expectativas de nuestros comensales en cada visita, brindándoles una experiencia gastronómica única y memorable.</p>
            </div>
            <div class="col-12 col-md-6 text-center">
              <img src="../../../assets/images/icons/icon10.png" alt="eventos" class="icon img-fluid"/>
              <h5 class="my-3 text-secondary">Visión</h5>
              <p class="p-3">Nuestra visión es convertirnos en el restaurante de referencia en nuestra comunidad, reconocido por nuestra excelencia en la cocina, el servicio excepcional y el ambiente acogedor. Buscamos ser el lugar al que las personas acudan para deleitar sus paladares con platos cuidadosamente elaborados, donde la calidad y la creatividad se fusionen en cada bocado.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-10 d-md-flex d-block my-5">
        <div class="col-12 col-md-4 text-center mb-5">
          <i class="pi pi-star text-primary mb-4"></i>
          <h6 class="text-primary">Calidad</h6>
          <p class="p-3">Nos comprometemos a ofrecer alimentos y bebidas de la más alta calidad, utilizando ingredientes frescos y seleccionados cuidadosamente.</p>
        </div>
        <div class="col-12 col-md-4 text-center mb-5">
          <i class="pi pi-lightbulb text-primary mb-4"></i>
          <h6 class="text-primary">Autenticidad</h6>
          <p class="p-3">Nos enorgullece ofrecer una experiencia auténtica y genuina a nuestros comensales. Nuestros platos reflejan las tradiciones culinarias y resaltan los sabores</p>
        </div>
        <div class="col-12 col-md-4 text-center mb-5">
          <i class="pi pi-check-circle text-primary mb-4"></i>
          <h6 class="text-primary">Buen Servicio</h6>
          <p class="p-3">Valoramos y nos esforzamos por brindar un servicio excepcional a nuestros clientes en cada interacción.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  background-color: #f4f4f4;
}
h4{
  font-family: Lora, sans-serif;
  font-weight: 700;
  font-size: 19px;
  text-transform: uppercase;
}
h5 {
  font-family: Poppins, sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  text-transform: uppercase;
  letter-spacing: -0.05em;
}
h6 {
  font-family: Poppins, sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.2;
  text-transform: uppercase;
}
p {
  font-size: 15px;
  line-height: 27px;
  font-family: Poppins, sans-serif;
}
img {
  width: 70px;
  height: auto;
}
i {
  font-size: 40px;
}
</style>