<template>
  <div class="collapse-contents">
    <at-collapse simple accordion>
      <at-collapse-item v-for="(item, index) in items" :key="index">
        <div slot="title">{{ item.title }}</div>
        <div>
          {{ item.text }}
        </div>
      </at-collapse-item>
    </at-collapse>
  </div>
</template>

<script>
export default {
  name: 'FaqCollapseItem',
  props: {
    items: {
      type: Array,
      requirend: true
    }
  }
}
</script>

<style lang="scss" scoped>
.collapse-contents {
  font-size: $font-size-sm;
}
</style>
