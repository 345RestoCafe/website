<script>
import CategoryCardComponent from "@/345RestoCafe/MenuView/components/CategoryCardComponent.vue";

export default {
  name: "MenuView",
  components: {
    CategoryCardComponent
  },
  data() {
    return {
      menu: [
        { name: "Fetuccini con salsa de carne", description: "Consomé", price: 20},
        { name: "Asado con puré", description: "Ensalada con palta", price: 20},
        { name: "Pollo al cilindro", description: "", price: 20},
        { name: "Lomo saltado", description: "Ensalada delicia", price: 20},
        { name: "Milanesa de pollo con papas fritas", description: "Ensalada César", price: 20},
      ],
      ensaladas: [
        { name: "Ensalada tropical (De la semana)", description: "Filete de pollo, lechuga orgánica, zanahoria rallada, tomate, pepino, garbanzo, fruta del día, pasas y pecanas, acompañado de aliño agridulce.", price: 23},
        { name: "Ensalada asiática (De la semana)", description: "Filete de atún, lechuga orgánica, tomate, vainita, alverjita, semilla de chía y aliño salado.", price: 23},
        { name: "Ensalada César", description: "Trozos de pollo, pan tostado,  queso rallado, queso fresco en cubos y aliño de yogurt griego", price: 23},
        { name: "Ensalada Shiliu", description: "Filete de pollo o atún, tomate, queso fresco, pimienta, zanahoria y vinagreta", price: 23},
        { name: "Ensalada Hawaiana", description: "Filete de pollo o atún, piña, alberja, pimiento, zanahoria, papa, pasas y aliño agridulce", price: 23},
        { name: "Ensalada 345", description: "Filete de pollo al panko, tomate cherry, pepino, queso, pasas o pecanas, fruta del día y aliño agridulce", price: 25},
        { name: "Ensalada de frutas", description: "", price: 20}
      ],
      sandwiches: [
        { name: "Pollo", description: "Pan ciabatta, pollo deshilachado y lechuga, acompañado de nuestra mayonesa de la casa.", price: 10 },
        { name: "Mixto", description: "Pan de molde, jamón inglés y queso Edam.", price: 12 },
        { name: "Jamón Ahumado", description: "Pan ciabatta, jamón ahumado y lechuga, acompañado de nuestra mayonesa de la casa.", price: 12 },
        { name: "Triple Caliente de Pollo", description: "Pan de molde, pollo deshilachado, queso y jamón.", price: 15 },
        { name: "Triple Caliente con Huevo", description: "Pan de molde, jamón, queso y huevo frito.", price: 12 },
        { name: "Bondiola", description: "Pan ciabatta, bondiola al horno y lechuga, acompañado de nuestra mayonesa de la casa y salsa criolla.", price: 14 },
        { name: "Pollo con palta", description: "Pan ciabatta,pollo deshilachado, con mayonesa y palta en láminas.", price: 13 },
        { name: "Triple de Palta, Tomate y Huevo", description: "Tres capas de pan de molde , acompañadas de palta tomate y huevo.", price: 13 },
        { name: "Roast Beef", description: "Pan ciabatta, roast beef, lechuga, queso edam y mayonesa.", price: 16 },
        { name: "Suprema", description: "Pan ciabatta, suprema de pollo con mayonesa, lechuga, tomate y palta.", price: 14 }
      ],
      platos: [
        { name: "Dieta de pollo - Sopa", description: "Sujeto a disponibilidad", price: 15 },
        { name: "Bondiola con papas y ensalada", description: "Sujeto a disponibilidad", price: 25 },
        { name: "Filete de pollo a la plancha", description: "", price: 25 },
        { name: "Fettuccini al alfredo", description: "", price: 25 },
        { name: "Bistec con papas doradas", description: "", price: 25 },
        { name: "Milanesa de res con papas doradas", description: "", price: 27 },
        { name: "Fettuccini al pesto bistec flambeado", description: "", price: 25 },
        { name: "Fettuccini al pesto con apanado", description: "", price: 27 },
        { name: "Bistec a lo pobre", description: "", price: 27 },
        { name: "Lomo saltado", description: "", price: 27 },
        { name: "Lomo saltado a lo pobre", description: "", price: 29 },
        { name: "Tacu Tacu con lomito al jugo", description: "", price: 27 },
        { name: "Tacu Tacu con apanado", description: "", price: 29 },
        { name: "Porción de papas doradas o fritas", description: "", price: 5 },
        { name: "Porción de arroz", description: "", price: 5 },
        { name: "Porción de huevo frito", description: "", price: 3 },
      ],
      desayunos: [
        { name: "Desayuno 345 (Hasta las 10:30)", description: "Sandwich mixto o de pollo + café americano", price: 14 },
        { name: "Desayuno 345 con jugo (Hasta las 10:30)", description: "Sandwich mixto o de pollo + jugo a elección", price: 16 },
        { name: "Omelette simple", description: "", price: 10 },
        { name: "Omelette con adicionales", description: "", price: 14 },
        { name: "Dos Huevos fritos unidades", description: "Acompañado de 2 unidades de tostadas o 1 pan", price: 9 },
        { name: "Tres huevos fritos o revueltos", description: "Acompañado de 2 unidades de tostadas o 1 pan", price: 11 },
        { name: "Huevos revueltos", description: "Acompañado de 2 unidades de tostadas o 1 pan", price: 9 },
        { name: "Huevos revueltos con jamón", description: "Acompañado de 2 unidades de tostadas o 1 pan", price: 10 },
        { name: "Huevos revueltos con jamón y palta", description: "Acompañado de 2 unidades de tostadas o 1 pan", price: 12 },
        { name: "Palta con 2 unidades de tostadas o pan", description: "", price: 9 },
        { name: "Vaso de leche", description: "", price: 5 },
        { name: "Huevos revueltos", description: "", price: 5 },
        { name: "Adicional de palta", description: "", price: 5 },
      ],
      piqueos: [
        { name: "Mini mixtos 16 u", description: "", price: 35 },
        { name: "Mini sandwich de pollo 16u", description: "", price: 35 },
        { name: "Mix de mini chorizos", description: "", price: 40 },
        { name: "Tequeños de jamón y queso 16u", description: "", price: 40 },
        { name: "Mini hamburguesas 16u", description: "", price: 40 },
        { name: "Mini croisants de jamón y queso 16u", description: "", price: 40 },
        { name: "Tabla de quesos", description: "Queso gouda, queso emmental, queso brie, salame, lomito ahumado, prosciuto, roast beef, mini tostadas, aceitunas y frutos", price: 70 },
        { name: "Bolitas de yuca con queso 16u", description: "", price: 40 },
        { name: "Tapas de prosciuto con queso crema 16u", description: "", price: 50 },
        { name: "Langostinos al panko 16u", description: "", price: 50 },
        { name: "Canapés de guacamole con langostinos 16u", description: "", price: 50 },
      ],
      postres: [
        { name: "Trufa de chocolate", description: "", price: 3 },
        { name: "Macarrón con buttercream", description: "", price: 3 },
        { name: "Galleta chocochips", description: "", price: 4 },
        { name: "Brownie", description: "", price: 4 },
        { name: "Alfajor", description: "", price: 4 },
        { name: "Crema volteada", description: "", price: 8 },
        { name: "Keke de plátano", description: "", price: 7 },
        { name: "Keke de plátano con ganage de chocolate", description: "", price: 8 },
        { name: "Keke de zanahoria", description: "", price: 7 },
        { name: "Carrot cake", description: "", price: 12 },
        { name: "Suspiro a la Limeña", description: "", price: 10 },
        { name: "Crocante de manzana", description: "", price: 10 },
        { name: "Pye de Limón", description: "", price: 10 },
        { name: "Cuchareable", description: "Consultar por disponibilidad de variaciones", price: 10 },
        { name: "Torta de Chocolate", description: "", price: 12 },
        { name: "Cheesecake", description: "Consultar por disponibilidad de sabores", price: 12 },
        { name: "New York Cheesecake", description: "", price: 15 }
      ],
      infusiones: [
        { name: "Té de canela y clavo", description: "", price: 6 },
        { name: "Té de frutos del bosque", description: "", price: 8 },
        { name: "Té verde", description: "", price: 6 },
        { name: "Manzanilla", description: "", price: 6 },
        { name: "Anís", description: "", price: 6 },
      ],
      cafe: [
        { name: "Café americano", description: "", price: 7 },
        { name: "Espresso", description: "", price: 7 },
        { name: "Espresso Doble", description: "", price: 9 },
        { name: "Café con leche", description: "", price: 9 },
        { name: "Latte", description: "", price: 9 },
        { name: "Cappuccino", description: "", price: 9 },
        { name: "Mocaccino", description: "", price: 12 },
        { name: "Chocolate Caliente", description: "", price: 12 },
        { name: "Adicional de leche", description: "", price: 2},
      ],
      frappes: [
        { name: "Frappuccino", description: "", price: 14 },
        { name: "Mocha Frappuccino", description: "", price: 16 },
        { name: "Caramel Frappuccino", description: "", price: 16 },
        { name: "Baileys Frappuccino", description: "", price: 18 },
        { name: "Adicional de chip de chocolate", description: "", price: 2 },
        { name: "Adicional de crema chantilli", description: "", price: 2 },
      ],
      bebidas: [
        { name: "Agua San Mateo sin gas", description: "", price: 3 },
        { name: "Agua San Mateo con gas", description: "", price: 3 },
        { name: "Coca Cola 600 ml", description: "", price: 4 },
        { name: "Inca Kola 600 ml", description: "", price: 4 },
        { name: "Fanta 600 ml", description: "", price: 4 },
        { name: "Sprite 600 ml", description: "", price: 4 },
        { name: "Vaso de refresco del día", description: "", price: 5 },
        { name: "Vaso de Limonada", description: "", price: 7 },
        { name: "Limonada 1 litro", description: "", price: 15 },
        { name: "Emoliente 1 litro", description: "", price: 15 },
        { name: "Maracuyá 1 litro", description: "", price: 15 },
        { name: "Chicha Morada 1 litro", description: "", price: 15 },
        { name: "Limonada frozen 1 litro", description: "", price: 18 },
      ],
      licores: [
        { name: "Copa de vino", description: "", price: 15 },
        { name: "Cuba Libre", description: "", price: 18 },
        { name: "Chilcano de maracuya", description: "", price: 18 },
        { name: "Chilcano clásico", description: "", price: 18 },
        { name: "Algarrobina", description: "", price: 18 },
        { name: "Baileys", description: "", price: 18 },
        { name: "Tequila José Cuervo", description: "", price: 18 },
        { name: "Pisco Sour", description: "", price: 20 },
        { name: "345", description: "", price: 20 },
        { name: "Whisky etiqueta roja", description: "", price: 20 },
        { name: "Whisky etiqueta negra", description: "", price: 24 },
        { name: "Descorche de vino", description: "", price: 25 },
      ],
      cervezas: [
        { name: "Henineken", description: "", price: 12 },
        { name: "Corona", description: "", price: 12 },
        { name: "Cusqueña Dorada", description: "", price: 10 },
        { name: "Pilsen", description: "", price: 10 },
      ],
      jugos: [
        { name: "Jugo de papaya", description: "", price: 12 },
        { name: "Jugo de piña", description: "", price: 12 },
        { name: "Jugo de fresa", description: "", price: 12 },
        { name: "Jugo de melón", description: "", price: 12 },
        { name: "Jugo surtido", description: "", price: 12 },
        { name: "Adicional de leche", description: "", price: 2 },
      ],
      menu_date: [
        { day: "Lunes", date: "24/2"},
        { day: "Martes", date: "25/2"},
        { day: "Miércoles", date: "26/2"},
        { day: "Jueves", date: "27/2"},
        { day: "Viernes", date: "28/2"},
      ]
    };
  },
  created() {
    const images = import.meta.glob('@/assets/images/menu/*', { eager: true, import: 'default' });

    this.categories = [
      { title: 'MENU DE LA SEMANA', products: this.menu, image: images['/src/assets/images/menu/Menu.jpg'] },
      { title: 'ENSALADAS A LA CARTA', products: this.ensaladas, image: images['/src/assets/images/menu/Ensaladas.jpg'] },
      { title: 'SANDWICHES', products: this.sandwiches, image: images['/src/assets/images/menu/Sandwiches.jpg'] },
      { title: 'PLATOS A LA CARTA', products: this.platos, image: images['/src/assets/images/menu/Platos.jpg'] },
      { title: 'DESAYUNOS', products: this.desayunos, image: images['/src/assets/images/menu/Desayunos.jpg'] },
      { title: 'PIQUEOS (segun disponibilidad)', products: this.piqueos, image: images['/src/assets/images/menu/Piqueos.jpg'] },
      { title: 'POSTRES', products: this.postres, image: images['/src/assets/images/menu/Postres.jpg'] },
      { title: 'INFUSIONES', products: this.infusiones, image: images['/src/assets/images/menu/Infusiones.jpg'] },
      { title: 'CAFÉS', products: this.cafe, image: images['/src/assets/images/menu/Cafes.jpg'] },
      { title: 'FRAPPÉS', products: this.frappes, image: images['/src/assets/images/menu/Frappes.jpg'] },
      { title: 'BEBIDAS FRÍAS', products: this.bebidas, image: images['/src/assets/images/menu/Bebidas.jpg'] },
      { title: 'LICORES', products: this.licores, image: images['/src/assets/images/menu/Licores.jpg'] },
      { title: 'CERVEZAS', products: this.cervezas, image: images['/src/assets/images/menu/Cervezas.jpg'] },
      { title: 'JUGOS', products: this.jugos, image: images['/src/assets/images/menu/Jugos.jpg'] }
    ];
  }

};
</script>

