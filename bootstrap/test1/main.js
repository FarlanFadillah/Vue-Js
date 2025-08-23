const app = Vue.createApp({
    data() {
        return {
            Title : "Vue + Boostrap",
            homeHover : false,
            home_link : "nav-link",
            nav_link_active : "nav-link active",
            key : '',
            text : '',
            rColor : 100
        }
    },
    methods : {
        say(params){
            alert(params);
        },
        getKey(src){
            this.key = src.key;
        },
        changeColor(){
            this.rColor = 255
        }
    }
}).mount()

const form_app = Vue.createApp({
    data () {
        return {
            name_in : '',
            email_in: '',
            gender_in : '',
            picked_color : '#cfeef2',
            user_lists : [
                {
                    name : 'Farlan',
                    email : 'farlanf61@gmail.com',
                    gender : 'Male'
                },
                {
                    name : 'Adit',
                    email : 'Adit@gmail.com',
                    gender : 'Male'
                }
            ]
        }
    },
    methods : {
        addUser(){
            this.user_lists.push({name : this.name_in, email : this.email_in, gender : this.gender_in});
            this.name_in = '';
            this.email_in = '';
            this.gender_in = '';
        }
    }
}).mount("#form")
