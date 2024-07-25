// Creao APP  di Vue.js
const { createApp } = Vue;

createApp({
    data() {
        return {
            emailList: []
        };
    },
    methods: {
        // Metodo per generare lista di 10 Email
        generateEmailList () {
            // Pulisco ogni volta l'array
            this.emailList = [];
            // Itero 10 volte
            for (let i = 0; i < 10; i++) {
                // Recupero valore da API
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(resp => {
                    this.emailList.push(resp.data.response);
                });
            }
        }
    }
}).mount('#app');