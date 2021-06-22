import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { GET_TAGNAMES_ACTION, TAGNAMES_MUTATION } from '../type/index';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        inputValue: "",
        tagNames: [],
    },
    mutations: {
        [TAGNAMES_MUTATION](state, value) {
            state.tagNames = value;
        },
    },
    actions: {
        [GET_TAGNAMES_ACTION](store) {
            axios.get("https://api.stackexchange.com/2.2/tags?order=desc&sort=popular&site=stackoverflow")
                .then((res) => {
                    store.commit(TAGNAMES_MUTATION, res.data.items.slice(0, 10));
                })
        }
    },
    //   getters: {
    //     TagGetter(state) {
    //         return state.tagNames.filter((items, index) => {
    //             return index < 3;
    //         })
    //     }
    //   }
})