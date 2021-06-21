<template>
  <el-input v-model="input" @input="consoleInput()" placeholder="Tag">
    <el-button type="primary" slot="append"> Search </el-button>
  </el-input>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      input: "",
    };
  },
  methods: {
    consoleInput: function () {
      console.log(this.input);
    },
  },
};
</script>

<style scoped>
.el-input {
  width: 500px;
}
</style>
