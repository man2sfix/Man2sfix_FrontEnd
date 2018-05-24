<template>
  <div class="mypage-card">
    <div class="thumb">
      <img :src="`${$api}/${ info.mem_profile }`" alt="thumb">
    </div>
    <div class="info">
      <strong class="title">{{ info.mem_name }}</strong><br>
      <span class="email">이메일: {{ info.mem_email }}</span><br>
      <span class="phone">휴대폰: {{ info.mem_phone }}</span><br>
      <router-link :to="'/change-info'" class="link">수정</router-link>
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
