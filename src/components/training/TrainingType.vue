<template>
  <div class="training-form">
    <h3 class="training-form-title">모의훈련 유형을 선택하세요.</h3>
    <div class="training-form-radio" v-for="(item, index) in itmes" :key="index">
      <el-radio v-model="radio" :label="item.value">{{ item.text }}</el-radio>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrainingType',
  data () {
    return {
      radio: null,
      itmes: [
        { value: 'basic', text: '기본편' },
        { value: 'financial', text: '금융직' },
        { value: 'sales', text: '영업직' },
        { value: 'crewmember', text: '승무원' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .training-form {
    &-title {
      font-size: $font-size-base;
      padding-bottom: map-get($spacers, 2);
    }

    &-radio {
      padding: map-get($spacers, 2);
    }
  }
</style>
