<template>
  <a :href="questionInfo.link" target="_blank" rel="noopener noreferrer">
    <div class="question">
      <div class="title">{{ questionInfo.title }}</div>
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="grid subtitle">Score</div>
          <div
            :class="{
              grid: true,
              redfont: questionInfo.score < 0 ? true : false,
            }"
          >
            {{ questionInfo.score }}
          </div>
        </el-col>
        <el-col :span="1.5">
          <div class="grid subtitle">Answers</div>
          <div
            :class="{
              grid: true,
              greenblock:
                questionInfo.answer_count > 1 && questionInfo.is_answered
                  ? true
                  : false,
              greenborder:
                questionInfo.answer_count > 1 && !questionInfo.is_answered
                  ? true
                  : false,
            }"
          >
            {{ questionInfo.answer_count }}
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid subtitle">Viewed</div>
          <div class="grid">
            {{ questionInfo.view_count }}
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid">
            <el-avatar
              :size="100"
              :src="questionInfo.owner.profile_image"
            ></el-avatar>
          </div>
          <div class="grid image-margin">
            {{ questionInfo.owner.display_name }}
          </div>
        </el-col>
      </el-row>
      <el-divider></el-divider>
    </div>
  </a>
</template>

<script>
export default {
  name: "Question",
  props: {
    questionInfo: {
      type: Object,
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.question {
  color: black;
}
.title {
  margin-bottom: 10px;
}
.subtitle {
  font-size: 20px;
  color: rgb(169, 0, 0);
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.redfont {
  color: red;
}
.grid {
  min-height: 20px;
  text-align: center;
}
.image-margin {
  margin-top: 20px;
}
.greenborder {
  border: rgb(36, 210, 42) solid 2px;
  color: rgb(36, 210, 42);
}
.greenblock {
  background-color: green;
  color: white;
}
.el-divider {
  width: 750px;
}
</style>
