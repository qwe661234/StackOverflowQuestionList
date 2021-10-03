<template>
  <div class="qustionList">
    <Question
      v-for="item in questions"
      :key="item.title"
      :question-info="item"
      class="question"
    ></Question>
  </div>
</template>

<script>
import Question from "./Question.vue";
import { mapState } from "vuex";

export default {
  name: "QuestionList",
  methods: {},
  computed: mapState({
    inputValue: (state) => state.inputValue,
    questions: (state) => state.questions,
  }),
  components: {
    Question,
  },
};
</script>

<style scoped>
.qustionList {
  margin-top: 10vh;
}
.question {
  position: relative;
  left: 25vw;
}
</style>
