import { createStore } from 'vuex'

function updateLocalStorage (cart) {
  localStorage.setItem('cart', JSON.stringify(cart))
}

export default createStore({
  state: {
    cart: [],
  },
  getters: {
    productQuentity: state => item => {
      const productItem =state.cart.find(i => i.id === item.id)

      if (productItem) {
        return productItem.quantity
      }else {
        return null
      }
    },
    cartItems : state => {
      return state.cart
    }
  },
  mutations: {
    addToCart (state, item) {
      let productItem = state.cart.find(i => i.id === item.id)

      if (productItem) {
        productItem.quantity++
      } else {
        state.cart.push({...item, quantity: 1})
      }

      updateLocalStorage(state.cart)
    },
    removeFromCart (state, item) {
      let productItem = state.cart.find(i => i.id === item.id)

      if (productItem) {
        if(productItem.quantity > 0) {
          productItem.quantity--
        }
      } else {
        state.cart.filter(i => i.id !== item.id)
      }

      updateLocalStorage(state.cart)
    },
    updateCartFromLocalStorage(state) {
      const cart = localStorage.getItem('cart')
      if (cart) {
        state.cart = JSON.parse(cart)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
