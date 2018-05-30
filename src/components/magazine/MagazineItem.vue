<template>
  <div class="magazine-item">
    <router-link :to="'/'" class="link">
      <div class="thumb">
        <img :src="item.thumb" class="image">
      </div>
      <div class="info">
        <h3 class="title">{{ item.title }}</h3>
        <time class="date">{{ item.date | moment('YYYY-MM-DD HH:mm') }}</time>
      </div>
    </router-link>
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
  position: relative;
  overflow: hidden;

  &:hover {
    .thumb {
      img {
        transform: scale(1.10);
      }
    }
  }

  .link {
    display: block;
  }

  .thumb {
    overflow: hidden;
    background: $black;

    img {
      display: block;
      width: 100%;
      transition: $transition-base;
    }
  }

  .info {
    padding: map-get($spacers, 3);
    line-height: 1.5;
    border: 1px solid gray('300');
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
