<template>
  <app-layout>
    <div class="inner-contents">
      <h2 class="contents-title">개인정보 처리방침</h2>
      <div class="privacy-container">
        <sign-up-privacy></sign-up-privacy>
      </div>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from '@/components/layout/AppLayout'
import SignUpPrivacy from '@/components/auth/SignUpPrivacy'

export default {
  name: 'PrivacyPolicy',
  components: {
    AppLayout,
    SignUpPrivacy
  }
}
</script>

<style lang="scss" scoped>
.privacy-container {
  max-width: 800px;
  margin: map-get($spacers, 3) auto 0;
  padding: map-get($spacers, 5);
  border: 1px solid gray('300');
}
</style>
