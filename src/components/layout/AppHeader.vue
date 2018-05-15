<template>
  <header class="app-header">
    <div class="app-header-inner">
      <app-title></app-title>
      <app-auth :auth="auth"></app-auth>
    </div>
    <app-nav></app-nav>
  </header>
</template>

<script>
import AppTitle from '@/components/layout/AppTitle'
import AppAuth from '@/components/layout/AppAuth'
import AppNav from '@/components/layout/AppNav'

export default {
  name: 'AppHeader',
  data () {
    return {
      auth: {}
    }
  },
  methods: {
    getAuth () {
      this.$store.commit('setState')
      this.auth = this.$store.getters.getStateAuth
    }
  },
  created () {
    this.getAuth()
  },
  watch: {
    '$route': 'getAuth'
  },
  components: {
    AppTitle,
    AppAuth,
    AppNav
  }
}
</script>

<style lang="scss" scoped>
.app-header {
  border-bottom: 1px solid gray('300');

  &-inner {
    max-width: 1100px;
    height: $font-size-base * 4;
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding: map-get($spacers, 3);
  }
}
</style>
