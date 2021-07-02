<template>
  <div>
    <el-input
      v-model="$store.state.inputValue"
      placeholder="Tag"
      @input="sendKey"
    >
      <el-button slot="append" type="primary"> Search </el-button>
    </el-input>
  </div>
</template>

<script>
import { mapState } from "vuex";
import {
  GET_TAGNAMES_ACTION,
  GET_TAGNAMESBYSEARCH_ACTION,
} from "../type/index";
var timer = null;

export default {
  name: "SearchBar",
  methods: {
    sendKey: function () {
      if (timer) clearTimeout(timer);
      if (this.inputValue === "") {
        timer = setTimeout(() => {
          this.$store.dispatch(GET_TAGNAMES_ACTION);
        }, 500);
      } else {
        timer = setTimeout(() => {
          this.$store.dispatch(GET_TAGNAMESBYSEARCH_ACTION, this.inputValue);
        }, 500);
      }
    },
  },
  computed: mapState({
    inputValue: (state) => state.inputValue,
  }),
};
</script>

<style scoped>
.el-input {
  width: 500px;
}
</style>
