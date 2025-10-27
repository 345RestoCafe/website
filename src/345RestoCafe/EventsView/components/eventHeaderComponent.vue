<script>
import GalleryComponent from "@/345RestoCafe/EventsView/components/galleryComponent.vue";

export default {
  name: "eventHeaderComponent",
  components: {GalleryComponent},
  data() {
    const images_path = import.meta.glob('@/assets/images/events/*', { eager: true, import: 'default' });
    return {
      images: [
        {
          itemImageSrc: images_path['/src/assets/images/events/Carrusel1.jpg'],
          alt: 'Eventos Image 1',
        },
        {
          itemImageSrc: images_path['/src/assets/images/events/Carrusel2.jpg'],
          alt: 'Eventos Image 2',
        },
        {
          itemImageSrc: images_path['/src/assets/images/events/Carrusel3.jpg'],
          alt: 'Eventos Image 3',
        },
        {
          itemImageSrc: images_path['/src/assets/images/events/Carrusel5.jpg'],
          alt: 'Eventos Image 5',
        },
      ]
    }
  }
}
</script>

<template>
  <div class="container my-5">
    <div class="row justify-content-center align-items-center">
      <div class="col-12 col-md-6 mb-4 mb-md-0 d-flex flex-column justify-content-center">
        <h4>En Resto Café 345 ofrecemos eventos y más</h4>
        <hr>
        <p>Brindamos servicios para diversos tipos de eventos, sean corporativos o sociales, con una atención exclusiva que cuida los mínimos detalles.</p>
        <p>Contamos con una variedad de platos, bocaditos, bebidas y postres a su entera disposición que podrán encontrar de lunes a viernes desde las 8:00am hasta las 6:00pm.</p>
      </div>
      <div class="col-12 col-md-6 text-center p-4">
        <GalleryComponent :images="images"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
h4 {
  font-family: Lora, sans-serif;
  font-weight: 500;
  font-size: 35px;
  letter-spacing: -1.75px;
}
p {
  text-align: justify;
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.5;
  margin-top: 30px;
}
hr {
  border: 3px solid #b08c64;
  width: 30%;
  margin-top: 20px;
  margin-bottom: 20px;
  opacity: 1;
  background-color: #b08c64;
}
</style>