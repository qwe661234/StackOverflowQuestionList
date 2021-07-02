import Vue from "vue";
import Vuex from "vuex";
import {
  SCROLL_MUTATION,
  LOADING_MUTATION,
  PAGE_MUTATION,
  GET_TAGNAMES_ACTION,
  TAGNAMES_MUTATION,
  GET_TAGNAMESBYSEARCH_ACTION,
  GET_QUESTIONS_ACTION,
  QUESTIONS_MUTATION,
  SELECTEDTAGMUTATION,
  LOADMORE_QUESTION_MUTATION,
} from "../type/index";
import { fectchPopularTag, fetchQuestionByTag } from "./Api";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    inputValue: "",
    tagNames: [],
    questions: [],
    selectedTag: "",
    page: 1,
    loading: false,
    scroll: false,
  },
  mutations: {
    [TAGNAMES_MUTATION](state, value) {
      console.log(value);
      if (value.length != 0) {
        state.tagNames = value;
        state.selectedTag = value[0].name;
      }
    },
    [QUESTIONS_MUTATION](state, data) {
      state.questions = data;
    },
    [LOADMORE_QUESTION_MUTATION](state, data) {
      state.questions = state.questions.concat(data);
      console.log(state.questions);
    },
    [SELECTEDTAGMUTATION](state, value) {
      state.selectedTag = value;
    },
    [PAGE_MUTATION](state, data) {
      state.page = data;
    },
    [LOADING_MUTATION](state, value) {
      state.loading = value;
    },
    [SCROLL_MUTATION](state, value) {
      state.scroll = value;
    },
  },
  actions: {
    async [GET_TAGNAMES_ACTION](store) {
      store.commit(LOADING_MUTATION, true);
      const data = await fectchPopularTag();
      await store.commit(TAGNAMES_MUTATION, data);
      store.dispatch(GET_QUESTIONS_ACTION);
    },
    async [GET_TAGNAMESBYSEARCH_ACTION](store, value) {
      store.commit(LOADING_MUTATION, true);
      const data = await fectchPopularTag(value);
      await store.commit(TAGNAMES_MUTATION, data);
      store.dispatch(GET_QUESTIONS_ACTION);
    },
    async [GET_QUESTIONS_ACTION](store, value) {
      store.commit(LOADING_MUTATION, true);
      console.log(store.state.page);
      const question = await fetchQuestionByTag(
        store.state.page,
        store.state.selectedTag
      );
      if (value === "load")
        await store.commit(LOADMORE_QUESTION_MUTATION, question);
      else await store.commit(QUESTIONS_MUTATION, question);
      store.commit(LOADING_MUTATION, false);
    },
  },
});
