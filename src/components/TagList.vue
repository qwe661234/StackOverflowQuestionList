<template>
  <div class="tagList">
    <h1 class="title">Trending</h1>
    <Tag
      v-for="item in tagNames"
      :key="item.name"
      :tag-name="item.name"
      :class="{ selected: selectedTag === item.name ? true : false }"
    >
    </Tag>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Tag from "./Tag.vue";
import { GET_TAGNAMES_ACTION, SCROLL_MUTATION } from "../type/index";

export default {
  name: "TagList",
  components: {
    Tag,
  },
  computed: mapState({
    tagNames: (state) => state.tagNames,
    selectedTag: (state) => state.selectedTag,
  }),
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    this.$store.dispatch(GET_TAGNAMES_ACTION);
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > this.$el.offsetHeight)
        this.$store.commit(SCROLL_MUTATION, true);
      else this.$store.commit(SCROLL_MUTATION, false);
    },
  },
};
</script>

<style scoped>
.title {
  position: relative;
  text-align: center;
}
.selected {
  color: black;
  background-color: #85bef7;
}
.tagList {
  text-align: center;
}
</style>
