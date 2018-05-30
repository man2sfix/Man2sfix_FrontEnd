<template>
  <div class="class-item">
    <div class="thumb">
      <img :src="item.thumb" :alt="item.title">
    </div>
    <div class="info">
      <h3 class="title">{{ item.title }}</h3>
      <p class="description">{{ item.description }}</p>
      <router-link :to="item.link" class="btn-detail">상세보기</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClassItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.class-item {
  position: relative;
  overflow: hidden;

  &:hover {
    .thumb {
      img {
        transform: scale(1.10);
      }
    }
  }

  .thumb {
    font-size: 0;
    overflow: hidden;

    img {
      display: block;
      width: 100%;
      transition: $transition-base;
    }
  }

  .info {
    padding: map-get($spacers, 3);
    border: 1px solid gray('300');

    .title {
      font-size: $font-size-base;
      color: gray('900');

      @include text-truncate();
    }

    .description {
      font-size: $font-size-sm;
      padding: map-get($spacers, 2) 0 map-get($spacers, 3);
      line-height: 1.5;
      color: gray('800');
    }

    .btn-detail {
      display: block;
      margin: 0 auto;
      padding: map-get($spacers, 2) map-get($spacers, 3);
      font-size: $font-size-sm;
      color: theme-color('primary');
      border: 1px solid theme-color('primary');
      text-align: center;

      &:hover {
        background-color: theme-color('primary');
        color: $white;
      }
    }
  }
}
</style>
