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
          itemImageSrc: images_path['/src/assets/images/events/Carrusel4.jpg'],
          alt: 'Eventos Image 4',
        },
        {
          itemImageSrc: images_path['/src/assets/images/events/Carrusel10.jpeg'],
          alt: 'Eventos Image 10',
        },
        {
          itemImageSrc: images_path['/src/assets/images/events/Carrusel11.jpeg'],
          alt: 'Eventos Image 11',
        },
        {
          itemImageSrc: images_path['/src/assets/images/events/Carrusel12.png'],
          alt: 'Eventos Image 12',
        },
        {
          itemImageSrc: images_path['/src/assets/images/events/Carrusel13.png'],
          alt: 'Eventos Image 13',
        },
        {
          itemImageSrc: images_path['/src/assets/images/events/Carrusel5.jpg'],
          alt: 'Eventos Image 5',
        },
        {
          itemImageSrc: images_path['/src/assets/images/events/Carrusel6.jpg'],
          alt: 'Eventos Image 6',
        },
        {
          itemImageSrc: images_path['/src/assets/images/events/Carrusel7.jpg'],
          alt: 'Eventos Image 7',
        },
        {
          itemImageSrc: images_path['/src/assets/images/events/Carrusel8.jpg'],
          alt: 'Eventos Image 8',
        },
        {
          itemImageSrc: images_path['/src/assets/images/events/Carrusel9.jpeg'],
          alt: 'Eventos Image 9',
        },
        {
          itemImageSrc: images_path['/src/assets/images/events/Carrusel14.png'],
          alt: 'Eventos Image 14',
        },
        {
          itemImageSrc: images_path['/src/assets/images/events/Carrusel15.png'],
          alt: 'Eventos Image 15',
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
        <h4>En Resto Café 345 hacemos de cada ocasión un momento especial</h4>
        <hr>
        <p class="mb-0">Brindamos espacios y servicios para la realización de eventos corporativos y sociales, ofreciendo una atención personalizada y cuidando cada detalle para crear experiencias a la medida de cada celebración.</p>
        <p>Contamos con propuestas personalizadas para cumpleaños, reuniones corporativas, aniversarios, celebraciones especiales y mucho más. Nos encargamos de cada detalle, desde la ambientación y decoración hasta la propuesta gastronómica, para que cada evento sea único y memorable.</p>
      </div>
      <div class="col-12 col-md-6 text-center p-4">
        <GalleryComponent :images="images" :interval="2500"/>
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