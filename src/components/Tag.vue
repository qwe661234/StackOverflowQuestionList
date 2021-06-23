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
.el-tag{
    margin: 0 5px 0 5px;
    height: 50px;
    border-radius: 15px;
    padding-top: 10px;    
    color: black;
    border: #85bef7 solid 2px;
    background-color: white;
}
</style>