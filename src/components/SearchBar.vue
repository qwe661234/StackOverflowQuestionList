<template>
  <div>
  <el-input v-model="input" @input="consoleInput()" placeholder="Tag">
    <el-button type="primary" slot="append"> Search </el-button>
  </el-input>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: "SearchBar",
  data() {
    return {
      input: "",
    };
  },
  methods: {
    consoleInput: function() {
      console.log(this.input);
    },
  },
  computed:mapState({
    }),
};
</script>

<style scoped>
.el-input {
  width: 500px;
}
</style>
