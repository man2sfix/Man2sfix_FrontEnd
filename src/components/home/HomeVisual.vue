<template>
  <article class="visual-carousel">
    <tiny-slider
      :mouse-drag="true"
      :loop="true"
      items="1"
      :controls="true"
      :nav="true"
      controlsContainer="#visual-carousel-controls"
      >
      <div v-for="(item, index) in list" :key="index" :style="{ 'background': `url(${item.background}) no-repeat center top` }">{{ index }}</div>
    </tiny-slider>
    <div class="visual-carousel-controls" id="visual-carousel-controls">
      <el-button icon="el-icon-arrow-left" circle plain></el-button>
      <el-button icon="el-icon-arrow-right" circle plain></el-button>
    </div>
  </article>
</template>

<script>
import VueTinySlider from 'vue-tiny-slider'

export default {
  name: 'HomeVisual',
  data () {
    return {
      list: [
        {
          background: 'https://i.ytimg.com/vi/5-LyRjHlRgQ/maxresdefault.jpg'
        },
        {
          background: 'http://aslania.com/wp-content/uploads/2018/03/background-wallpaper-4.jpg'
        },
        {
          background: 'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/4Ku9x8aIg/glamorous-sparkly-background-texture-from-real-glitter_bdfxfpnfdx_thumbnail-full01.png'
        }
      ]
    }
  },
  components: {
    'tiny-slider': VueTinySlider
  }
}
</script>

<style lang="scss">
.visual-carousel {
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid gray('300');

  @include clearfix();

  .tns-item {
    float: left;
    height: 400px;
  }

  &-controls {
    .el-button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);

      &:first-child {
        left: map-get($spacers, 4);
      }

      &:last-child {
        right: map-get($spacers, 4);
      }
    }
  }

  .tns-nav {
    font-size: 0;
    position: absolute;
    bottom: map-get($spacers, 4);
    left: 0;
    width: 100%;
    text-align: center;
    z-index: $zindex-carousel;

    button {
      border: 1px solid gray('300');
      background-color: transparent;
      border-radius: 50%;
      width: $font-size-base * 0.6;
      height: $font-size-base * 0.6;
      margin: 0 map-get($spacers, 1);
      padding: 0;

      &:hover {
        cursor: pointer;
      }

      &:focus,
      &:active {
        border: 0;
        outline: 0;
      }

      &.tns-nav-active {
        background-color: gray('300');
      }
    }
  }
}
</style>
