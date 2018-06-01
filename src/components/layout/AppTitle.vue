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
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  height: $font-size-base * 3.5;
  line-height: $font-size-base * 3.5;
  padding: 0 map-get($spacers, 3);
  font-size: $font-size-base * 1.5;
}
</style>
