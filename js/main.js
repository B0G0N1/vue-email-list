const { createApp } = Vue;

createApp({
    data() {
        return {
            emailList: []
        };
    },
    methods: {
        generateEmail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(resp => {
                    this.emailList.push(resp.data.response);
                });
        }
    }
}).mount('#app');