<template>
  <div>
  <el-input v-model="$store.state.inputValue" @input="sendKey" placeholder="Tag">
    <el-button type="primary" slot="append"> Search </el-button>
  </el-input>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import {GET_TAGNAMES_ACTION ,GET_TAGNAMESBYSEARCH_ACTION} from "../type/index";

export default {
  name: "SearchBar",
  methods: {
    sendKey: function() {
      if(this.inputValue === "") {
        this.$store.dispatch(GET_TAGNAMES_ACTION);
      } else {
        this.$store.dispatch(GET_TAGNAMESBYSEARCH_ACTION, this.inputValue);
      }
    }
  },
  computed:mapState({
    inputValue: state => state.inputValue,
  }),
};
</script>

<style scoped>
.el-input {
  width: 500px;
}
</style>
