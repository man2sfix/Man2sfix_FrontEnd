<template>
  <h1 class="app-title">
    <router-link :to="'/home'" class="link">{{ title }}</router-link>
  </h1>
</template>

<script>
export default {
  name: 'AppTitle',
  data () {
    return {
      title: 'Man2sfix'
    }
  }
}
</script>

<style lang="scss" scoped>
.app-title {
  height: 100%;
  font-size: $font-size-base * 1.5;

  .link {
    display: flex;
    align-items: center;
    height: 100%;
  }
}
</style>
