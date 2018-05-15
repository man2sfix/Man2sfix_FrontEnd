<template>
  <div class="community-item">
    <el-card :body-style="{ padding: '0px' }" shadow="never">
      <div class="community-item-inner">
        <div class="thumb">
          <img :src="item.thumb" class="image">
        </div>
        <div class="info">
          <h3 class="title">{{ item.title }}</h3>
          <p class="description">{{ item.description }}</p>
          <time class="date">{{ item.date | moment('YYYY-MM-DD HH:mm') }}</time>
          <span class="member"><strong>{{ item.nowMember }}</strong>명 참여중</span>
        </div>
      </div>
    </el-card>
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
  margin-bottom: 20px;

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
    top: map-get($spacers, 3);
    right: map-get($spacers, 3);
    font-size: $font-size-sm;

    strong {
      color: theme-color('primary');
    }
  }
}
</style>
