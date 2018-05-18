<template>
  <header class="app-header">
    <app-title></app-title>
    <app-nav :auth="auth"></app-nav>
  </header>
</template>

<script>
import AppTitle from '@/components/layout/AppTitle'
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
    AppNav
  }
}
</script>

<style lang="scss" scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: $white;
  border-bottom: 1px solid gray('300');
  z-index: $zindex-layout;
}
</style>
