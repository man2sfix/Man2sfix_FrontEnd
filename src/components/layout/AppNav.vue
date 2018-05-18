<template>
  <nav :class="visible ? 'app-nav active' : 'app-nav'">
    <el-button plain circle class="btn-nav-show" @click="visible = !visible" v-if="!visible"><i class="fas fa-bars"></i></el-button>
    <div class="app-nav-inner">
      <el-button plain circle class="btn-nav-close" @click="visible = !visible" v-if="visible"><i class="fas fa-times"></i></el-button>
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
        { name: '맨투스픽', href: '/home' },
        { name: '강사진 소개', href: '/instructors' },
        { name: '매거진', href: '/magazine' },
        { name: '커뮤니티', href: '/community' },
        { name: '자주 묻는 질문', href: '/faq' },
        { name: '제휴 및 문의', href: '/contact' }
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

  .btn-nav-show,
  .btn-nav-close {
    position: fixed;
    top: map-get($spacers, 2);
    right: map-get($spacers, 3);
  }

  &.active {
    right: 0;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
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
    border-top: 1px solid gray('300');

    &:last-child {
      border-bottom: 1px solid gray('300');
    }
  }

  .link {
    display: flex;
    position: relative;
    align-items: center;
    padding: map-get($spacers, 3) map-get($spacers, 4);
  }

  .router-link-active {
    color: theme-color('primary');

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 5px;
      height: 100%;
      background-color: theme-color('primary');
    }
  }

  @include media-breakpoint-up(sm) {
    & {
      position: static;

      &-inner {
        position: static;
        width: 100%;
        font-size: 0;
      }

      &-list {
        max-width: 1100px;
        margin: 0 auto;
        padding: 0 map-get($spacers, 3);
      }

      .nav-item {
        display: inline-block;
        border: 0;

        &:last-child {
          border-bottom: 0;
        }
      }
    }
  }
}
</style>
