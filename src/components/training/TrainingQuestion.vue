<template>
  <div class="training-container">
    <div class="training-form">
      <h3 class="training-form-title">모의훈련 질문을 선택해주세요.</h3>
      <div class="training-form-radio" v-for="(item, index) in list" :key="index">
        <el-radio v-model="radio" :label="item.value">{{ item.text }}</el-radio>
      </div>
    </div>
    <div class="training-btn" v-if="radio">
      <router-link :to="{ name: 'trainingType' }" class="link">이전단계</router-link>
      <router-link :to="{ name: 'trainingVideo', query: { question: radio, type: type } }" class="link" v-if="radio">훈련하기</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrainingQuestion',
  data () {
    return {
      type: '',
      radio: null,
      list: []
    }
  },
  methods: {
    init () {
      this.type = this.$route.query.type
    },
    fetchData () {
      this.list = [
        { value: 1, text: '학창시절에 실패한 경험이 있다면 무엇인가?' },
        { value: 2, text: '많은 사람이 반대한 일을 추진한 경험이 있는가?' },
        { value: 3, text: '살면서 가장 적극적으로 일한 경험에 대해서 말하시오.' },
        { value: 4, text: '자신의 후배가 팀장으로 발령이 난다면?' },
        { value: 5, text: '상사가 부당한 일을 시킨다면 어떻게 하겠는가?' }
      ]
    }
  },
  watch: {
    '$route': 'init, fetchData'
  },
  created () {
    this.init()
    this.fetchData()
  }
}
</script>

<style lang="scss" scoped>

</style>
