<script setup>
import { createApp, transformVNodeArgs } from 'vue';
import {ref} from 'vue';

defineProps({
    msg : String,
})

const showButton = ref(false)

const app = createApp(
    {
        data() {
            return {
                count : 0
            }
        }
    }
).mount("#buttons")

</script>

<template>
<h1>{{ msg }}</h1>
<div id="buttons">
    <button @click="showButton = !showButton">Show Button</button>
    <br>
    <button v-if="showButton">Click Me</button>
</div>

</template>

<style>
h1{
    color : red
}
</style>