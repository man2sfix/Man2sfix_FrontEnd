<template>
  <section class="app-container">
    <app-header></app-header>
    <section class="app-contents">
      <slot></slot>
    </section>
    <app-footer></app-footer>
  </section>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader'
import AppFooter from '@/components/layout/AppFooter'

export default {
  name: 'AppLayout',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss">
.app-contents {
  padding-top: $font-size-base * 3.5;

  @include clearfix();

  .inner-contents {
    max-width: 1100px;
    padding: map-get($spacers, 5) map-get($spacers, 3);
    margin: 0 auto;
  }

  .contents-title {
    font-size: $font-size-base * 2;
    color: gray('900');
    text-align: center;
    padding: 0 0 map-get($spacers, 3);
  }

  .contents-title-sub {
    font-size: $font-size-lg;
    color: gray('800');
  }

  .contents-text {
    font-size: $font-size-base;
    color: gray('800');
    text-align: center;
  }

  @include media-breakpoint-up(md) {
    padding-top: 0;
  }
}
</style>
