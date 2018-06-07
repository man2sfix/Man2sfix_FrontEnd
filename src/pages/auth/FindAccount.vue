<template>
  <app-layout>
    <div class="inner-contents">
      <h2 class="contents-title">계정 찾기</h2>
      <div v-if="show">
        <p class="contents-text">아래 유형을 선택하여 주세요.</p>
        <div class="select-container">
          <router-link :to="'/find-account/email'" class="select-link">
            <i class="fas fa-envelope icon"></i>
            <h3 class="title">이메일 찾기</h3>
          </router-link>
          <router-link :to="'/find-account/password'" class="select-link">
            <i class="fas fa-key icon"></i>
            <h3 class="title">비밀번호 찾기</h3>
          </router-link>
        </div>
      </div>
      <router-view/>
      <p class="notice">문의사항은 <router-link :to="'/contact'" class="text-primary">제휴 및 문의</router-link>를 이용하여 주세요.</p>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from '@/components/layout/AppLayout'

export default {
  name: 'FindAccount',
  data () {
    return {
      show: true
    }
  },
  methods: {
    onShow () {
      if (this.$route.path !== '/find-account') {
        this.show = false
      } else {
        this.show = true
      }
    }
  },
  created () {
    this.onShow()
  },
  watch: {
    '$route': 'onShow'
  },
  components: {
    AppLayout
  }
}
</script>

<style lang="scss" scoped>
.notice {
  text-align: center;
  color: gray('700');
  font-size: $font-size-sm;
  line-height: 1.5;
}
</style>
