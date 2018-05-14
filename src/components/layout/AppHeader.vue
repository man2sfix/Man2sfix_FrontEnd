<template>
  <header class="app-header">
    <div class="inner">
      <h1 class="title">
        <router-link :to="'/'">{{ title }}</router-link>
      </h1>
      <ul class="btn-list">
        <li v-if="auth.logined" class="welcome">
          <router-link :to="'/mypage'">{{ auth.name }}</router-link><span>님 환영합니다.</span>
        </li>
        <!-- not logined -->
        <li v-if="!auth.logined"><router-link :to="'/signin'" class="link">로그인</router-link></li>
        <li v-if="!auth.logined"><router-link :to="'/signup'" class="link">회원가입</router-link></li>
        <!-- logined -->
        <li v-if="auth.logined"><router-link :to="'/signout'" class="link">로그아웃</router-link></li>
        <li v-if="auth.logined"><router-link :to="'/mypage'" class="link">마이페이지</router-link></li>
        <li v-if="auth.logined && auth.type === 'instructor'" class="link"><router-link :to="'#'">강사페이지</router-link></li>
      </ul>
    </div>
    <app-nav></app-nav>
  </header>
</template>

<script>
import AppNav from '@/components/layout/AppNav'

export default {
  name: 'AppHeader',
  components: {
    AppNav
  },
  data () {
    return {
      title: 'MAN2SFIX',
      auth: {}
    }
  },
  created () {
    this.getAuth()
  },
  watch: {
    '$route': 'getAuth'
  },
  methods: {
    getAuth () {
      this.$store.commit('setState')
      this.auth = this.$store.getters.getStateAuth
    }
  }
}
</script>

<style lang="scss" scoped>
  .app-header {
    padding-top: map-get($spacers, 3);
    border-bottom: 1px solid gray('300');

    .inner {
      max-width: 1200px;
      height: $font-size-base * 2;
      display: flex;
      align-items: center;
      margin: 0 auto;
      padding: 0 map-get($spacers, 3);
    }

    .title,
    .btn-list,
    .link {
      height: 100%;
    }

    .title {
      font-size: $font-size-base * 1.5;

      a {
        display: flex;
        align-items: center;
      }
    }

    .btn-list {
      flex: auto;
      text-align: right;
      font-size: 0;

      li:not(.welcome),
      .link {
        height: 100%;
      }

      li {
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
  }
</style>
