<template>
  <app-layout>
    <home-visual></home-visual>
    <home-class></home-class>
    <home-community></home-community>
    <home-training></home-training>
    <home-magazine></home-magazine>
  </app-layout>
</template>

<script>
import AppLayout from '@/components/layout/AppLayout'
import HomeVisual from '@/components/home/HomeVisual'
import HomeClass from '@/components/home/HomeClass'
import HomeMagazine from '@/components/home/HomeMagazine'
import HomeCommunity from '@/components/home/HomeCommunity'
import HomeTraining from '@/components/home/HomeTraining'

export default {
  name: 'Home',
  components: {
    AppLayout,
    HomeVisual,
    HomeClass,
    HomeMagazine,
    HomeCommunity,
    HomeTraining
  }
}
</script>
