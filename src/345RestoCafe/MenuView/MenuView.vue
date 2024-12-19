<template>
  <div class="view-container">
    <div class="container-impar">
      <img class="product-image" src="../../../public/a.png">
      <CategoryCardComponent class="impar" title="Ensaladas a la Carta" :products="ensaladas" />
    </div>
    <div class="container-par">
      <CategoryCardComponent class="par" title="Sandwiches" :products="sandwiches" />
      <img class="product-image" src="../../../public/a.png">
    </div>
    <div class="container-impar">
      <img class="product-image" src="../../../public/a.png">
      <CategoryCardComponent class="impar" title="Platos a la Carta" :products="platos" />
    </div>
    <div class="container-par">
      <CategoryCardComponent class="par" title="Desayunos" :products="desayunos" />
      <img class="product-image" src="../../../public/a.png">
    </div>
    <div class="container-impar">
      <img class="product-image" src="../../../public/a.png">
      <CategoryCardComponent class="impar" title="Piqueos" :products="piqueos" />
    </div>
    <div class="container-par">
      <CategoryCardComponent class="par" title="Postres" :products="postres" />
      <img class="product-image" src="../../../public/a.png">
    </div>
    <div class="container-impar">
      <img class="product-image" src="../../../public/a.png">
      <CategoryCardComponent class="impar" title="Infusiones" :products="infusiones" />
    </div>
    <div class="container-par">
      <CategoryCardComponent class="par" title="Café" :products="cafe" />
      <img class="product-image" src="../../../public/a.png">
    </div>
    <div class="container-impar">
      <img class="product-image" src="../../../public/a.png">
      <CategoryCardComponent class="impar" title="Frappés" :products="frappes" />
    </div>
    <div class="container-par">
      <CategoryCardComponent class="par" title="Bebidas Frías" :products="bebidas" />
      <img class="product-image" src="../../../public/a.png">
    </div>
    <div class="container-impar">
      <img class="product-image" src="../../../public/a.png">
      <CategoryCardComponent class="impar" title="Licores" :products="licores" />
    </div>
    <div class="container-par">
      <CategoryCardComponent class="par" title="Cervezas" :products="cervezas" />
      <img class="product-image" src="../../../public/a.png">
    </div>
    <div class="container-impar">
      <img class="product-image" src="../../../public/a.png">
      <CategoryCardComponent class="impar" title="Jugos" :products="jugos" />
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
      ensaladas: [
        { name: "Ensalada tropical", description: "Filete de pollo, lechuga orgánica, zanahoria rallada, tomate, pepino, garbanzo, fruta del día, pasas y pecanas, acompañado de aliño agridulce.", price: 20},
        { name: "Ensalada asiática", description: "Filete de atún, lechuga orgánica, tomate, vainita, alverjita, semilla de chía y aliño salado.", price: 20},
        { name: "Ensalada 345", description: "Filete de pollo al panko, tomate cherry, pepino, queso, pasas o pecanas, fruta del día y aliño agridulce", price: 20},
        { name: "Ensalada César", description: "Trozos de pollo, pan tostado,  queso rallado, queso fresco en cubos y aliño de yogurt griego", price: 20},
        { name: "Ensalada Shiliu", description: "Filete de pollo o atún, tomate, queso fresco, pimienta, zanahoria y vinagreta", price: 20},
        { name: "Ensalada Hawaiana", description: "Filete de pollo o atún, piña, alberja, pimiento, zanahoria, papa, pasas y aliño agridulce", price: 20},
        { name: "Ensalada de frutas", description: "", price: 20}
      ],
      sandwiches: [
        { name: "Pollo", description: "Pan ciabatta, pollo deshilachado y lechuga, acompañado de nuestra mayonesa de la casa.", price: 9 },
        { name: "Mixto", description: "Pan de molde, jamón inglés y queso Edam.", price: 10 },
        { name: "Jamón Ahumado", description: "Pan ciabatta, jamón ahumado y lechuga, acompañado de nuestra mayonesa de la casa.", price: 12 },
        { name: "Triple Caliente de Pollo", description: "Pan de molde, pollo deshilachado, queso y jamón.", price: 12 },
        { name: "Triple Caliente con Huevo", description: "Pan de molde, jamón, queso y huevo frito.", price: 12 },
        { name: "Bondiola", description: "Pan ciabatta, bondiola al horno y lechuga, acompañado de nuestra mayonesa de la casa y salsa criolla.", price: 14 },
        { name: "Pollo con palta", description: "Pan ciabatta,pollo deshilachado, con mayonesa y palta en láminas.", price: 12 },
        { name: "Triple de Palta, Tomate y Huevo", description: "Tres capas de pan de molde , acompañadas de palta tomate y huevo.", price: 12 },
        { name: "Roast Beef", description: "Pan ciabatta, roast beef, lechuga, queso edam y mayonesa.", price: 16 },
        { name: "Suprema", description: "Pan ciabatta, suprema de pollo con mayonesa, lechuga, tomate y palta.", price: 12 }
      ],
      platos: [
        { name: "Dieta de pollo - Sopa*", description: "", price: 15 },
        { name: "Milanesa de res con papas doradas", description: "", price: 25 },
        { name: "Bistec a lo pobre", description: "", price: 25 },
        { name: "Bistec con papas doradas", description: "", price: 25 },
        { name: "Bondiola con papas y ensalada*", description: "", price: 25 },
        { name: "Lomo saltado", description: "", price: 25 },
        { name: "Filete de pollo a la plancha", description: "", price: 25 },
        { name: "Fettuccini al pesto con apanado", description: "", price: 25 },
        { name: "Fettuccini al pesto bistec flambeado", description: "", price: 25 },
        { name: "Tacu Tacu con bistec encebollado o apanado", description: "", price: 25 },
        { name: "Tacu Tacu con lomito al jugo", description: "", price: 25 },
        { name: "Porción de papas doradas o fritas", description: "", price: 5 },
        { name: "Porción de arroz", description: "", price: 5 },
        { name: "Porción de huevo frito", description: "", price: 3 },
      ],
      desayunos: [
        { name: "Desayuno 345", description: "Sandwich mixto o de pollo + café americano", price: 12 },
        { name: "Desayuno 345 con jugo", description: "Sandwich mixto o de pollo + jugo a elección", price: 14 },
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
        { name: "Pye de Limón", description: "", price: 10 },
        { name: "Pye de Maracuya*", description: "", price: 10 },
        { name: "Torta de Chocolate", description: "", price: 10 },
        { name: "Cheesecake de fresa*", description: "", price: 10 },
        { name: "Cheesecake de arandanos*", description: "", price: 10 },
        { name: "Cheesecake de maracuya*", description: "", price: 10 },
        { name: "Suspiro a la Limeña*", description: "", price: 10 },
        { name: "Mousse de maracuyá*", description: "", price: 8 },
        { name: "Crocante de manzana", description: "", price: 8 },
        { name: "Crema volteada", description: "", price: 8 },
        { name: "Keke de plátano con ganage de chocolate", description: "", price: 7 },
        { name: "Keke de plátano", description: "", price: 6 },
        { name: "Carrot cake", description: "", price: 7 },
        { name: "Keke de zanahoria", description: "", price: 6 },
        { name: "Galleta chocochips", description: "", price: 4 },
        { name: "Brownie", description: "", price: 4 },
        { name: "Alfajor", description: "", price: 4 },
        { name: "Macarrón con buttercream", description: "", price: 3 },
        { name: "Trufa de chocolate", description: "", price: 3.50 },
        { name: "Cuchareable", description: "", price: 10 }
      ],
      infusiones: [
        { name: "Té de canela y clavo", description: "", price: 6 },
        { name: "Té de frutos del bosque", description: "", price: 8 },
        { name: "Té verde", description: "", price: 6 },
        { name: "Manzanilla", description: "", price: 6 },
        { name: "Anís", description: "", price: 6 },
      ],
      cafe: [
        { name: "Cortado", description: "", price: 7 },
        { name: "Café americano", description: "", price: 6 },
        { name: "Café con leche", description: "", price: 8 },
        { name: "Espresso", description: "", price: 5 },
        { name: "Espresso Doble", description: "", price: 8 },
        { name: "Latte", description: "", price: 8 },
        { name: "Cappuccino", description: "", price: 8 },
        { name: "Mocaccino", description: "", price: 10 },
        { name: "Chocolate Caliente", description: "", price: 10 },
        { name: "Espresso cortado", description: "", price: 6 },
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
        { name: "Coca Cola 600 ml", description: "", price: 4 },
        { name: "Inca Kola 600 ml", description: "", price: 4 },
        { name: "Fanta 600 ml", description: "", price: 4 },
        { name: "Sprite 600 ml", description: "", price: 4 },
        { name: "Frugos del valle 286 ml", description: "", price: 3 },
        { name: "Agua San Luis limón 625 ml", description: "", price: 4 },
        { name: "Agua San Luis piña + kion 625 ml", description: "", price: 4 },
        { name: "Agua San Mateo sin gas", description: "", price: 3 },
        { name: "Agua San Mateo con gas", description: "", price: 3 },
        { name: "Emoliente 1 litro", description: "", price: 10 },
        { name: "Maracuyá 1 litro", description: "", price: 10 },
        { name: "Chicha Morada 1 litro", description: "", price: 10 },
        { name: "Limonada frozen 1 litro", description: "", price: 12 },
        { name: "Vaso de Limonada", description: "", price: 7 },
        { name: "Indian tonic water britvic", description: "", price: 8 },
        { name: "Limonada 1 litro", description: "", price: 10 },
      ],
      licores: [
        { name: "Cuba Libre", description: "", price: 18 },
        { name: "Chilcano de maracuya", description: "", price: 18 },
        { name: "Chilcano clásico", description: "", price: 18 },
        { name: "Whisky etiqueta roja", description: "", price: 20 },
        { name: "Whisky etiqueta negra", description: "", price: 24 },
        { name: "Pisco Sour", description: "", price: 20 },
        { name: "345", description: "", price: 18 },
        { name: "Algarrobina", description: "", price: 18 },
        { name: "Baileys", description: "", price: 18 },
        { name: "Copa de vino", description: "", price: 15 },
        { name: "Tequila José Cuervo", description: "", price: 18 },
        { name: "Descorche de vino", description: "", price: 25 },
      ],
      cervezas: [
        { name: "Henineken 300ml", description: "", price: 12 },
        { name: "Corona 355ml", description: "", price: 12 },
        { name: "Cusqueña Dorada 310ml", description: "", price: 10 },
      ],
      jugos: [
        { name: "Jugo de papaya", description: "", price: 10 },
        { name: "Jugo de piña", description: "", price: 10 },
        { name: "Jugo de fresa", description: "", price: 10 },
        { name: "Jugo de melón", description: "", price: 10 },
        { name: "Jugo surtido", description: "", price: 10 },
        { name: "Adicional de leche", description: "", price: 2 },
      ],
    };
  },
};
</script>

<style scoped>
.view-container {
  padding-top: 200px;
  padding-bottom: 100px;
  min-width: 1000px;
  font-family: Popins, sans-serif;
  justify-self: center;
  justify-items: center;
}
.container-impar{
  display: flex;
  justify-content: left;
  min-width: 1000px;
  max-width: 1000px;
  padding: 50px 0;
}
.container-par {
  display: flex;
  justify-content: right;
  min-width: 1000px;
  max-width: 1000px;
}
.product-image {
  width: 500px;
  height: auto;
}

@media (max-width: 950px) {
  .view-container {
    width: 600px;
  }
}

@media (max-width: 578px) {
  .view-container {
    padding-top: 300px;
    width: 350px;
  }
}

@media (max-width: 578px) {
  .view-container {
    padding-top: 300px;
    width: 350px;
  }
}
</style>