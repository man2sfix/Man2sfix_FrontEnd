<template>
  <div class="collapse-contents">
    <h3 class="collapse-contents-title">{{ title }}</h3>
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
  name: 'FaqCollapse',
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      requirend: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .collapse-contents {
    width: calc(50% - 10px);

    &:nth-child(odd) {
      float: left;
    }

    &:nth-child(even) {
      float: right;
    }

    &-title {
      position: relative;
      font-size: $font-size-lg;
      color: gray('800');
      text-align: center;
      padding: map-get($spacers, 5) 0 map-get($spacers, 5);

      &::after {
        content: '';
        position: absolute;
        bottom: map-get($spacers, 4);
        left: 50%;
        transform: translate(-50%, -50%);
        width: 60px;
        height: 2px;
        background-color: theme-color('primary');
      }
    }

    .el-collapse-item__header {
      font-size: $font-size-base;
    }
  }
</style>
