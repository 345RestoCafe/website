<template>
  <div class="separator">
    <div class="overlay">
      <div class="breadcrumb">
        <a href="https://345restocafe.com/">HOME</a> &gt; <a href="#">LA CARTA</a>
      </div>
      <h1 class="separator-title">La Carta</h1>
    </div>
  </div>
  <div class="view-container">
    <div class="divider">
      <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1920 116"
          preserveAspectRatio="none"
      >
        <path
            fill="#FFF"
            d="M453,92c11.7-4.87,28.46-11.43,49-18c42.29-13.52,76.36-19.33,115-25c51.58-7.57,100.28-14.72,171-20
              c24.87-1.86,82.88-5.76,158-6c69.99-0.23,122.54,2.82,159,5c51.18,3.06,95.17,5.69,155,14c71.5,9.94,115.42,21.02,127,24
              c33.7,8.68,61.62,17.79,82,25C1130.33,91.33,791.67,91.67,453,92z"
        />
        <rect y="90" fill="#FFF" width="1920" height="26"></rect>
      </svg>
    </div>
    <div v-for="(category, index) in categories" :key="index" :class="['container', { even: index % 2 === 1 }]">
      <div class="category-image">
        <img :src="category.image" :alt="category.title" :title="category.title" class="product-image"/>
      </div>
      <CategoryCardComponent
          :title="category.title"
          :products="category.products"
          :index="index"
          v-if="category.title === 'MENU DE LA SEMANA'"
          :menu_date="menu_date" />
      <CategoryCardComponent
          v-else
          :title="category.title"
          :products="category.products"
          :index="index"
          :menu_date="[]" />
    </div>
  </div>
</template>

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
<<<<<<< Updated upstream
<<<<<<< Updated upstream
        { name: "Olluquito y Cau Cau", description: "Salpicon de pollo", price: 20},
        { name: "Pollo a la plancha con puré de papa", description: "Enrrolado de jamón con verduras", price: 20},
        { name: "Frejol con seco de pollo", description: "Ensalada fresca", price: 20},
        { name: "Fetuccini a la huancaina con lomo al jugo", description: "Tequeños de queso", price: 20},
        { name: "Chuleta de bondiola con papa dorada", description: "Ensalada de verduras", price: 20},
