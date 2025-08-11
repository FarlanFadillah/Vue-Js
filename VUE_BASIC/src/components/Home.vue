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

function sayHello() {
    alert("Hello");
}
function say(word){
    alert(word);
}
const items = {
    Home : "Home Button",
    Messages : "Messages Button",
    About : "About Button"
}

</script>


<template>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde molestiae nisi libero, temporibus amet aliquam dignissimos quos animi, voluptatem omnis tenetur aspernatur odio, aperiam et voluptatibus possimus. Ea, eius in.</p>

    <h1 :class ="classHallo" :id >{{ hallo.toUpperCase() }}</h1>
    <div :class="classHallo" v-html="hallo"></div>

    <button @click="sayHello" :disabled="buttonDis" >Click This</button>
    <br>
    <a  v-bind="data">{{ data["text"] }}</a>

    <div v-for="(value, key, index) in items">
        <p>{{ index }}</p>
        <button v-on:click="say(value)">{{ key }}</button>
    </div>

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

button {
    background-color: blue;
    color: white;
    border-color: gray;
}
</style>