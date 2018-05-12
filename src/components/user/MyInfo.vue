<template>
  <el-card shadow="never">
    {{ info }}
  </el-card>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
