<template>
  <app-layout>
    <div class="inner-contents">
      <h2 class="contents-title">회원가입</h2>
      <p class="contents-text" v-if="!show">(<span class="require-text">*</span>는 필수입력 사항입니다.)</p>
      <div v-if="show">
        <p class="contents-text">회원가입 유형을 선택하여 주세요.</p>
        <p class="contents-text signup-text">(이미 회원이시라면 <router-link :to="'/signin'" class="text-primary">로그인</router-link>을 해주세요!)</p>
        <div class="signup-select">
          <router-link :to="'/signup/student'" class="btn btn-lg btn-block btn-outline-primary">
            <i class="fas fa-user icon"></i>
            <h3 class="title">일반 회원</h3>
            <p class="text">다양한 강사들의 도움이 기다리고 있어요!</p>
          </router-link>
          <router-link :to="'/signup/instructor'" class="btn btn-lg btn-block btn-outline-primary">
            <i class="fas fa-microphone icon"></i>
            <h3 class="title">강사 회원</h3>
            <p class="text">강의를 통해 능력을 발휘해보세요!</p>
          </router-link>
        </div>
      </div>
      <router-view/>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from '@/components/layout/AppLayout'

export default {
  name: 'SignUp',
  data () {
    return {
      show: true
    }
  },
  methods: {
    onShow () {
      if (this.$route.path !== '/signup') {
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

<style lang="scss">
.signup-text {
  padding-top: map-get($spacers, 2);
}

.signup-select {
  max-width: 500px;
  margin: 0 auto;
  padding: map-get($spacers, 5) 0;
  text-align: center;

  .btn {
    padding-top: map-get($spacers, 3);
    padding-bottom: map-get($spacers, 3);
  }

  .icon {
    font-size: $font-size-base * 2;
  }

  .title {
    font-size: $font-size-lg;
    padding: map-get($spacers, 3) 0 map-get($spacers, 2);
  }

  .text {
    font-size: $font-size-sm;
    word-break: break-word;
  }
}
</style>
