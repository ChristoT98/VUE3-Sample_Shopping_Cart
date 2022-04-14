<template>
<h1>Your Cart</h1>
  <div class="card-container">
    <CartItemCard 
      v-for="item in items" 
      :key="item.id"
      :item="item"
    />

    <CartSummeryPaymentCard /> 
  </div>
</template>

<script>
import CartItemCard from '@/components/CartItmCard.vue'
import CartSummeryPaymentCard from '@/components/CartSummeryPaymentCard.vue'

export default {
  name: 'CartView',
  components: {
    CartItemCard,
    CartSummeryPaymentCard,
  },
  data() {
    return {
      
    }
  },
  computed: {
      items () {
        return this.$store.getters.cartItems
      }
  },
}
</script>

<style lang="scss" scoped>
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
</style>
