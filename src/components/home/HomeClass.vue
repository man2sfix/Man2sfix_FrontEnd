<template>
  <article class="inner-contents contents-class">
    <h2 class="contents-title-sub">나에게 맞는 클래스로 스피치를 시작하세요!</h2>
    <router-link :to="'/class'" class="btn-more">더보기</router-link>
    <div class="list-class">
      <tiny-slider
        :mouse-drag="true"
        :loop="false"
        items="4"
        :controls="true"
        gutter="20"
        controlsContainer="#list-class-controls"
        >
        <div v-for="(item, index) in list" :key="index">
          <class-item :item="item"></class-item>
        </div>
      </tiny-slider>
      <div class="list-class-controls" id="list-class-controls" v-if="list.length > 1">
        <el-button icon="el-icon-arrow-left" circle plain></el-button>
        <el-button icon="el-icon-arrow-right" circle plain></el-button>
      </div>
    </div>
  </article>
</template>

<script>
import VueTinySlider from 'vue-tiny-slider'
import ClassItem from '@/components/class/ClassItem'

export default {
  name: 'HomeClass',
  data () {
    return {
      list: [
        {
          link: '/',
          thumb: 'http://ganlanyuan.github.io/tiny-slider/tests/images/1000x900/3.png',
          title: '초보 스피치 강좌',
          description: '스피치라면 몸서리치는 분을 위한 스피치 강좌'
        },
        {
          link: '/',
          thumb: 'http://ganlanyuan.github.io/tiny-slider/tests/images/1000x900/3.png',
          title: '초보 스피치 강좌',
          description: '스피치라면 몸서리치는 분을 위한 스피치 강좌'
        },
        {
          link: '/',
          thumb: 'http://ganlanyuan.github.io/tiny-slider/tests/images/1000x900/3.png',
          title: '초보 스피치 강좌',
          description: '스피치라면 몸서리치는 분을 위한 스피치 강좌'
        },
        {
          link: '/',
          thumb: 'http://ganlanyuan.github.io/tiny-slider/tests/images/1000x900/3.png',
          title: '초보 스피치 강좌',
          description: '스피치라면 몸서리치는 분을 위한 스피치 강좌'
        },
        {
          link: '/',
          thumb: 'http://ganlanyuan.github.io/tiny-slider/tests/images/1000x900/3.png',
          title: '초보 스피치 강좌',
          description: '스피치라면 몸서리치는 분을 위한 스피치 강좌'
        }
      ]
    }
  },
  components: {
    'tiny-slider': VueTinySlider,
    ClassItem
  }
}
</script>

<style lang="scss" scoped>
.contents-class {
  position: relative;
  overflow: hidden;
  padding-bottom: 0;

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

  .list-class {
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
