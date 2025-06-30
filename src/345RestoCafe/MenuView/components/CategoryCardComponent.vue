<script>
export default {
  data() {
    return {
      availability: [
          'ENSALADAS A LA CARTA',
          'SANDWICHES',
          'PLATOS A LA CARTA'
      ],
    };
  },
  name: "CategoryCardComponent",
  props: {
    title: {
      type: String,
      required: true,
    },
    products: {
      type: Array,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    menu_date: {
      type: Object,
      required: true,
      default: () => []
    }
  },
};
</script>

<template>
  <div class="container d-flex justify-content-center">
    <div class="card product-card mb-4" :class="{ 'even': index % 2 === 1 }">
      <div class="card-header bg-white text-uppercase fw-bold border-bottom mb-3">{{ title }}</div>
      <ul class="list-group list-group-flush">
        <li v-for="(product, productIndex) in products" :key="productIndex" class="list-group-item border-0">
          <template v-if="productIndex < menu_date.length">
            <h5 class="menu-date">{{ menu_date[productIndex].day }} {{ menu_date[productIndex].date }}</h5>
          </template>
          <div class="list-header d-flex justify-content-between align-items-center">
            <h6 class="product-name">{{ product.name }}</h6>
            <p class="dotted-line flex-grow-1 m-2"></p>
            <p class="product-price text-end"><strong>S/.</strong> {{ product.price }}</p>
          </div>
          <p class="product-description mb-2 mt-0">{{ product.description }}</p>
        </li>
      </ul>
      <p v-if="availability.some(item => title.includes(item))" class="text-center mt-4" style="font-size: 0.9rem">*Sujeto a disponibilidad</p>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  min-width: 650px;
  position: relative;
  border: none;
  padding: 3rem 3rem 1.5rem 3rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  width: 560px;
  display: flex;
  flex-direction: column;
  z-index: 2;
  top: 50px;
  left: 100px;
}
.product-card.even {
  left: -100px;
}
.menu-date {
  font-size: 20px;
  color: #c19655;
  font-weight: bold;
  margin-bottom: 5px;
  font-family: Lora, sans-serif;
}
.card-header {
  font-size: 20px;
  letter-spacing: 2.5px;
  font-family: Poppins, sans-serif;
  padding-bottom: 16px;
}
.list-header {
  display: flex;
  align-items: center;
  width: 100%;
}
.dotted-line {
  flex-grow: 1;
  border-bottom: 1px dashed #bbb;
}
.product-name {
  font-weight: 600;
  font-size: 17px;
  font-family: Poppins, sans-serif;
}
.product-price {
  font-weight: bold;
  font-size: 17px;
  font-family: Lora, sans-serif;
}
.product-description {
  font-size: 13px;
  font-family: Poppins, sans-serif;
  color: #212529;
}
</style>
