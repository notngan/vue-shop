<template>
<form @submit.prevent="saveProduct">
    <div class="form-group">
      <label>Name</label>
      <input
        type="text"
        placeholder="Name"
        v-validate="'required'"
        name="name"
        v-model="model.name"
        :class="{'form-control': true, 'error': errors.has('name')}"
      />
      <span v-show="errors.has('name')">Name is required</span>
    </div>

    <div class="form-group">
      <label>Price</label>
      <input 
        v-validate="'required'" 
        name="price" 
        class="form-control"
        type="number"
        placeholder="Price"
        v-model="model.price"
        :class="{'form-control': true, 'error': errors.has('price')}"
        />
      <span v-show="errors.has('price')">Price is required</span>
    </div>

    <div class="form-group">
      <label>Manufacturer</label>
      <select
        type="text"
        class="form-control"
        v-validate="'required'"  
        name="manufacturer"
        :class="{'form-control': true, 'error': errors.has('manufacturer') }"
        v-model="model.manufacturer"
      >
        <template v-for="manufacturer in manufacturers">
          <option 
            :value="manufacturer._id" 
            :key="manufacturer._id" 
            :selected="manufacturer._id == (model.manufacturer && model.manufacturer._id)"
          >
            {{manufacturer.name}}
          </option>
        </template>
      </select>
      <span v-show="errors.has('manufacturer')">Manufacturer is required</span>
    </div>

    <div class="form-group">
      <label>Image</label>
      <input 
        type="text"
        class="form-control"
        placeholder="Image"
        v-model="model.image"
        v-validate="'required'"
        name="image"
        :class="{'form-control': true,'error': errors.has('image') }"
        >
      <span v-show="errors.has('image')">Image is required and must be a valid URL</span>
    </div>

      <div class="form-group">
      <label>Description</label>
      <textarea
        type="number"
        class="form-control"
        placeholder="Description"
        rows="5"
        v-model="model.description"
        v-validate="'required'"
        name="description"
        :class="{'form-control': true, 'error': errors.has('description') }"></textarea>
      <span v-show="errors.has('description')">Description is required</span>
    </div>

    <div class="form-group new-button">
      <button class="button">
        <span v-if="isEditing">Update Product</span>
        <span v-else>Add Product</span>
      </button>
    </div>
  </form>
  
</template>

<script>
export default {
  props: ['model', 'isEditing', 'manufacturers'],
  methods: {
    saveProduct () {
      this.$emit('save-product', this.model)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.form-control.error {
  border-color: #FF3333;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(255, 71, 71, 0.6);
}
form {
  width: 500px;
  margin: 0 auto;
}
label {
  color: #2c3e50;
  font-weight: bold;
}
label, input, span, select, textarea {
  display: block;
  text-align: left;
  margin: 5px;
}
span {
  color: #FF3333;
}
input, select, textarea, button {
  padding: 10px 0;
  width: 100%;
  border-radius: 5px;
}
.form-group {
  margin: 20px 50px; 
}
button {
    float: left;
    background: #42b983;
    border-radius: 5px;
  span { 
    color: #2c3e50;
    text-align: center;
  }
}
</style>
