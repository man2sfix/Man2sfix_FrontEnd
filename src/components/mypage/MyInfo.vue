<template>
  <div class="mypage-card">
    <div class="thumb">
      <img :src="info.profile.downloadURL" alt="thumb">
    </div>
    <div class="info">
      <strong class="title">{{ info.name }}</strong><br>
      <span class="email">이메일: {{ info.email }}</span><br>
      <span class="phone">휴대폰: {{ info.phone }}</span><br>
      <router-link :to="'/changeinfo'" class="link">수정</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyInfo',
  props: {
    info: {
      type: Object,
      required: true
    }
  }
}
</script>
