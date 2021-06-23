<template>
  <el-container>
    <el-header >
      <SearchBar />
    </el-header>
    <el-main 
    element-loading-customClass="spinner"
     v-loading.fullscreen="loading"
     >
      <TagList></TagList>
      <QuestionList></QuestionList>
    </el-main>
  </el-container>
</template>

<script>
import { mapState } from "vuex";
import SearchBar from "./SearchBar.vue";
import TagList from "./TagList.vue";
import QuestionList from "./QuestionList.vue";
import { PAGESIZE_MUTATION, QUESTIONS_MUTATION } from '../type/index';

export default {
  name: "Layout",
  components: {
    SearchBar,
    TagList,
    QuestionList,
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  computed: mapState({
    loading: (state) => state.loading,
  }),
  methods: {
    handleScroll() {
      if ((window.scrollY + window.screen.height)/ document.body.scrollHeight >= 0.95 ) {
        this.loadMore();
      }
    },
    async loadMore() {
      if(this.$store.state.questionStorage.length > this.$store.state.pageSize) {
        if (this.$store.state.questionStorage.length > this.$store.state.pageSize + 20) {
          await this.$store.commit(PAGESIZE_MUTATION, this.$store.state.pageSize + 20);
          this.$store.commit(QUESTIONS_MUTATION, this.$store.state.questionStorage);
        }else {
          await this.$store.commit(PAGESIZE_MUTATION, this.$store.state.questionStorage.length);
          this.$store.commit(QUESTIONS_MUTATION, this.$store.state.questionStorage);
        }
      }
    }
  },
};
</script>

<style scoped>
.el-header {
  position: sticky;
  width: 100%;
  top: 0px;
  text-align: center;
  height: 50px;
  background-color: white;
  z-index: 9999;
  margin-top: 20px;
}
</style>
