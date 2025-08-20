const app = Vue.createApp({
    data() {
        return {
            message: "Hello World!",
            x : 0,
            y : 0,
        }
    }, 
    methods : {
        sayHello(){
            alert("Hello");
        },
        sum(x, y){
            return x + y;
        }
    }
})
app.mount("#app");