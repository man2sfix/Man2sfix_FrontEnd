<template>
  <app-layout>
    <training-visual></training-visual>
  </app-layout>
</template>

<script>
import AppLayout from '@/components/layout/AppLayout'
import TrainingVisual from '@/components/training/trainingVisual'

export default {
  name: 'Training',
  data () {
    return {

    }
  },
  components: {
    AppLayout,
    TrainingVisual
  }
}
</script>

<style lang="scss">
.training-step {
  padding: map-get($spacers, 5) 0 0;
}

.training-container {
  .training-form {
    max-width: 600px;
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
