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

<style lang="scss" scoped>
.magazine-list {
  font-size: 0;

  .magazine-item {
    display: inline-block;
    width: calc(25% - 9px);
    margin: 12px 0 0 12px;

    &:nth-child(4n + 1) {
      margin-left: 0;
    }
  }
}
</style>
