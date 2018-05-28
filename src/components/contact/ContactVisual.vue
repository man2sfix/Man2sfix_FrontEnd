<template>
  <div class="visual">
    <div class="visual-inner">
      <h3 class="visual-title">도움이 필요하신가요?</h3>
      <p class="visual-description">
        맨투스픽은 더 나은 서비스를 만들기 위해<br>
        여러분의 목소리에 귀 기울이겠습니다.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactVisual'
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
