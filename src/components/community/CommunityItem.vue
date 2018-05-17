<template>
  <div class="community-item">
      <div class="community-item-inner">
        <div class="thumb">
          <router-link :to="'/'" class="link">
            <img :src="item.thumb" class="image">
          </router-link>
        </div>
        <div class="info">
          <router-link :to="'/'" class="link">
            <h3 class="title">{{ item.title }}</h3>
            <p class="description">{{ item.description }}</p>
            <time class="date">{{ item.date | moment('YYYY-MM-DD HH:mm') }}</time>
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
export default {
  name: 'CommunityItem',
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
  width: calc(50% - 10px);
  display: inline-block;
  margin-left: 20px;
  margin-top: 20px;
  border: 1px solid gray('300');

  &:nth-child(odd) {
    margin-left: 0;
  }

  &-inner {
    display: flex;
    align-items: center;
    position: relative;
  }

  .thumb {
    flex: none;
    width: 40%;
    height: 100%;
    overflow: hidden;

    img {
      display: block;
      height: 100%;
    }
  }

  .info {
    flex: auto;
    padding: map-get($spacers, 3);
    line-height: 1.5;
  }

  .title,
  .description {
    color: gray('900');
    font-size: $font-size-base;
    padding-bottom: map-get($spacers, 1);
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
