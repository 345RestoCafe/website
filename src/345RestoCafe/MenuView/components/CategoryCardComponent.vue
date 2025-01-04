<template>
  <div class="product-card" :class="{'even': index % 2 === 1}">
    <p class="title">{{ title }}</p>
    <ul>
      <li v-for="(product, productIndex) in products" :key="productIndex">
        <div class="li-content">
          <template v-if="productIndex < menu_date.length">
            <h3 class="menu-date"> {{ menu_date[productIndex].day }} {{ menu_date[productIndex].date }}</h3>
          </template>
          <div class="list-header">
            <h3 class="product-name"> {{ product.name }}</h3>
            <p class="dotted-line"></p>
            <p class="product-price"><strong>S/.</strong>{{ product.price }}</p>
          </div>
          <div class="product-description">{{ product.description }}</div>
        </div>

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


<style scoped>
.product-card {
  position: relative;
  border: none;
  padding: 3rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  width: 560px;
  display: flex;
  flex-direction: column;
  z-index: 2;
  top: 50px;
  left: 395px;
}
.product-card.even {
  left: 0;
}

.menu-date{
  font-size: 20px;
  color: #c19655;
  line-height: 22px;
  text-align: left;
  margin-bottom: 5px;
  font-family: Lora, sans-serif;
  font-weight: 700;
}
.title {
  font-size: 20px;
  line-height: 27px;
  font-weight: 700;
  letter-spacing: 2.5px;
  font-family: Poppins, sans-serif;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 16px;
  margin: 0;
}

.list-header {
  margin: 0;
  display: flex;
  flex: 1;
  min-width: 50%;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  box-sizing: border-box;
  unicode-bidi: isolate;
}
.product-name {
  margin-top: 2px;
  margin-bottom: 5px;
  position: relative;
  font-weight: 600;
  font-size: 17px;
  letter-spacing: -0.84px;
  line-height: 18px;
  text-transform: none;
  font-family: Poppins, sans-serif;
}
.dotted-line {
  margin-top: 2px;
  flex-grow: 1;
  border-bottom: 1px dashed #bbb;
  margin-left: 10px;
  padding-top: 25px;
}
.product-price{
  margin-top: 2px;
  color: #212529;
  position: relative;
  padding-left: 15px;
  margin-bottom: 10px;
  z-index: 3;
  font-family: Lora, sans-serif;
  font-weight: 700;
  font-size: 17px;
  letter-spacing: 2.5px;
  line-height: 26px;
  text-transform: none;
  text-align: right;
}

.product-description {
  display: block;
  width: 100%;
  box-sizing: border-box;
  unicode-bidi: isolate;
  font-size: 13px;
  letter-spacing: 0;
  line-height: 19px;
  text-transform: none;
  color: #212529;
  font-family: Poppins, sans-serif;
}

ul {
  list-style: none;
  padding: 0;
}
li {
  align-items: center;
  padding-bottom: 5px;
  justify-content: space-between;
  overflow-x: auto;
}
</style>