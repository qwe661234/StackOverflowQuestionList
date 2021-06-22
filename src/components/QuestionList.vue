<template>
    <div>
        <Question v-for="item in questions" :key="item.title" :questionInfo="item"></Question>
    </div>
  </template>

<script>
import Question from './Question.vue';
import { mapState } from 'vuex';

export default {
  name: "QuestionList",
  methods: {
  },
  computed:mapState({
    inputValue: state => state.inputValue,
    questions: state=> state.questions,
  }),
  components: {
    Question,
  },
};
</script>

<style scoped>
</style>
