<template>
    <div>
        <h1> Tag: </h1>
        <Tag v-for="item in tagNames" :key="item.name" :tagName="item.name"></Tag>
    </div>
</template>

<script>
import {mapState} from 'vuex'; 
import Tag from './Tag.vue';
import { GET_TAGNAMES_ACTION } from '../type/index';

export default {
    name: "TagList",
    components: {
        Tag,
    },
    computed:mapState({
        tagNames: state=>state.tagNames,
    }),
    mounted() {
        this.$store.dispatch(GET_TAGNAMES_ACTION);
    }
}
</script>

<style scoped>

</style>