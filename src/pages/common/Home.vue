<template>
  <app-layout>
    <div class="inner-contents">
      <h2 class="contents-title">홈</h2>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from '@/components/layout/AppLayout'
import VisualCarousel from '@/components/home/VisualCarousel'

export default {
  name: 'Home',
  components: {
    AppLayout,
    VisualCarousel
  }
}
</script>
