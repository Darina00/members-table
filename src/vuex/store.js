import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        members: [],
    },
    actions: {
        GET_MEMBERS({commit}) {
            const arr = JSON.parse(localStorage.getItem('Members'));
            commit('SET_MEMBERS_TO_VUEX', arr);
        }
    },
    mutations: {
        SET_MEMBERS_TO_VUEX(state, members) {
            return state.members = members;
        }
    },
    getters: {
        MEMBERS(state) {
            return state.members;
        }
    },
})

export default store;