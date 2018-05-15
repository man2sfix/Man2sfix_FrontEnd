<template>
  <div class="magazine-item">
    <el-card :body-style="{ padding: '0px' }" shadow="never">
      <div class="thumb">
        <img :src="item.thumb" class="image">
        <el-button icon="el-icon-star-off" circle plain class="btn-like"></el-button>
      </div>
      <div class="info">
        <h3 class="title">{{ item.title }}</h3>
        <time class="date">{{ item.date | moment('YYYY-MM-DD HH:mm') }}</time>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'MagazineItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.magazine-item {
  width: calc(25% - 9px);
  margin: 0 0 12px 12px;
  display: inline-block;

  &:nth-child(4n + 1) {
    margin-left: 0;
  }

  .thumb {
    position: relative;

    img {
      display: block;
      width: 100%;
    }

    .btn-like {
      position: absolute;
      top: map-get($spacers, 2);
      right: map-get($spacers, 2);
      border: 0;
      color: $white;
      font-size: $font-size-lg;

      &:focus,
      &:hover {
        background: transparent;
        transform: scale(1.3);
        transition: $transition-base;
      }
    }
  }

  .info {
    padding: map-get($spacers, 3);
    line-height: 1.5;
  }

  .title {
    color: gray('900');
    font-size: $font-size-base;
    padding-bottom: map-get($spacers, 1);

    @include text-truncate();
  }

  .date {
    color: gray('700');
    font-size: $font-size-sm;
  }
}
</style>