<template>
  <div>
    <!-- Banner -->
    <div class="separator position-relative text-white text-center">
      <div class="overlay"></div>
      <div class="position-relative z-1">
        <nav class="breadcrumb justify-content-center">
          <a class="" href="https://345restocafe.com/">HOME</a>
          <i class="pi pi-angle-right mx-2 mt-1"/>
          <a class="" href="#">LA CARTA</a>
        </nav>
        <h1 class="separator-title">La Carta</h1>
      </div>
    </div>

    <!-- Wave Divider -->
    <div class="divider">
      <svg viewBox="0 0 1920 116" preserveAspectRatio="none">
        <path fill="#FFF" d="M453,92c11.7-4.87,28.46-11.43,49-18c42.29-13.52,76.36-19.33,115-25c51.58-7.57,100.28-14.72,171-20
          c24.87-1.86,82.88-5.76,158-6c69.99-0.23,122.54,2.82,159,5c51.18,3.06,95.17,5.69,155,14c71.5,9.94,115.42,21.02,127,24
          c33.7,8.68,61.62,17.79,82,25C1130.33,91.33,791.67,91.67,453,92z" />
      </svg>
    </div>

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
    </div>
  </div>
</template>

<style scoped>
.separator {
  background: url("../../assets/images/menu/Menu-Banner.jpg") center/cover no-repeat;
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
.separator-title {
  font-size: 49px;
  font-weight: 700;
}
.divider {
  position: relative;
  top: -100px;
  width: 100%;
  overflow: hidden;
}
.divider svg {
  display: block;
  width: 100%;
}
.image {
  position: relative;
  left: -100px;
}
.image.even{
  left: 100px;
}

@media (max-width: 768px) {
  .separator {
    padding: 100px 0;
  }
}
</style>

