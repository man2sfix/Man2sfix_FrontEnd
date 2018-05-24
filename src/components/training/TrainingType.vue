<template>
  <div class="training-container">
    <div class="training-form">
      <h3 class="training-form-title">모의훈련 유형을 선택해주세요.</h3>
      <div class="training-form-radio" v-for="(item, index) in itmes" :key="index">
        <el-radio v-model="radio" :label="item.value">{{ item.text }}</el-radio>
      </div>
    </div>
    <div class="training-btn">
      <router-link :to="{ name: 'training' }" class="link">처음으로 가기</router-link>
      <router-link :to="{ name: 'trainingQuestion', query: { type: radio } }" class="link" v-if="radio">질문 생성하기</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrainingType',
  data () {
    return {
      active: false,
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
