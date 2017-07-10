<template>
<div id="app">
  <img src="./assets/logo.png">
  <p>{{ totalPrice }}</p>
  <router-view></router-view>
  <router-link :to="{ name: 'comA', params: {} }">coma</router-link>
  <router-link :to="{ name: 'comB', params: {} }">comb</router-link>
  <router-link :to="{ name: 'hello', params: {} }">comb</router-link>
</div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    totalPrice() {
      return this.$store.state.totalPrice
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
