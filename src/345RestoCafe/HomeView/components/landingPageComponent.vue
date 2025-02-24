<script>
export default {
  name: "landingPageComponent"
}
</script>

<template>
  <section class="bg-dark text-left d-flex align-items-center justify-content-center">
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
  </section>
</template>

<style scoped>
section {
  background-image: url("../../../assets/images/home_view/banner-inicio01.jpg");
  height: 100vh;
  background-size: cover;
  background-position: center;
  position: relative;
}
section h1 {
  font-family: "Times New Roman", sans-serif;
  letter-spacing: 0;
  font-weight: 400;
  font-size: 6rem;
}
section a {
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
</style>