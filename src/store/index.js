import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        consulta: {
            nombre: '',
            correo: '',
            telefono: '',
            consultaUsuario: '',
        },
        edit: false,
        consultas: [],
        loading: false,
    },
    mutations: {
        GETCONSULTAS(state, consultas) {
            state.consultas = consultas;
            state.loading = false;
        },
        LOADINGDATOS(state) {
            state.loading = true;
        }
    },
    actions: {
        getConsultas(context) {
            context.commit('LOADINGDATOS');
            axios.get('https://us-central1-educaabogados.cloudfunctions.net/test/consultas')
                .then((accept) => {
                    let data = accept.data;
                    context.commit('GETCONSULTAS', data);
                });
        }
    },
    modules: {}
})