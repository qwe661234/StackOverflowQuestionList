<template>
  <div class="tagList">
    <h1 class="title" >Trending</h1>
    <Tag
      v-for="item in tagNames"
      :key="item.name"
      :tagName="item.name"
      :class="{ selected: selectedTag === item.name ? true : false, unselected: selectedTag === item.name ? false : true }"
    >
    </Tag>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Tag from "./Tag.vue";
import { GET_TAGNAMES_ACTION } from "../type/index";

export default {
  name: "TagList",
  components: {
    Tag,
  },
  computed: mapState({
    tagNames: (state) => state.tagNames,
    selectedTag: (state) => state.selectedTag,
  }),
  mounted() {
    this.$store.dispatch(GET_TAGNAMES_ACTION);
  },
};
</script>

<style scoped>
.title {
  position: relative;
  right: 255px;
}
.selected {
  color: black;
  background-color: #85bef7;
}
.unselected {
  color: black;
}
.tagList{
  text-align: center;
}
</style>