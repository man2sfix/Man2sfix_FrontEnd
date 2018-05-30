<template>
  <article class="inner-contents contents-magazine">
    <h2 class="contents-title-sub">다양한 스피치 정보가 필요하신가요?</h2>
    <router-link :to="'/magazine'" class="btn-more">더보기</router-link>
    <div class="list-magazine">
      <tiny-slider
        :mouse-drag="true"
        :loop="false"
        items="4"
        :controls="true"
        gutter="20"
        controlsContainer="#list-magazine-controls"
        >
        <div v-for="(item, index) in list" :key="index">
          <magazine-item :item="item"></magazine-item>
        </div>
      </tiny-slider>
      <div class="list-magazine-controls" id="list-magazine-controls" v-if="list.length > 1">
        <el-button icon="el-icon-arrow-left" circle plain></el-button>
        <el-button icon="el-icon-arrow-right" circle plain></el-button>
      </div>
    </div>
  </article>
</template>

<script>
import VueTinySlider from 'vue-tiny-slider'
import MagazineItem from '@/components/magazine/MagazineItem'

export default {
  name: 'HomeMagazine',
  data () {
    return {
      list: [
        {
          thumb: 'http://element.eleme.io/static/hamburger.50e4091.png',
          title: '제목제목제목제목제목제목제목제목',
          date: new Date()
        },
        {
          thumb: 'http://element.eleme.io/static/hamburger.50e4091.png',
          title: '제목제목제목제목제목제목제목제목',
          date: new Date()
        }
      ]
    }
  },
  components: {
    'tiny-slider': VueTinySlider,
    MagazineItem
  }
}
</script>

<style lang="scss" scoped>
.contents-magazine {
  position: relative;
  overflow: hidden;

  .contents-title-sub {
    margin-bottom: map-get($spacers, 4);
  }

  .btn-more {
    position: absolute;
    top: map-get($spacers, 5);
    right: map-get($spacers, 3);
    padding: map-get($spacers, 2);
    border: 1px solid gray('300');
    font-size: $font-size-base * 0.8;
    color: gray('700');
    transform: translateY(-30%);

    &:hover {
      border-color: theme-color('primary');
      color: theme-color('primary');
    }
  }

  .list-magazine {
    position: relative;

    @include clearfix();

    > div:not(.tns-outer) {
      width: calc(25% - 20px);
    }

    .tns-item {
      float: left;
    }

    &-controls {
      .el-button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: $zindex-carousel;

        &:first-child {
          left: -(map-get($spacers, 3));
        }

        &:last-child {
          right: -(map-get($spacers, 3));
        }

        &[disabled] {
          opacity: 0.6;
        }
      }
    }
  }
}
</style>
