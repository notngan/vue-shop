<template>
  <div class="product">
    <router-link :to="'/details/'+product._id" class="product-link">
      <div class="product__image">
        <img
          class="img-responsive" :src="product.image" alt="">
      </div>
      <div class="product_description">
        <div class="product_info">
          <small>{{product.manufacturer.name}}</small>
          <h4>{{product.name}}</h4>
        </div>
        <div class="product_price-cart">
          ${{product.price}}
        </div>
      </div>
    </router-link>
    <div class="product_action">
      <product-button :product="product" ></product-button>
    </div>
  </div>
</template>

<script>
  import ProductButton from './ProductButton.vue'
  export default {
    name: 'product-item',
    props: ['product'],
    components: {
      'product-button': ProductButton
    }
  }
</script>