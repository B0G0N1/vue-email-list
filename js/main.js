const { createApp} = Vue;

createApp({
    data() {
        return {
            email: null
        }
    },
    methods: {
        generateEmail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(resp) => {
                console.log(resp.data.response);
            }
        }
    }
}).mount(`#app`);