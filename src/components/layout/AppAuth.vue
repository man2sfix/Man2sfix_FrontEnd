<template>
  <ul class="app-auth">
    <!-- common -->
    <li class="auth-profile">
      <img src="" alt="">
    </li>
    <!-- not logined -->
    <li v-if="!auth.logined" class="auth-item"><router-link :to="'/signin'" class="link">로그인</router-link></li>
    <li v-if="!auth.logined" class="auth-item"><router-link :to="'/signup'" class="link">회원가입</router-link></li>
    <!-- logined -->
    <li v-if="auth.logined" class="auth-welcome">
      <router-link :to="'/mypage'" class="link">{{ auth.name }}</router-link><span>님 환영합니다.</span>
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
  text-align: center;

  .auth-profile {
    padding: map-get($spacers, 3) 0;

    > img {
      display: block;
      width: $font-size-base * 4;
      height: $font-size-base * 4;
      margin: 0 auto;
      border-radius: 50%;
      border: 1px solid gray('300');
    }
  }

  .auth-welcome {
    font-size: $font-size-sm;
    color: gray('800');
    line-height: 1.5;
    padding-bottom: map-get($spacers, 3);

    .link {
      color: theme-color('primary');
    }
  }

  .auth-item {
    display: inline-block;
    margin: 0 map-get($spacers, 1);
    font-size: $font-size-base * 0.8;
  }

  .link {
    display: flex;
    align-items: center;
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
}
</style>
