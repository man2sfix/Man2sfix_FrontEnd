<template>
  <header class="app-header">
    <div class="inner">
      <h1 class="title">
        <a href="/">{{ title }}</a>
      </h1>
      <app-nav></app-nav>
    </div>
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
      title: 'MAN2SFIX'
    }
  }
}
</script>

<style lang="scss" scoped>
  .app-header {
    height: $font-size-base * 5;
    border-bottom: 1px solid gray('300');

    .inner,
    .title,
    a {
      height: 100%;
    }

    .inner {
      max-width: 1200px;
      height: 100%;
      display: flex;
      align-items: center;
      margin: 0 auto;
      padding: 0 map-get($spacers, 3);
    }

    .title {
      font-size: $font-size-base * 1.5;

      a {
        display: flex;
        align-items: center;
      }
    }
  }
</style>
