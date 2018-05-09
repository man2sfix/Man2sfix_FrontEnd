<template>
  <app-layout>
    <div class="inner-contents">
      <h2 class="contents-title">회원가입</h2>
      <p class="contents-text">회원가입하고 맨투스픽 서비스를 즐겨보세요.</p>
      <div>
        <sign-up-student></sign-up-student>
      </div>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from '@/components/layout/AppLayout'
import SignUpStudent from '@/components/auth/SignUpStudent'

export default {
  name: 'SignUp',
  methods: {
  },
  components: {
    AppLayout,
    SignUpStudent
  }
}
</script>

<style lang="scss" scoped>

</style>
