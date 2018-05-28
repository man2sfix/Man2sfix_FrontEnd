<template>
  <div class="collapse-contents">
    <el-collapse accordion>
      <el-collapse-item v-for="(item, index) in items" :key="index" :name="index">
        <template slot="title">
          {{ item.title }}
        </template>
        <div>{{ item.text }}</div>
      </el-collapse-item>
    </el-collapse>
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
  .el-collapse {
    border-top: 0;
  }

  .el-collapse-item__header {
    font-size: $font-size-base;
  }
}
</style>
