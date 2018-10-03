<template>
  <div>
    <h1>Edit Page</h1>
    <product-form 
      @save-product="addProduct" 
      :model="model" 
      :manufacturers="manufacturers">
    </product-form>
  </div>
</template>

<script>
import ProductForm from '@/components/products/ProductForm.vue'
export default {
  components: {
    'product-form': ProductForm
  },
  data () {
    return {
      model: {},
      manufacturers: [
        {
          _id: 'sam',
          name: 'Samsung',
        },
        {
          _id: 'apple',
          name: 'Apple',
        },
        {
          _id: 'oppo',
          name: 'Oppo'
        }
      ],
    }
  },
  methods: {
    addProduct (model) {
      console.log('model', model);
    }
  }
}
</script>
