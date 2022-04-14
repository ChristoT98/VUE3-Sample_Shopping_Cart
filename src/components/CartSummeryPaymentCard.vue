<template>
    <div class="card" >
        <h3>Cart Total : {{cartTotal.toFixed(2)}}</h3>
        <button class="btn-view-item">Pay by Credit Card</button>
    </div>
</template>

<script>
    export default {
        computed: {
            cartTotal () {
                return this.$store.getters.cartTotal
            }
        }
    }
</script>