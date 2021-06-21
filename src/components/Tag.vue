<template>
    <el-tag> {{tagName}} </el-tag>
</template>

<script>
export default {
    name: "Tag",
    props: {
        tagName: {
            type: String,
        },
    }
}
</script>

<style scoped>

</style>