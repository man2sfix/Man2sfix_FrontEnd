<template>
  <app-layout>
    <div class="inner-contents">
      <h2 class="contents-title">계정 찾기</h2>
      <div v-if="show">
        <p class="contents-text">아래 유형을 선택하여 주세요.</p>
        <div class="find-select">
          <router-link :to="'/find-account/email'" class="btn btn-lg btn-block btn-outline-primary">
            <i class="fas fa-envelope icon"></i>
            <h3 class="title">이메일 찾기</h3>
          </router-link>
          <router-link :to="'/find-account/password'" class="btn btn-lg btn-block btn-outline-primary">
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
.find-select {
  max-width: 500px;
  margin: 0 auto;
  padding: map-get($spacers, 5) 0 map-get($spacers, 4);
  text-align: center;

  .btn {
    padding-top: map-get($spacers, 3);
    padding-bottom: map-get($spacers, 3);
  }

  .icon {
    font-size: $font-size-base * 2;
  }

  .title {
    font-size: $font-size-base;
    padding-top: map-get($spacers, 3);
  }
}

.notice {
  text-align: center;
  color: gray('700');
  font-size: $font-size-sm;
  line-height: 1.5;
}
</style>