=======
=======
>>>>>>> Stashed changes
        { name: "Lentejas con milanesa de pollo", description: "Choclo con queso, papa y crema huacatay", price: 20},
        { name: "Olluquito con carne o cau cau", description: "Salpicón de pollo", price: 20},
        { name: "Parrilla con papa dorada, arroz y ensalada", description: "Bife de vacio, pollo al cilindro o chancho a la caja china", price: 20},
        { name: "Pollo al horno con puré con espinacas", description: "Ensalada fresca", price: 20},
        { name: "Fideos canuto en salsa bolognesa", description: "Pan al ajo", price: 20},
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
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
        { name: "Desayuno 345", description: "Sandwich mixto o de pollo + café americano", price: 14 },
        { name: "Desayuno 345 con jugo", description: "Sandwich mixto o de pollo + jugo a elección", price: 16 },
        { name: "Omelette simple", description: "", price: 10 },
        { name: "Omelette con adicionales", description: "", price: 14 },
        { name: "Huevos revueltos con jamón + palta", description: "", price: 12 },
        { name: "2 huevos revueltos o fritos con 1 croissant*", description: "", price: 10 },
        { name: "3 huevos fritos o revueltos con pan o tostadas", description: "", price: 11 },
        { name: "Huevos revueltos con jamón + 2 unidades de tostadas o 1 pan", description: "", price: 10 },
        { name: "Huevos fritos 2 unidades con tostadas o pan", description: "", price: 9 },
        { name: "Huevos revueltos 2 unidades con tostadas o pan", description: "", price: 9 },
        { name: "Palta con 2 unidades de tostadas o pan", description: "", price: 9 },
        { name: "Vaso de leche", description: "", price: 5 },
        { name: "Huevos revueltos", description: "", price: 5 },
        { name: "Adicional de palta", description: "", price: 5 },
      ],
      piqueos: [
        { name: "Ronda de piqueos - mini mixtos 16 u", description: "", price: 35 },
        { name: "Ronda de piqueos - mini sandwich de pollo 16u", description: "", price: 35 },
        { name: "Ronda de piqueos - mix de mini chorizos", description: "", price: 40 },
        { name: "Ronda de piqueos - tequeños de jamón y queso 16u", description: "", price: 40 },
        { name: "Ronda de piqueos - mini hamburguesas 16u", description: "", price: 40 },
        { name: "Ronda de piqueos - mini croisants de jamón y queso 16u", description: "", price: 40 },
        { name: "Ronda de piqueos - tabla de quesos", description: "Queso gouda, queso emmental, queso brie, salame, lomito ahumado, prosciuto, roast beef, mini tostadas, aceitunas y frutos", price: 70 },
        { name: "Ronda de piqueos - bolitas de yuca con queso 16u", description: "", price: 40 },
        { name: "Ronda de piqueos - tapas de prosciuto con queso crema 16u", description: "", price: 50 },
        { name: "Langostinos al panko 16u", description: "", price: 50 },
        { name: "Ronda de piqueos - canapés de guacamole con langostinos 16u", description: "", price: 50 },
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
        { day: "Lunes", date: "6/1"},
        { day: "Martes", date: "7/1"},
        { day: "Miércoles", date: "8/1"},
        { day: "Jueves", date: "9/1"},
        { day: "Viernes", date: "10/1"},
      ]
    };
  },
  created() {
    this.categories = [
      { title: 'MENU DE LA SEMANA', products: this.menu, image: '../../../public/menu/Menu.jpg'},
      { title: 'ENSALADAS A LA CARTA', products: this.ensaladas, image: '../../../public/menu/Ensaladas.jpeg' },
      { title: 'SANDWICHES', products: this.sandwiches, image: '../../../public/menu/Sandwiches.jpg' },
      { title: 'PLATOS A LA CARTA', products: this.platos, image: '../../../public/menu/Platos.jpg' },
      { title: 'DESAYUNOS', products: this.desayunos, image: '../../../public/menu/Desayunos.jpg' },
      { title: 'PIQUEOS', products: this.piqueos, image: '../../../public/menu/Piqueos.jpg' },
      { title: 'POSTRES', products: this.postres, image: '../../../public/menu/Postres.jpg' },
      { title: 'INFUSIONES', products: this.infusiones, image: '../../../public/menu/Infusiones.jpg' },
      { title: 'CAFÉS', products: this.cafe, image: '../../../public/menu/Cafes.jpg' },
      { title: 'FRAPPÉS', products: this.frappes, image: '../../../public/menu/Frappes.jpg' },
      { title: 'BEBIDAS FRÍAS', products: this.bebidas, image: '../../../public/menu/Bebidas.jpg' },
      { title: 'LICORES', products: this.licores, image: '../../../public/menu/Licores.jpg' },
      { title: 'CERVEZAS', products: this.cervezas, image: '../../../public/menu/Cervezas.jpg' },
      { title: 'JUGOS', products: this.jugos, image: '../../../public/menu/Jugos.jpg' }
    ]
  }
};
</script>

<style scoped>
.view-container {
  margin-top: 100px;
  min-width: 1050px;
  font-family: Popins, sans-serif;
  justify-self: center;
  justify-items: center;
  justify-content: center;
}

.separator {
  position: relative;
  background-image: url("../../../public/menu/Menu-Banner.jpg");
  background-size: cover;
  background-position: center;
  padding: 150px 0;
  text-align: center;
  color: #ffffff;
  width: 100%;
  max-height: 10px;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
}
.breadcrumb {
  padding: 80px 0 0 0;
  font-size: 20px;
  letter-spacing: 2.5px;
  font-weight: 400;
  margin-bottom: 10px;
  font-family: Lora, sans-serif;
  color: #c19655;
}
.breadcrumb a {
  text-shadow: none;
  line-height: inherit;
  color: #c19655;
  text-decoration: none;
}
.breadcrumb a:hover {
  text-decoration: underline;
}
.separator-title {
  color: #ffffff;
  font-size: 49px;
  font-family: Lora, sans-serif;
  letter-spacing: 1px;
  font-weight: 700;
  margin: 0;
  padding: 10px 20px;
  display: inline-block;
}

.container{
  display: flex;
  position: relative;
  width: 100%;
  justify-items: left;
  margin-bottom: 100px;
}
.category-image{
  position: absolute;
  z-index: 1;
}
.container.even .category-image{
  right: 0;
}
.product-image {
  width: 100%;
  min-width: 200px;
  max-width: 500px;
  height: auto;
  overflow: clip;
  box-sizing: border-box;
  box-shadow: 0 0 21px -5px rgba(0, 0, 0, 0.2);
}

.divider {
  top: -145px;
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
  line-height: 0;
  z-index: 2;
}
.divider svg {
  display: block;
  width: 100%;
  height: auto;
}
.divider svg .path {
  fill: #FFFFFF;
}

@media(max-width: 1100px) {
  .view-container {
    min-width: 275px;
  }
  .divider {
    top: -125px;
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

  }
  .product-image {
    margin: 0;
  }
  .category-image {
    position: relative;
    width: 100%;
    max-width: 500px;
  }
}

@media(max-width: 430px) {
  .divider {
    top: -115px;
  }
}

</style>