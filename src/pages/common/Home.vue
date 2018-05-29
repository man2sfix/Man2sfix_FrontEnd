<template>
  <app-layout>
    <home-visual></home-visual>
    <home-class></home-class>
    <home-magazine></home-magazine>
    <home-training></home-training>
  </app-layout>
</template>

<script>
import AppLayout from '@/components/layout/AppLayout'
import HomeVisual from '@/components/home/HomeVisual'
import HomeClass from '@/components/home/HomeClass'
import HomeMagazine from '@/components/home/HomeMagazine'
import HomeTraining from '@/components/home/HomeTraining'

export default {
  name: 'Home',
  components: {
    AppLayout,
    HomeVisual,
    HomeClass,
    HomeMagazine,
    HomeTraining
  }
}
</script>
