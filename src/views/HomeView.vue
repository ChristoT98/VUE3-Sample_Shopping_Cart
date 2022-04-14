<template>
  <div class="home">
    <ItemDescriptionComponent :item="item" :active="active.item_drawer" />
    <div class="product-cards-container">
        <ProductCard v-for="item in items" :key="item.id" :item="item" @view-item="viewItem($event)" />
    </div>
  </div>
</template>

<script>
import itemData from '../data/itemData.js'
import ProductCard from '../components/ProductCard.vue'
import ItemDescriptionComponent from '../components/ItemDescriptionComponent.vue'

export default {
  name: 'Home',
  components: {
    ProductCard,
    ItemDescriptionComponent,
  },
  data() {
    return {
      items: itemData,
      item: null,
      active: {
        item_drawer: false,
      }
    }
  },
  methods: {
    viewItem (item) {
      this.item = item
      this.active.item_drawer = true
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
