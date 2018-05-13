<template>
  <app-layout>
    <div class="inner-contents">
      <h2 class="contents-title">회원가입</h2>
      <p class="contents-text" v-if="show">회원가입 유형을 선택하여 주세요.</p>
      <p class="contents-text pt-2" v-if="show">(이미 회원이시라면 <router-link :to="'/signin'" class="text-primary">로그인</router-link>을 해주세요!)</p>
      <div class="signup-select" v-if="show">
        <el-button plain @click="goNavigation('student')">
          <i class="fas fa-user icon"></i>
          <h3 class="title">일반 회원</h3>
          <p class="text">다양한 강사들의 도움이 기다리고 있어요!</p>
        </el-button>
        <el-button plain @click="goNavigation('instructor')">
          <i class="fas fa-microphone icon"></i>
          <h3 class="title">강사 회원</h3>
          <p class="text">강의를 통해 능력을 발휘해보세요!</p>
        </el-button>
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
    goNavigation (path) {
      this.$router.push(`/signup/${path}`)
    },
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
    max-width: 550px;
    margin: 0 auto;
    padding: map-get($spacers, 5) 0;
    text-align: center;

    .el-button {
      display: block;
      width: 100%;
      color: gray('800');
      margin: 0;
      padding: map-get($spacers, 4) 0;

      &:last-child {
        margin-top: map-get($spacers, 2);
        margin-left: 0;
      }
    }

    .icon {
      font-size: $font-size-base * 2;
      color: gray('700');
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

  .signup-form {
    max-width: 550px;
    margin: 0 auto;
    padding: map-get($spacers, 3) 0 map-get($spacers, 5);
    overflow: hidden;

    .el-form-item__label {
      padding-bottom: 0;
    }

    .el-form-item {
      margin-bottom: map-get($spacers, 3);

      &:last-child {
        margin-bottom: 0;
        text-align: center;
      }
    }

    .el-date-editor {
      width: 100%;
    }

    .item-phone {
      display: flex;
    }

    .btn-submit {
      display: block;
      width: 100%;
      margin-top: map-get($spacers, 2);
    }

    .form-btn {
      text-align: center;

      .el-form-item {
        margin-bottom: 0;
      }
    }

    .relative-container {
      position: relative;

      .el-button {
        position: absolute;
        bottom: 5px;
        right: 0;
      }

      .el-upload {
        .el-button {
          position: static;
        }
      }

      .el-upload__tip {
        position: absolute;
        top: 0;
        right: 0;
        margin: 0;
      }
    }
  }

  .signup-dialog {
    .el-dialog__body {
      padding-top: 0;
    }
  }
</style>
