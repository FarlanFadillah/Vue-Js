const app = Vue.createApp({
    data() {
        return {
            message: "Hello World!",
            x : 0,
            y : 0,
            op : ['+', '-', 'x', '/'],
            op_val : 0
        }
    }, 
    methods : {
        sayHello(){
            alert("Hello");
        },
        sum(x, y){
            return x + y;
        },
        sub(x, y){
            return x - y;
        },
        times(x, y){
            return x * y;
        },
        div(x, y){
            return x/y;
        }
    }
}).mount("#app");