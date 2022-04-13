<template>
    <div class="product-card">
        <h3>{{item.name}}</h3>
        <h5 class="price">${{item.price.toFixed(2)}}</h5>
        <p class="description">Description: {{ description }}...</p>
        <p class="category">{{item.category}}</p>
        <button class="btn-view-item">View Details</button>
    </div>
</template>

<script>
    export default {
        name: 'ProductCard',
        props: ['item'],
        computed: {
            description () {
                return this.item.description.substring(0, 100)
            }
        },
        data() {
            return {
                
            }
        },
    }
</script>

<style lang="scss" scoped>
    .product-card {
        width: 450px;
        height: auto;
        padding: 10px;
        border-radius: 5px;
        background-color: rgb(255, 255, 255);
        box-shadow: 0 0 5px gray;
        margin: 25px;

        h5.price {
            color: gray;
        }

        p.description {
            font-size: .75rem
        }

        p.category {
            color: gray;
        }

        button.btn-view-item {
            padding: 10px;
            background-color: rgb(4, 4, 99);
            border: none;
            color: white;
            font-size: 1.15rem;
            border-radius: 2px;
            cursor: pointer;
        }
    }

    @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
        .product-card {
                width: 500px;
                margin: 10px;
            }
    }

    @media (min-width: 500px) {
        .product-card {
            width: 340px;
            margin: 10px;
        }
    }

</style>