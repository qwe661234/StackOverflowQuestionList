<template>
    <div>
        <span>{{ questionInfo.title }}</span>
            <el-row :gutter="30">
                <el-col :span="5">
                    <div class="grid-content font-red">Score</div>
                    <div class="grid-content text-center">{{questionInfo.score}}</div>
                </el-col>
                <el-col :span="5">
                    <div class="grid-content font-red">Answers</div>
                    <div class="grid-content text-center">{{questionInfo.answer_count}}</div>
                </el-col>
                <el-col :span="5">
                    <div class="grid-content font-red">Viewed</div>
                    <div class="grid-content text-center">{{questionInfo.view_count}}</div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content text-center">
                        <el-avatar :size="100" :src="questionInfo.owner.profile_image"></el-avatar>
                    </div>
                    <div class="grid-content text-center image-margin">{{questionInfo.owner.display_name}}</div>
                </el-col>
            </el-row>
        <el-divider></el-divider>
    </div>
    
</template>

<script>
export default {
    name: "Question",
    props: {
        questionInfo: {
            type: Object,
        },
    }
}
</script>

<style scoped>
    .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .font-red {
    text-align: center;
    color: red;
    background: #d3dce6;
  }
  .text-center {
    text-align: center;
  }
  .grid-content {
    min-height: 20px;
  }
  .image-margin {
    margin-top: 20px;
  }
</style>