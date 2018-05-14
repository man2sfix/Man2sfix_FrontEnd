<template>
  <app-layout>
    <div class="inner-contents">
      <h2 class="contents-title">회원가입</h2>
      <div v-if="show">
        <p class="contents-text">회원가입 유형을 선택하여 주세요.</p>
        <p class="contents-text pt-2">(이미 회원이시라면 <router-link :to="'/signin'" class="text-primary">로그인</router-link>을 해주세요!)</p>
        <div class="signup-select">
          <router-link :to="'/signup/student'">
            <div class="inner">
              <i class="fas fa-user icon"></i>
              <h3 class="title">일반 회원</h3>
            </div>
          </router-link>
          <router-link :to="'/signup/instructor'">
            <div class="inner">
              <i class="fas fa-microphone icon"></i>
              <h3 class="title">강사 회원</h3>
            </div>
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
  components: {
    AppLayout
  },
  created () {
    this.onShow()
  },
  watch: {
    '$route': 'onShow'
  }
}
</script>

<style lang="scss">
  .signup-select {
    font-size: 0;
    max-width: 550px;
    margin: 0 auto;
    padding: map-get($spacers, 5) 0;
    text-align: center;

    a {
      position: relative;
      display: inline-block;
      width: 200px;
      height: 200px;
      color: gray('800');
      margin: 0;
      border: 1px solid gray('300');
      border-radius: 50%;
      margin: 0 map-get($spacers, 2);

      &:hover,
      &:focus {
        color: theme-color('primary');
        border-color: theme-color('primary');
      }
    }

    .inner {
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      transform: translateY(-50%);
    }

    .icon {
      font-size: $font-size-base * 2.5;
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

  .signup-dialog {
    .el-dialog__body {
      padding-top: 0;
    }
  }
</style>
