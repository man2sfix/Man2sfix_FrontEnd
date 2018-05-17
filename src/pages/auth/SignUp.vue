<template>
  <app-layout>
    <div class="inner-contents">
      <h2 class="contents-title">회원가입</h2>
      <div v-if="show">
        <p class="contents-text">회원가입 유형을 선택하여 주세요.</p>
        <p class="contents-text signup-text">(이미 회원이시라면 <router-link :to="'/signin'" class="link">로그인</router-link>을 해주세요!)</p>
        <div class="signup-select">
          <router-link :to="'/signup/student'" class="link">
            <i class="fas fa-user icon"></i>
            <h3 class="title">일반 회원</h3>
            <p class="text">다양한 강사들의 도움이 기다리고 있어요!</p>
          </router-link>
          <router-link :to="'/signup/instructor'" class="link">
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

  .link {
    color: theme-color('primary');
  }
}

.signup-select {
  max-width: 500px;
  margin: 0 auto;
  padding: map-get($spacers, 5) 0;
  text-align: center;

  .link {
    display: block;
    color: gray('800');
    border: 1px solid gray('300');
    padding: map-get($spacers, 4) map-get($spacers, 2);

    &:last-child {
      margin-top: map-get($spacers, 3);
    }

    &:hover {
      border-color: theme-color('primary');
    }
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

.signup-dialog {
  .el-dialog__body {
    padding-top: 0;
  }
}

.form {
  max-width: 500px;
  margin: 0 auto;
  padding: map-get($spacers, 5) 0;

  &.form-find {
    padding-bottom: map-get($spacers, 3);
  }

  .el-form-item__label {
    padding-bottom: 0;
  }

  .el-form-item {
    margin-bottom: map-get($spacers, 3);

    &:last-child {
      margin-bottom: 0;
    }
  }

  .el-date-editor {
    width: 100%;
  }

  .btn-block {
    display: block;
    width: 100%;
    margin-top: map-get($spacers, 2);
  }

  .relative-box {
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

  .link-box {
    .link {
      display: block;
      color: gray('700');
      font-size: $font-size-base * 0.8;
      padding: map-get($spacers, 2);

      &:hover,
      &:focus {
        color: theme-color('primary');
      }
    }
  }
}
</style>
