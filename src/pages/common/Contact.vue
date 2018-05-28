<template>
  <app-layout>
    <contact-visual></contact-visual>
    <contact-form></contact-form>
  </app-layout>
</template>

<script>
import AppLayout from '@/components/layout/AppLayout'
import ContactForm from '@/components/contact/ContactForm'
import ContactVisual from '@/components/contact/ContactVisual'

export default {
  name: 'Contact',
  components: {
    AppLayout,
    ContactVisual,
    ContactForm
  }
}
</script>
