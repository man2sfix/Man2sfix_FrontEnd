<template>
  <nav class="app-nav">
    <ul class="app-nav-list">
      <li v-for="(item, index) in nav" :key="index" class="nav-item">
        <router-link :to="item.href" class="link">{{ item.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppNav',
  data () {
    return {
      nav: [
        { name: '맨투스픽', href: '/home' },
        { name: '강사진 소개', href: '/instructors' },
        { name: '매거진', href: '/magazine' },
        { name: '커뮤니티', href: '/community' },
        { name: '자주 묻는 질문', href: '/faq' },
        { name: '제휴 및 문의', href: '/contact' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.app-nav {
  height: $font-size-base * 3;

  &-list {
    height: 100%;
    max-width: 1100px;
    display: flex;
    margin: 0 auto;
  }

  &-inner,
  .nav-item,
  .link {
    height: 100%;
  }

  .nav-item {
    display: inline-block;
    font-size: $font-size-sm;
    margin: 0 map-get($spacers, 3);
  }

  .link {
    display: flex;
    position: relative;
    align-items: center;
  }

  .router-link-active {
    color: theme-color('primary');

    &::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: theme-color('primary');
    }
  }
}
</style>
