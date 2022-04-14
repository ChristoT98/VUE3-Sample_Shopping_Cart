<template>
  <div class="home">
    <div class="product-cards-container">
        <ProductCard v-for="item in items" :key="item.id" :item="item" @view-item="viewItem($event)" />
    </div>
    
  </div>
</template>

<script>
import itemData from '../data/itemData.js'
import ProductCard from '../components/ProductCard.vue'

export default {
  name: 'Home',
  components: {
    ProductCard,
  },
  data() {
    return {
      items: itemData,
      item: null
    }
  },
  methods: {
    viewItem (item) {
      this.item = item
      console.log(this.item)
    }
  },
}
</script>

<style lang="scss">
  .product-cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
</style>
