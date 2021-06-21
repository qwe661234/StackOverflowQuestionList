<template>
  <el-container>
    <el-header>
      <SearchBar/>
    </el-header>
    <el-main>
      <TagList></TagList>
    </el-main>
  </el-container>
</template>

<script>
import SearchBar from './SearchBar.vue';
import TagList from './TagList.vue';

export default {
  name: "Layout",
  components: {
    SearchBar,
    TagList
  }
};
</script>

<style scoped>

.el-header {
  position: fixed;
  top: 10px;
}
.el-main {
  margin-top: 20px;
  height: 1000px;
}

</style>
