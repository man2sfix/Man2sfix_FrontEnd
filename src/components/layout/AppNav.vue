<template>
  <nav :class="visible ? 'app-nav active' : 'app-nav'">
    <div class="background" v-if="visible" @click="visible = !visible"></div>
    <button type="button" class="btn-nav--show" v-if="!visible" @click="visible = !visible"><i class="fas fa-bars"></i></button>
    <div class="app-nav-inner">
      <app-auth :auth="auth"></app-auth>
      <ul class="app-nav-list">
        <li v-for="(item, index) in nav" :key="index" class="nav-item">
          <router-link :to="item.href" class="link">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import AppAuth from '@/components/layout/AppAuth'

export default {
  name: 'AppNav',
  props: {
    auth: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      visible: false,
      nav: [
        { name: '홈', href: '/home' },
        { name: '모의훈련', href: '/training' },
        { name: '정규 클래스', href: '/class' },
        { name: '강사진 소개', href: '/instructors' },
        { name: '매거진', href: '/magazine' },
        { name: '커뮤니티', href: '/community' }
      ]
    }
  },
  components: {
    AppAuth
  }
}
</script>

<style lang="scss" scoped>
.app-nav {
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100%;
  z-index: $zindex-nav;
  transition: $transition-base;

  .btn-nav--show {
    position: fixed;
    top: map-get($spacers, 1);
    right: 0;
    border: 0;
    font-size: $font-size-base;
    padding: map-get($spacers, 3);
  }

  .background {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }

  &.active {
    right: 0;

    .background {
      display: block;
    }
  }

  &-inner {
    position: absolute;
    top: 0;
    right: 0;
    width: 250px;
    height: 100%;
    background: $white;
  }

  &-list {
    padding: map-get($spacers, 3) 0;
  }

  .nav-item,
  .link {
    height: 100%;
  }

  .nav-item {
    position: relative;
    display: block;
    font-size: $font-size-sm;
  }

  .link {
    display: block;
    position: relative;
    align-items: center;
    padding: map-get($spacers, 3) map-get($spacers, 4);
  }

  .router-link-active {
    color: theme-color('primary');

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      right: map-get($spacers, 4);
      width: $font-size-base * 0.5;
      height: $font-size-base * 0.5;
      background-color: theme-color('primary');
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }
  }

  @include media-breakpoint-up(md) {
    & {
      position: static;

      &-inner {
        position: relative;
        width: 100%;
        max-width: 1100px;
        margin: 0 auto;
        font-size: 0;
      }

      &-list {
        width: 100%;
        margin: 0 auto;
        padding: 0;
      }

      &.active {
        .background {
          display: none;
        }
      }

      .btn-nav--show {
        display: none;
      }

      .nav-item {
        display: inline-block;
        border: 0;
        margin: 0 map-get($spacers, 3);

        &:last-child {
          border-bottom: 0;
        }
      }

      .link {
        padding-left: 0;
        padding-right: 0;
      }

      .router-link-active {
        &::after {
          top: auto;
          bottom: -1px;
          left: 0;
          right: auto;
          width: 100%;
          height: 2px;
          background-color: theme-color('primary');
          border-radius: 0;
          transform: none;
        }
      }
    }
  }
}
</style>
