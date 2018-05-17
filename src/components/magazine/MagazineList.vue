<template>
  <div class="magazine-list">
    <magazine-item v-for="(item, index) in list" :key="index" :item="item"></magazine-item>
  </div>
</template>

<script>
import MagazineItem from '@/components/magazine/MagazineItem'

export default {
  name: 'MagazineList',
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  components: {
    MagazineItem
  }
}
</script>
