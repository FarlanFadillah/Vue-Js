
const app = Vue.createApp({
    data() {
        return {
            msg : "Api Aplication Testing",
            m_data : []
        }
    },
    methods : {
        loadApi() {
            let m_data_temp = this.m_data;
            var xhr = new XMLHttpRequest();
            var requestUrl = "https://api.restful-api.dev/objects";
            xhr.open("GET", requestUrl, true); 
            xhr.onload = function(){
                let datas = JSON.parse(xhr.responseText);
                for(let i = 0; i < datas.length; i++)
                {
                    let _id = datas[i]['id'];
                    let _name = datas[i]['name'];
                    m_data_temp.push({id : _id, name : _name});
                }
                // Handle data
            };
            xhr.send();
        }
    },
    mounted () {
        this.loadApi();
        console.log(this.m_data)
    }
}).mount("#app")
