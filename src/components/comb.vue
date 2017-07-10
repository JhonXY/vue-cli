<template lang="html">
    <div>
        <p>wo caption</p>
        <button @click="addOne">add</button>
        <button @click="minusOne">minus</button>
    </div>
</template>

<script>
export default {
    name:'comB',
    data(){
        return {
            price: 7
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
