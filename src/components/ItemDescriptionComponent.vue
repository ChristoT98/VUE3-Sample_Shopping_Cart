<template>
    <div class="drawer-container" :class="{show: active}" @click="$emit('close-item-drawer')"></div>
    <div class="drawer" :class="{show: active}">
        <div class="drawer-close" @click="$emit('close-item-drawer')">
            X
        </div>
        <div v-if="item" class="item-details">
            <h3 class="text-center">{{item.name}}</h3>
            <p class="description">{{item.description}}</p>
            <h3 class="text-center">${{item.price.toFixed(2)}}</h3>
            <div class="cart-total" v-if="item_total">
                <h3>In Cart</h3>
                <h4>{{ item_total }}</h4>
            </div>
            <div class="btn-container">
                <button class="remove">-</button>
                <button class="add">+</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['item', 'active'],
        computed: {
            item_total () {
                return 56.00
                //return this.items.reduce((total, currentItem) => (total = total + currentItem),0)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .drawer-container {
        width: 100%;
        height: 100vh;
        position: fixed;
        left: 0;
        top: 0;
        background-color: rgba(151, 151, 151, 0.5);
        z-index: 5;
        display: none;
        transition: display .5s;

        &.show {
            display: block;
        }
    }

    .drawer {
        width: 90vw;
        height: 100vh;
        background-color: white;
        position: fixed;
        top: 0;
        left: -110vw;
        padding: 15px;
        transition: left 0.5s;
        z-index: 6;
        overflow-y : hidden;
        
        &.show {
            left: 0;
        }
    }

    .drawer-close {
        font-size:1.5rem;
        padding: 5px;
        border-radius: 5px;
        right: 10px;
        border: 2px solid rgb(128, 128, 128);
        color: rgb(163, 163, 163);
        width: 15px;
        float: right;
        cursor: pointer;

        &.hover {
            background-color: lightgray;
        }
    }

    .item-details {
        display: flex;
        justify-content: center;
        flex-direction: column;

        p.description {
            padding: 20px;
            line-height: 1.5rem;
        }

        .btn-container {
            button {
                width: 150px;
                border: none;
                padding: 10px;
                font-size: 1.25rem;
                border-radius: 5px;
                margin: 0 5px 50px 5px;
                cursor: pointer;
            }
        }
    }

    @media(min-width: 500px) {
        .drawer {
            width: 450px;
            overflow-y : scroll;
        }
    }
</style>