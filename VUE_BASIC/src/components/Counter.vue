<script setup>
import { ref } from 'vue';

const count = ref(0);

function increment(){
    count.value += 2;
}
</script>



<template> 
    <h1>Counter : {{ count }}</h1>
    <button v-on:click="increment">Increment</button>
</template>

<style>

</style>