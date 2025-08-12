<script setup>
import { ref } from 'vue';

const count = ref(
    {
        num : 0,
        name : "aa"
    }
);

function increment(){
    count.value = {
        ...count.value,
        num: count.value.num + 1 
    }
}
</script>



<template> 
    <h1>Counter : {{ count.num }}</h1>
    <button v-on:click="increment">Increment</button>
</template>

<style>

</style>