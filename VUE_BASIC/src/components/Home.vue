<script setup>
const hallo         = "<h1>Hello Vue</h1>";
const classHallo    = "hallo";
const id            = "hallo";

const buttonDis     = false;

const data = {
    text : "Youtube",
    id: "blue",
    class : "red",
    href    : "https://www.youtube.com"
}

const notif = function() {
    console.info("Hello");
}

</script>


<template>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde molestiae nisi libero, temporibus amet aliquam dignissimos quos animi, voluptatem omnis tenetur aspernatur odio, aperiam et voluptatibus possimus. Ea, eius in.</p>

    <h1 :class ="classHallo" :id >{{ hallo.toUpperCase() }}</h1>
    <div :class="classHallo" v-html="hallo"></div>

    <button v-on:click="notif" :disabled="buttonDis" >Click This</button>
    <br>
    <a  v-bind="data">{{ data["text"] }}</a>

</template>

<style>
p{
    color : blue
}

#hallo {
    color : green
}

.hallo {
    color : red
}

.holla {
    color : blue
}

#blue{
    color : black
}

.red {
    color : orange
}
</style>