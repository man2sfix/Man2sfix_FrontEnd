<template>
  <div class="community-list">
    <community-item v-for="(item, index) in list" :key="index" :item="item"></community-item>
  </div>
</template>

<script>
import CommunityItem from '@/components/community/CommunityItem'

export default {
  name: 'CommunityList',
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  components: {
    CommunityItem
  }
}
</script>

<style lang="scss" scoped>
.community-list {
  font-size: 0;

  .community-item {
    width: calc(50% - 10px);
    display: inline-block;
    margin-left: 20px;
    margin-top: 20px;

    &:nth-child(odd) {
      margin-left: 0;
    }
  }
}
</style>
