<template>
  <app-layout>
    <div class="inner-contents">
      <h2 class="contents-title">모의훈련</h2>
      <p class="contents-text">모의훈련을 통해 스피치를 연습해보세요.</p>
      <router-view/>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from '@/components/layout/AppLayout'

export default {
  name: 'Training',
  data () {
    return {

    }
  },
  components: {
    AppLayout
  }
}
</script>

<style lang="scss">
.training-step {
  padding: map-get($spacers, 5) 0 0;
}

.training-container {
  .training-form {
    max-width: 850px;
    padding: map-get($spacers, 4);
    margin: map-get($spacers, 5) auto 0;
    border: 1px solid gray('300');

    &-title {
      font-size: $font-size-base;
      padding-bottom: map-get($spacers, 3);
      text-align: center;
    }

    &-radio {
      padding: map-get($spacers, 2);
    }
  }
}

.training-btn {
  text-align: center;
  padding: map-get($spacers, 5);

  .link {
    display: inline-block;
    padding: map-get($spacers, 3);
    font-size: $font-size-sm;
    border: 1px solid gray('300');

    &:hover {
      color: theme-color('primary');
      border-color: theme-color('primary');
    }
  }
}
</style>
