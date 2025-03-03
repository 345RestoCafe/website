<script>
export default {
  name: "bannerComponent"
}
</script>

<template>
  <div class="separator position-relative text-white text-center">
    <div class="overlay"></div>
    <div class="position-relative z-1">
      <nav class="breadcrumb justify-content-center">
        <a class="" href="https://345restocafe.com/">HOME</a>
        <i class="pi pi-angle-right mx-2 mt-1"/>
        <a class="" href="#">CONTACTO</a>
      </nav>
      <h1 class="separator-title">Contacto</h1>
    </div>
  </div>
</template>

<style scoped>
.separator {
  background: url("../../../assets/images/banner/contacto.jpg") center/cover no-repeat;
  padding: 150px 0;
}
.overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(34, 34, 34, 0.8);
}
.breadcrumb {
  font-size: 20px;
  letter-spacing: 2px;
  font-weight: 400;
  margin-bottom: 10px;
  color: #c19655;
  font-family: Lora, sans-serif;
}
.breadcrumb a {
  color: #c19655;
  text-decoration: none;
}
.breadcrumb a:hover {
  text-decoration: underline;
}
h1{
  font-family: Lora, sans-serif;
  font-size: 49px;
  letter-spacing: 1px;
  font-weight: 700;
}
@media (max-width: 768px) {
  .separator {
    padding: 100px 0;
  }
}
</style>