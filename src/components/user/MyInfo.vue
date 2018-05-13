<template>
  <el-card shadow="never" class="mypage-card">
    <div class="thumb">
      <img :src="info.profile.downloadURL" alt="thumb">
    </div>
    <div class="info">
      <strong>{{ info.name }}</strong><br>
      <span class="email">이메일: {{ info.email }}</span><br>
      <span class="phone">휴대폰: {{ info.phone }}</span><br>
      <span class="date">로그인: {{ new Date(info.lastLoginedAt) | moment('YYYY-MM-DD HH:mm') }}</span><br>
      <span class="date">가입일: {{ new Date(info.createdAt) | moment('YYYY-MM-DD HH:mm') }}</span>
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

    .el-card__body {
      display: flex;
    }

    .thumb {
      flex: none;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      overflow: hidden;
      background-color: gray('300');

      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }

    .info {
      position: relative;
      flex: auto;
      font-size: $font-size-lg;
      align-items: center;
      line-height: 1.4;
      padding: map-get($spacers, 2) map-get($spacers, 4);

      .email,
      .phone {
        font-size: $font-size-base * 0.9;
      }

      .date {
        font-size: $font-size-sm;
      }

      .el-button {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
      }
    }
  }
</style>
