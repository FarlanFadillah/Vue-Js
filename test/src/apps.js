
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
        sayHello : function() {
            alert("Hello");
        }
    }
})

var w = new Vue({
    el: "#app2",
    data : {
        title : "Hello",
        text : ''
    },
    methods : {
        say : function(params){
            alert(params);
        },
        sayHello : function(){
            alert("Hello");
        }
    }
})
