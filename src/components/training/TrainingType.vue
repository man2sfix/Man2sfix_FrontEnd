<template>
  <div class="inner-contents">
    <h4 class="contents-title-sub">모의훈련 선택</h4>
    <div class="form" v-loading="loading">
      <el-form ref="form" :model="form" :rules="rules" label-position="top" size="medium" @submit.prevent.native="onSubmit('form')">
        <el-form-item label="유형선택" prop="type">
          <el-radio-group v-model="form.type">
            <el-radio v-for="(item, index) in type" :key="index" :label="item.value" @change="typeChange(item.value)">{{ item.text }}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="질문유형 선택" prop="qType" v-if="form.type">
          <el-radio-group v-model="form.qType">
            <el-radio :label="'select'">질문 선택</el-radio>
            <el-radio :label="'random'">랜덤 질문</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="질문 선택" prop="question" v-if="form.qType === 'select' && question.length > 0">
          <el-checkbox-group v-model="form.question">
            <div v-for="(item, index) in question" :key="index"><el-checkbox :label="item.value">{{ item.text }}</el-checkbox></div>
          </el-checkbox-group>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrainingType',
  data () {
    return {
      loading: false,
      type: [
        { value: 'basic', text: '기본편' },
        { value: 'financial', text: '금융직' },
        { value: 'sales', text: '영업직' },
        { value: 'crewmember', text: '승무원' }
      ],
      question: [],
      form: {
        type: null,
        qType: null,
        question: []
      },
      rules: {
        type: [
          { required: true, message: '유형을 선택해주세요.', trigger: 'change' }
        ],
        qType: [
          { required: true, message: '질문 유형을 선택해주세요.', trigger: 'change' }
        ],
        question: [
          { required: true, message: '질문을 선택해주세요.', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    typeChange (value) {
      if (value === 'basic') {
        this.question = [
          { value: 'basic', text: '기본편' }
        ]
      } else {
        this.question = []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.contents-title-sub {
  max-width: 800px;
  margin: 0 auto;
}

.form {
  max-width: 800px;
  margin: map-get($spacers, 3) auto;
}
</style>
