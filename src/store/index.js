import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { GET_TAGNAMES_ACTION, TAGNAMES_MUTATION, GET_TAGNAMESBYSEARCH_ACTION, GET_QUESTIONS_ACTION, QUESTIONS_MUTATION, SELECTEDTAGMUTATION } from '../type/index';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        inputValue: "",
        tagNames: [],
        questions: [],
        selectedTag: "",
    },
    mutations: {
        [TAGNAMES_MUTATION](state, value) {
            state.tagNames = value;
            state.selectedTag = value[0].name;
        },
        [QUESTIONS_MUTATION](state, data) {
            state.questions = data;
        },
        [SELECTEDTAGMUTATION](state, value) {
            state.selectedTag = value;
        }
    },
    actions: {
        [GET_TAGNAMES_ACTION](store) {
            // axios.get("https://api.stackexchange.com/2.2/tags?order=desc&sort=popular&site=stackoverflow")
            axios.get("/tagList.json")
                .then( async (res) => {
                    var data = res.data.items.slice(0, 10);
                    await store.commit(TAGNAMES_MUTATION, data);
                    // axios.get(`https://api.stackexchange.com/2.2/search?order=desc&sort=activity&tagged=${data[0].name}&site=stackoverflow`)
                    axios.get("/test.json")
                    .then((res) => {
                        store.commit(QUESTIONS_MUTATION, res.data.items);
                    })
                })
        },
        [GET_TAGNAMESBYSEARCH_ACTION](store, value)
        {
            console.log(store, value);
            // axios.get(`https://api.stackexchange.com/2.2/tags/${value}/related?site=stackoverflow`)
            //     .then( async(res) => {
            //         var data = res.data.items.slice(0, 10);
            //         await store.commit(TAGNAMES_MUTATION, data);
            //         axios.get(`https://api.stackexchange.com/2.2/search?order=desc&sort=activity&tagged=${data[0].name}&site=stackoverflow`)
            //         .then((res) => {
            //             store.commit(QUESTIONS_MUTATION, res.data.items);
            //         })
            //     })
        },
        [GET_QUESTIONS_ACTION](store, value) {
            // axios.get(`https://api.stackexchange.com/2.2/search?order=desc&sort=activity&tagged=${value}&site=stackoverflow`)
            console.log(value);
            axios.get("/test.json")
                .then((res) => {
                    store.commit(QUESTIONS_MUTATION, res.data.items);
                })   
        }
    },
})