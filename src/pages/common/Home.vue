<template>
  <app-layout>
    <visual-carousel></visual-carousel>
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
