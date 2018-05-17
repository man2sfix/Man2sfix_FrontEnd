<template>
  <div class="mypage-card">
    <div class="thumb thumb-icon">
      <i class="fas fa-key icon"></i>
    </div>
    <div class="info">
      <strong class="title">비밀번호 변경</strong><br>
      <span class="date">변경일자: {{ new Date(info.passwordChangedAt) | moment('YYYY-MM-DD HH:mm') }}</span>
      <router-link :to="'/changepassword'" class="link">수정</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyPassword',
  props: {
    info: {
      type: Object,
      required: true
    }
  }
}
</script>
