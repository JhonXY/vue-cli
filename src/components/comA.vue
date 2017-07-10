<template lang="html">
  <ul>
      <li v-for="object in obList">{{object.name + object.version}}</li>
      <button @click="addOne">add</button>
      <button @click="minusOne">minus</button>
  </ul>
</template>

<script>
export default {
    name:'comA',
    data(){
        return{
            obList:[
                {
                name: 'vue',
                version: '2'
                },
            ],
            price: 5
        }
    },
    methods: {
        addOne(){
            this.$store.commit('increment', this.price)
        },
        minusOne(){
            this.$store.commit('decrement', this.price)
        }
    }
}
</script>

<style lang="css">
</style>
