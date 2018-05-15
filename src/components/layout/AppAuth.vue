<template>
  <ul class="app-auth">
    <!-- not logined -->
    <li v-if="!auth.logined" class="auth-item"><router-link :to="'/signin'" class="link">로그인</router-link></li>
    <li v-if="!auth.logined" class="auth-item"><router-link :to="'/signup'" class="link">회원가입</router-link></li>
    <!-- logined -->
    <li v-if="auth.logined" class="auth-item welcome">
      <router-link :to="'/mypage'">{{ auth.name }}</router-link><span>님 환영합니다.</span>
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
  height: 100%;
  flex: auto;
  text-align: right;
  font-size: 0;

  .auth-item,
  .link {
    height: 100%;
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
    padding: 0 map-get($spacers, 2);

    &:not(.welcome):hover,
    &:not(.welcome):focus,
    &:not(.welcome).router-link-active {
      color: theme-color('primary');
      border-color: theme-color('primary');
    }
  }

  .welcome {
    a {
      color: theme-color('primary');
    }
  }
}
</style>
