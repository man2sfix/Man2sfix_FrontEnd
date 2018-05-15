<template>
  <app-layout>
    <h2 class="contents-title">잘못된 접근입니다.</h2>
    <p class="contents-text">요청한 페이지를 찾을 수 없습니다. URL을 확인하여 주세요!</p>
    <div class="notfound">
      <img src="../../assets/logo.png" alt="">
    </div>
  </app-layout>
</template>

<script>
import AppLayout from '@/components/layout/AppLayout'

export default {
  name: 'NotFound',
  components: {
    AppLayout
  }
}
</script>

<style lang="scss" scoped>
.notfound {
  text-align: center;
  padding: map-get($spacers, 5)
}
</style>
