<script>
import CategoryCardComponent from "@/345RestoCafe/MenuView/components/CategoryCardComponent.vue";
import BannerComponent from "@/345RestoCafe/MenuView/components/bannerComponent.vue";
import carta1 from "@/assets/images/menu/carta/Carta1.jpg";
import carta2 from "@/assets/images/menu/carta/Carta2.jpg";
import carta3 from "@/assets/images/menu/carta/Carta3.jpg";
import carta4 from "@/assets/images/menu/carta/Carta4.jpg";
import carta5 from "@/assets/images/menu/carta/Carta5.jpg";
import carta6 from "@/assets/images/menu/carta/Carta6.jpg";
import carta7 from "@/assets/images/menu/carta/Carta7.jpg";
import carta8 from "@/assets/images/menu/carta/Carta8.jpg";

export default {
  name: "MenuView",
  components: {
    BannerComponent,
    CategoryCardComponent
  },
  data() {
    return {
      carta1: carta1,
      carta2: carta2,
      carta3: carta3,
      carta4: carta4,
      carta5: carta5,
      carta6: carta6,
      carta7: carta7,
      carta8: carta8,
      menu: [
        { name: "Arroz tapado", description: "Ensalada fresca", price: 22},
        { name: "Picante de carne", description: "Palta rellena", price: 22},
        { name: "Bistec con frijoles", description: "Ensalada hawaiana", price: 22},
        { name: "Pollo al cilindro", description: "Acompañado de papa dorada y ensalada fresca", price: 22},
        { name: "Tallarin saltado oriental", description: "Sopa de Kion", price: 22},
      ],
      menu_date: [
        { day: "Lunes", date: "28/9"},
        { day: "Martes", date: "29/9"},
        { day: "Miércoles", date: "30/9"},
        { day: "Jueves", date: "1/10"},
        { day: "Viernes", date: "2/10"},
      ]
    };
  },
  created() {
    const images = import.meta.glob('@/assets/images/menu/*', { eager: true, import: 'default' });

    this.categories = [
      { title: 'MENU DE LA SEMANA', products: this.menu, image: images['/src/assets/images/menu/Menu.jpg'] }
    ];
  }

};
</script>

<template>
  <div>
    <BannerComponent/>
    <!-- Categorías -->
    <div class="container">
      <div class="row mb-5 justify-content-center" v-for="(category, index) in categories" :key="index">
        <!-- Imagen -->
        <div class="col-md-6 text-center my-5 image"
             :class="{ 'even': index % 2 === 1, 'order-md-2': index % 2 === 0 }">
          <img :src="category.image" :alt="category.title" class="img-fluid shadow rounded">
        </div>

        <!-- Tarjeta de categoría (se sobrepone a la imagen) -->
        <div class="col-md-6 my-5"
             :class="{ 'order-md-1': index % 2 === 0, 'order-md-2': index % 2 === 1 }">
          <div class="overlay-card">
            <CategoryCardComponent
                :title="category.title"
                :products="category.products"
                :index="index"
                :menu_date="category.title === 'MENU DE LA SEMANA' ? menu_date : []"
            />
          </div>
        </div>
      </div>
      <div class="row justify-content-center my-5">
        <div class="col-12 col-lg-10">
          <div class="pdf-container shadow rounded h-100">
            <img :src="carta1" alt="Carta del restaurante" class="img-fluid w-100 object-fit-cover">
            <img :src="carta2" alt="Carta del restaurante" class="img-fluid w-100 object-fit-cover">
            <img :src="carta3" alt="Carta del restaurante" class="img-fluid w-100 object-fit-cover">
            <img :src="carta4" alt="Carta del restaurante" class="img-fluid w-100 object-fit-cover">
            <img :src="carta5" alt="Carta del restaurante" class="img-fluid w-100 object-fit-cover">
            <img :src="carta6" alt="Carta del restaurante" class="img-fluid w-100 object-fit-cover">
            <img :src="carta7" alt="Carta del restaurante" class="img-fluid w-100 object-fit-cover">
            <img :src="carta8" alt="Carta del restaurante" class="img-fluid w-100 object-fit-cover">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image {
  position: relative;
  left: 0;
  transition: left 0.3s;
}
@media (min-width: 768px) {
  .image {
    left: -100px;
  }
  .image.even {
    left: 100px;
  }
}
@media (max-width: 767px) {
  .col-md-6 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .my-5 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  .image,
  .image.even {
     left: 0;
  }
}
</style>

