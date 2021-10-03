<template>
  <el-container>
    <el-header>
      <SearchBar />
    </el-header>
    <el-main
      v-loading.fullscreen="loading"
      element-loading-custom-class="spinner"
    >
      <TagList :class="{ fixedTag: scroll }"></TagList>
      <QuestionList></QuestionList>
    </el-main>
  </el-container>
</template>

<script>
import { mapState } from "vuex";
import SearchBar from "@/components/SearchBar.vue";
import TagList from "@/components/TagList.vue";
import QuestionList from "@/components/QuestionList.vue";
import { PAGE_MUTATION, GET_QUESTIONS_ACTION } from "@/type/index";

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
    scroll: (state) => state.scroll,
  }),
  methods: {
    handleScroll() {
      if (
        (window.scrollY + window.screen.height) / document.body.scrollHeight >=
        1
      ) {
        this.loadMore();
      }
    },
    async loadMore() {
      await this.$store.commit(PAGE_MUTATION, this.$store.state.page + 1);
      this.$store.dispatch(GET_QUESTIONS_ACTION, "load");
    },
  },
};
</script>

<style scoped>
.el-header {
  height: 50px;
  margin-top: 20px;
  text-align: center;
  background-color: transparent;
}
.fixedTag {
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 9999;
  background-color: transparent;
}
.el-container {
  background-image: url("https://media.wired.com/photos/5926db217034dc5f91becd6b/master/w_2560%2Cc_limit/so-logo-s.jpg");
}
</style>
