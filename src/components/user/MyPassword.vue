<template>
  <el-card shadow="never" class="mypage-card">
    <div class="thumb thumb-icon">
      <i class="fas fa-key icon"></i>
    </div>
    <div class="info pt-5">
      <strong>비밀번호 변경</strong><br>
      <span class="date">변경일자: {{ new Date(info.createdAt) | moment('YYYY-MM-DD HH:mm') }}</span>
      <el-button plain>수정</el-button>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
  .mypage-card {
    .thumb-icon {
      text-align: center;
      background-color: transparent;
      border: 1px solid gray('300');

      .icon {
        padding-top: map-get($spacers, 5);
        font-size: $font-size-base * 3.5;
      }
    }
  }
</style>
