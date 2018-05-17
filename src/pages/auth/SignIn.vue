<template>
  <app-layout>
    <div class="inner-contents">
      <h2 class="contents-title">로그인</h2>
      <p class="contents-text">로그인하고 맨투스픽 서비스를 즐겨보세요.</p>
      <sign-in-common></sign-in-common>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from '@/components/layout/AppLayout'
import SignInCommon from '@/components/auth/SignInCommon'

export default {
  name: 'SignIn',
  components: {
    AppLayout,
    SignInCommon
  }
}
</script>
