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
