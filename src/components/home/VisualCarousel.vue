<template>
  <article class="visual">
    <el-carousel
      :trigger="carousel.trigger"
      :autoplay="carousel.autoplay"
      :arrow="carousel.arrow"
      :height="carousel.height"
    >
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </article>
</template>

<script>
export default {
  name: 'Visual',
  data () {
    return {
      carousel: {
        trigger: 'click',
        autoplay: false,
        arrow: 'hover',
        height: '100%'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .visual {
    &,
    .el-carousel {
      height: 400px;
    }

    .el-carousel__item {
      background-color: gray('400');
    }
  }
</style>
