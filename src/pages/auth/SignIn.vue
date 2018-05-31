<template>
  <app-layout>
    <div class="inner-contents">
      <h2 class="contents-title">로그인</h2>
      <p class="contents-text">로그인하고 맨투스픽 서비스를 즐겨보세요.</p>
      <sign-in-form></sign-in-form>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from '@/components/layout/AppLayout'
import SignInForm from '@/components/auth/SignInForm'

export default {
  name: 'SignIn',
  components: {
    AppLayout,
    SignInForm
  }
}
</script>
