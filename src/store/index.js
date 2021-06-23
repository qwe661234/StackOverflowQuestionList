import Vue from 'vue'
import Vuex from 'vuex'
import { LOADING_MUTATION, PAGESIZE_MUTATION, GET_TAGNAMES_ACTION, TAGNAMES_MUTATION, GET_TAGNAMESBYSEARCH_ACTION, GET_QUESTIONS_ACTION, QUESTIONS_MUTATION, SELECTEDTAGMUTATION } from '../type/index';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        inputValue: "",
        tagNames: [],
        questions: [],
        selectedTag: "",
        pageSize: 0,
        questionStorage: [],
        loading: false,
    },
    mutations: {
        [TAGNAMES_MUTATION](state, value) {
            state.tagNames = value;
            state.selectedTag = value[0].name;
        },
        [QUESTIONS_MUTATION](state, data) {
            state.questionStorage = data;
            state.questions = data.slice(0, state.pageSize);
        },
        [SELECTEDTAGMUTATION](state, value) {
            state.selectedTag = value;
        },
        [PAGESIZE_MUTATION](state, data) {
            state.pageSize = data;
        },
        [LOADING_MUTATION](state, value) {
            state.loading = value;
        }
    },
    actions: {
        [GET_TAGNAMES_ACTION](store) {
            store.commit(LOADING_MUTATION, true);
            fetch("https://api.stackexchange.com/2.2/tags?order=desc&sort=popular&site=stackoverflow".replace("#", "%23"))
            // fetch("/tagList.json")
            .then((res) => res.json())
                .then(async (res) => {
                    var data = res.items.slice(0, 10);
                    await store.commit(TAGNAMES_MUTATION, data);
                    if (data.length !== 0) {
                        fetch(`https://api.stackexchange.com/2.2/search?order=desc&sort=activity&tagged=${data[0].name}&site=stackoverflow`.replace("#", "%23"))
                            // fetch("/test.json")
                            .then((res) => res.json())
                            .then(async(res) => {
                                await store.commit(PAGESIZE_MUTATION, 20);
                                await store.commit(QUESTIONS_MUTATION, res.items);
                                store.commit(LOADING_MUTATION, false);
                            })
                    } else {
                        store.commit(LOADING_MUTATION, false);
                    }
                })
        },
        [GET_TAGNAMESBYSEARCH_ACTION](store, value) {
            store.commit(LOADING_MUTATION, true);
            // console.log(store, value);
            fetch(`https://api.stackexchange.com/2.2/tags/${value}/related?site=stackoverflow`.replace("#", "%23"))
            .then((res) => res.json())
                .then(async (res) => {
                    var data = res.items.slice(0, 10);
                    await store.commit(TAGNAMES_MUTATION, data);
                    if (data.length !== 0) {
                        fetch(`https://api.stackexchange.com/2.2/search?order=desc&sort=activity&tagged=${data[0].name}&site=stackoverflow`.replace("#", "%23"))
                            .then((res) => res.json())
                            .then(async(res) => {
                                await store.commit(PAGESIZE_MUTATION, 20);
                                await store.commit(QUESTIONS_MUTATION, res.items);
                                store.commit(LOADING_MUTATION, false);
                            })
                    }else {
                        store.commit(LOADING_MUTATION, false);
                    }
                })
        },
        [GET_QUESTIONS_ACTION](store, value) {
            // console.log(value);
            store.commit(LOADING_MUTATION, true);
            fetch(`https://api.stackexchange.com/2.2/search?order=desc&sort=activity&tagged=${value}&site=stackoverflow`.replace("#", "%23"))
            // fetch("/test.json")
                .then((res) => res.json())
                .then(async (res) => {
                    await store.commit(QUESTIONS_MUTATION, res.items);
                    store.commit(LOADING_MUTATION, false);
                })
        }
    },
})