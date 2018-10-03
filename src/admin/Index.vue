<template>
  <div class="admin">
    <div class="nav">
      <router-link to="/admin">View Products</router-link> |
      <router-link to="/admin/new">New Product</router-link> 
    </div>
    <router-view></router-view>
  </div>
</template>