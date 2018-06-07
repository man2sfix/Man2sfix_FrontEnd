<template>
  <ul class="app-auth">
    <!-- not logined -->
    <li v-if="!auth.logined" class="auth-item"><router-link :to="'/signin'" class="btn-link">로그인</router-link></li>
    <li v-if="!auth.logined" class="auth-item"><router-link :to="'/signup'" class="btn-link">회원가입</router-link></li>
    <!-- logined -->
    <li v-if="auth.logined" class="auth-profile">
      <router-link :to="'/mypage'">
        <strong class="email">{{ auth.email.split('@')[0] }}님</strong>
        환영합니다.
      </router-link>
    </li>
    <li v-if="auth.logined" class="auth-item"><router-link :to="'/signout'" class="link">로그아웃</router-link></li>
    <li v-if="auth.logined" class="auth-item"><router-link :to="'/mypage'" class="link">마이페이지</router-link></li>
    <li v-if="auth.logined && auth.type === 'instructor'" class="auth-item"><router-link :to="'#'" class="link">강사페이지</router-link></li>
  </ul>
</template>

<script>
export default {
  name: 'AppAuth',
  props: {
    auth: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.app-auth {
  padding: map-get($spacers, 4) 0;
  text-align: center;
  border-bottom: 1px solid gray('300');

  .auth-profile {
    font-size: $font-size-sm;
    padding: 0 0 map-get($spacers, 3);

    .email {
      font-size: $font-size-base;
      display: block;
      padding-bottom: map-get($spacers, 1);
    }
  }

  .auth-item {
    display: inline-block;
    margin: 0 map-get($spacers, 1);
    font-size: $font-size-base * 0.8;
  }

  .btn-link {
    display: block;
    color: gray('700');
    border: 1px solid gray('300');
    padding: map-get($spacers, 2);

    &:not(.welcome):hover,
    &:not(.welcome):focus,
    &:not(.welcome).router-link-active {
      color: theme-color('primary');
      border-color: theme-color('primary');
    }
  }

  @include media-breakpoint-up(md) {
    & {
      position: absolute;
      padding: 0;
      border: 0;
      top: -(map-get($spacers, 2));
      right: map-get($spacers, 3);
      transform: translateY(-100%);

      .auth-profile {
        padding: 0;
        display: inline-block;
        margin: 0 map-get($spacers, 1);
        vertical-align: middle;

        .email {
          display: inline;
          font-size: $font-size-sm;
        }
      }

      .auth-item {
        vertical-align: middle;
      }
    }
  }
}
</style>
