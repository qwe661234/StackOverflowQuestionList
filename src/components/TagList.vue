<template>
    <div>
        <h1> Tag: </h1>
        <Tag v-for="item in tagNames" :key="item.name" :tagName="item.name"></Tag>
    </div>
</template>

<script>
import Tag from './Tag.vue';

export default {
    name: "TagList",
    data() {
        return {
            tagNames: [],
        }
    },
    components: {
        Tag,
    },
    mounted() {
      this.axios.get("https://api.stackexchange.com/2.2/tags?order=desc&sort=popular&site=stackoverflow")
      .then((res) => {
        this.tagNames = res.data.items.slice(0, 10);
      })
  }
}
</script>

<style scoped>

</style>