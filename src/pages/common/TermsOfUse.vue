<template>
  <app-layout>
    <div class="inner-contents">
      <h2 class="contents-title">이용약관</h2>
      <div class="terms-container">
        <sign-up-terms></sign-up-terms>
      </div>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from '@/components/layout/AppLayout'
import SignUpTerms from '@/components/auth/SignUpTerms'

export default {
  name: 'TermsOfUse',
  components: {
    AppLayout,
    SignUpTerms
  }
}
</script>

<style lang="scss" scoped>
.terms-container {
  max-width: 800px;
  margin: map-get($spacers, 3) auto 0;
  padding: map-get($spacers, 5);
  border: 1px solid gray('300');
}
</style>
