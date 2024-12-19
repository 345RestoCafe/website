<template>
  <div class="product-card">
    <p class="title">{{ title }}</p>
    <ul>
      <li v-for="(product, index) in products" :key="index">
        <div class="li-content">
          <div class="product-name">{{ product.name }}</div>
          <div class="product-description">{{ product.description }}</div>
        </div>
        <div class="product-price">{{ product.price | currency }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
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
  },
};
</script>


<style scoped>
.product-card {
  border: 1px solid #ccc;
  padding: 50px;
  margin-bottom: 16px;
  background-color: #fff;
  width: 40%;
  box-shadow: black;
  display: flex;
  flex-direction: column;
}
.title {
  font-size: 20px;
  line-height: 20px;
  font-weight: 700;
  letter-spacing: 2.5px;
  font-family: Poppins, sans-serif;
}
.product-name {
  font-weight: 600;
  font-size: 14px;
  letter-spacing: -0.3px;
  text-transform: none;
  margin: 5px 0;
  font-family: Poppins, sans-serif;
}
.product-description {
  font-size: 12px;
  letter-spacing: 0;
  line-height: 18px;
  text-transform: none;
  font-family: Poppins, sans-serif;
}
.product-price {
  text-align: right;
  font-family: Lora, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 26px;
  text-transform: none;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  justify-content: space-between;
  padding: 4px 0;
  border-bottom: 1px solid #e0e0e0;
  overflow-x: auto;
}
.li-content {
  flex-direction: column;
}
li:last-child {
  border-bottom: none;
}
</style>