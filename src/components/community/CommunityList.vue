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
