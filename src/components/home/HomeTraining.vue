<template>
  <article class="contents-training">
    <div class="inner-contents">
      <h2 class="contents-title">지금, 모의훈련을 시작해보세요!</h2>
      <p class="contents-text">체계적인 전문가의 피드백을 통해 스피치를 향상시킬 수 있습니다.</p>
      <router-link :to="'/training'" class="link-training">모의훈련 하러가기</router-link>
    </div>
  </article>
</template>

<script>
export default {
  name: 'HomeTraining',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.contents-training {
  padding: map-get($spacers, 5) 0;
  background-color: gray('100');
  text-align: center;

  .link-training {
    display: block;
    max-width: 300px;
    margin: map-get($spacers, 5) auto 0;
    padding: map-get($spacers, 3);
    font-size: $font-size-lg;
    color: theme-color('primary');
    border: 1px solid theme-color('primary');

    &:hover {
      color: $white;
      background-color: theme-color('primary');
      cursor: pointer;
    }
  }
}
</style>
