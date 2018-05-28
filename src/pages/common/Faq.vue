<template>
  <app-layout>
    <faq-visual></faq-visual>
    <faq-collapse></faq-collapse>
  </app-layout>
</template>

<script>
import AppLayout from '@/components/layout/AppLayout'
import FaqVisual from '@/components/faq/FaqVisual'
import FaqCollapse from '@/components/faq/FaqCollapse'

export default {
  name: 'Faq',
  components: {
    AppLayout,
    FaqVisual,
    FaqCollapse
  }
}
</script>
