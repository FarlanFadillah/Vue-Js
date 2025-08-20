
const H = function (){
    alert("Hello asdf")
}
const sum = function(x, y){
    return x + y;
}

var v = new Vue({
    el : '#app',
    data : {
        bilangan : 1,
        msg : "Button",
        show : true,
        isi_text : '',
        isi_password : ''
    },
    methods : {
        sayHello : H
        
    }
})

var w = new Vue({
    el: "#app2",
    data : {
        title : "Hello",
        text : '',
        x : 0,
        y : 0,
        z : 0
    },
    methods : {
        say : function(params){
            alert(params);
        },
        sayHello : function(){
            alert("Hello");
        },
        Sum : function(params1, params2){
            return params1 + params2;
        }
    }
})
