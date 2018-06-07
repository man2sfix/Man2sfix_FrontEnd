<template>
  <div class="community-item">
      <div class="community-item-inner">
        <div class="thumb">
          <router-link :to="'/'" class="link">
            <img :src="item.thumb">
          </router-link>
        </div>
        <div class="info">
          <router-link :to="'/'" class="link">
            <h3 class="title">{{ item.title }}</h3>
            <p class="description">{{ item.description }}</p>
            <time class="date">{{ moment(item.date, 'YYYY-MM-DD HH:mm a') }}</time>
          </router-link>
          <span class="member"><strong>{{ item.nowMember }}</strong>명 참여중</span>
          <div class="btn-container">
            <el-button plain circle class="btn"><i class="far fa-thumbs-up"></i></el-button>
            <el-button plain circle class="btn"><i class="far fa-heart"></i></el-button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Moment from '@/mixins/moment/Moment'

export default {
  name: 'CommunityItem',
  mixins: [
    Moment
  ],
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.community-item {
  overflow: hidden;

  &-inner {
    height: 230px;
    border: 1px solid gray('300');

    @include clearfix();
  }

  &:hover {
    .thumb {
      img {
        transform: scale(1.10);
      }
    }
  }

  .thumb {
    float: left;
    width: 40%;
    height: 100%;
    overflow: hidden;

    img {
      display: block;
      height: 100%;
      transition: $transition-base;
    }
  }

  .info {
    position: relative;
    float: left;
    width: 60%;
    height: 100%;
    line-height: 1.5;

    .link {
      width: 100%;
      position: absolute;
      top: 50%;
      left: 0;
      padding: 0 map-get($spacers, 3);
      transform: translateY(-50%);
    }
  }

  .title,
  .description {
    color: gray('900');
    font-size: $font-size-base;
    padding-bottom: map-get($spacers, 1);
  }

  .title {
    @include text-truncate();
  }

  .description {
    font-size: $font-size-sm;
  }

  .date {
    color: gray('700');
    font-size: $font-size-sm;
  }

  .member {
    position: absolute;
    top: map-get($spacers, 4);
    right: map-get($spacers, 4);
    font-size: $font-size-sm;

    strong {
      color: theme-color('primary');
    }
  }

  .btn-container {
    font-size: 0;
    position: absolute;
    bottom: map-get($spacers, 4);
    right: map-get($spacers, 4);

    .btn {
      font-size: $font-size-base * 0.8;
    }
  }
}
</style>
