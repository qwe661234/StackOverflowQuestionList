<template>
    <el-tag @click="clickTag"> {{tagName}} </el-tag>
</template>

<script>
import { SELECTEDTAGMUTATION, GET_QUESTIONS_ACTION } from "../type/index";

export default {
    name: "Tag",
    props: {
        tagName: {
            type: String,
        },
    },
    methods: {
        clickTag: function() {
            this.$store.commit(SELECTEDTAGMUTATION, this.tagName)
            this.$store.dispatch(GET_QUESTIONS_ACTION, this.tagName);
        }
    }
}
</script>

<style scoped>
</style>