import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({

    state: {
        user: undefined,
        info: [
            {name:'张俊杰'},
            {phone:'12345678910'},
            {eamil:'xxxx@163.com'}
        ]
    },
    mutations: {
        login (state, payload) {
            state.user = payload
            localStorage.setItem('user', payload)
        },
        logout (state) {
            state.user = undefined
        }
    },

    actions: {
        login (context, payload) {
            context.commit('login', payload)
        },
        logout (context) {
            context.commit('logout')
        }
    }
})

export default store//对外告诉全局，以上内容缓存到store中