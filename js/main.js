const { createApp } = Vue;

createApp({
    data() {
        return {
            listaMail:[]
        }
    },
    methods: {
        ciclogenerazioneMail() {
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((risposta => {
                    this.listaMail.push(risposta.data.response)
                    ;
                }))
            }
        }
    },
    mounted() {
    this.ciclogenerazioneMail()
    }
}).mount("#app")