<template>
    <div class="card">
        <div class="header">
            <h3>{{item.name}}</h3>
            <h4>In Cart : {{item.quantity}}</h4>
            <h4>Total Cost : {{itemCost.toFixed(2)}}</h4>
        </div>
        <p>{{description}}</p>
    </div>
</template>

<script>
    export default {
        name: 'CartItemCard',
        props: ['item'],
        computed: {
            description () {
                return this.item.description.substring(0,120)
            },
            itemCost () {
                return this.item.price * this.item.quantity
            }
        }
    }
</script>

<style lang="scss">
    .card {
        width: 80%;
        height: auto;
        border-radius: 5px;
        border: 1px solid gray;
        background-color: white;
        box-shadow: 0 0 5px gray;
        margin: 1% 5% 1% 5%;
        padding: 10px;
        text-align: left;

        .header {
            display: flex;
            justify-content: space-around;
        }
    }
</style>