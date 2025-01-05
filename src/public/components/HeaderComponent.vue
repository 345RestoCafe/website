<template>
  <div class="header-container">
    <div class="content">
      <div class="contact-numbers">
        <p class="info">Resto Café, Bar y Delivery</p>
        <p class="phone">+51 993 709 111 &nbsp;</p>
        <p class="info">/</p>
        <p class="info">Eventos</p>
        <p class="phone">+51 987 955 926</p>
      </div>

      <div class="mail-container">
        <i class="pi pi-envelope" style="font-size: 1rem"></i>
        <strong class="mail">&nbsp;&nbsp;contacto@345restocafe.com</strong>
        <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong>
        <i class="pi pi-envelope" style="font-size: 1rem"></i>
        <strong class="mail">&nbsp;&nbsp;eventos@345retocafe.com</strong>
      </div>

      <div class="social-media-container">
        <a class="pi pi-facebook" style="font-size: 1rem" href="https://www.facebook.com/profile.php?id=100092175221621"/>
        <a class="pi pi-instagram" style="font-size: 1rem" href="https://www.instagram.com/345restocafe/"/>
        <a class="pi pi-tiktok" style="font-size: 1rem" href="https://www.tiktok.com/@345restocafe"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style scoped>
.header-container{
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  background-color: #000;
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 0.8em;
  font-weight: 400;
  display: flex;
  justify-content: center;
  padding: 4px 0;
  transition: top 0.3s;
}
.header-container.hidden {
  top: -100px;
}
.content {
  display: flex;
  justify-content: space-between;
}

.contact-numbers{
  display: flex;
}
.info{
  padding: 0 10px;
}
.phone{
  font-weight: bold;
}

.mail-container{
  align-self: center;
  padding: 0 50px;
  display: flex;
}

.social-media-container{
  align-self: center;
}
a {
  color: #fff;
  text-decoration: none;
  padding: 0 5px;
}

@media (max-width: 1066px) {
  .header-container{
    font-size: 0.6em;
  }
  .content{
    flex-direction: column;
    padding: 5px;
  }
  .mail-container{
    padding: 10px 0;
  }
}

@media (max-width: 370px) {
  .header-container{
    font-size: 0.45em;
  }

}
</style>