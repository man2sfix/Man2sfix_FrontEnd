<template>
  <div class="visual">
    <div class="visual-inner">
      <h3 class="visual-title">원하는 답변을 찾아보세요</h3>
      <p class="visual-description">
        평소 궁금해하는 질문들을 모았습니다.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FaqVisual'
}
</script>

<style lang="scss" scoped>
.visual {
  position: relative;
  background-color: gray('200');
  height: 400px;
  text-align: center;

  &-inner {
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
    line-height: 1.5;
  }

  &-title {
    font-size: $font-size-base * 2;
    padding-bottom: map-get($spacers, 3);
  }

  &-description {
    font-size: $font-size-base;
  }
}
</style>
