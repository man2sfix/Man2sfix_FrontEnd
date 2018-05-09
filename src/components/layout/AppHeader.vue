<template>
  <header class="app-header">
    <div class="inner">
      <h1 class="title">
        <a href="/">{{ title }}</a>
      </h1>
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
      title: 'MAN2SFIX'
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
    a {
      height: 100%;
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
