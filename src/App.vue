<template>
  <nav id="nav">
    <router-link :class="{active: $route.name === 'Home'}" to="/">Home</router-link> |
    <router-link :class="{active: $route.name === 'Cart'}" to="/cart">Cart</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}

body {
  background-color: rgb(245, 245, 245)
}

#nav {
  padding: 20px;
  width: 100%;
  height: 50px;
  background-color: #04182c;
  line-height: 30px;

  a {
    color: white;
    font-weight: bold;
    text-decoration: none;
    margin: 0 5px 0 5px;
    font-size: 1.25rem;

    &.active {
    color: #04182c;
    background-color: white;
    padding: 6px;
    border-radius: 5px;
  }
  }
}

.text-center {
  text-align: center;
}
</style>
