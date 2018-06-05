<template>
  <div class="inner-contents">
    <h4 class="contents-title-sub">문의상담</h4>
    <div class="form">
      <form @submit.prevent="onSubmit">
        <div class="form-group" :class="{ 'status': $v.form.type.$error }">
          <label for="type" class="form-group-title"><span class="text-danger">*</span> 문의 유형</label>
          <at-select v-model="form.type" :status="$v.form.type.$error ? 'error' : ''" size="large">
            <at-option value="alliance">제휴 문의사항</at-option>
            <at-option value="instructor">강사관련 문의사항</at-option>
            <at-option value="problem">불편사항</at-option>
            <at-option value="error">오류사항</at-option>
            <at-option value="etc">기타</at-option>
          </at-select>
          <div class="form-group-feedback" v-if="!$v.form.type.required">문의 유형을 선택해주세요.</div>
        </div>
        <div class="form-group" :class="{ 'status': $v.form.email.$error }">
          <label for="email" class="form-group-title"><span class="text-danger">*</span> 답변 받을 이메일</label>
          <at-input type="email" v-model.trim="$v.form.email.$model" id="email" :status="$v.form.email.$error ? 'error' : ''" size="large"></at-input>
          <div class="form-group-feedback" v-if="!$v.form.email.required">답변받을 이메일을 입력해주세요.</div>
          <div class="form-group-feedback" v-if="!$v.form.email.email">올바른 이메일을 입력해주세요.</div>
        </div>
        <div class="form-group" :class="{ 'status': $v.form.title.$error }">
          <label for="title" class="form-group-title"><span class="text-danger">*</span> 문의 제목</label>
          <at-input v-model.trim="$v.form.title.$model" id="title" :status="$v.form.title.$error ? 'error' : ''" size="large"></at-input>
          <div class="form-group-feedback" v-if="!$v.form.email.required">제목을 입력해주세요.</div>
        </div>
        <div class="form-group" :class="{ 'status': $v.form.description.$error }">
          <label for="description" class="form-group-title"><span class="text-danger">*</span> 문의 내용</label>
          <at-textarea v-model.trim="$v.form.description.$model" :status="$v.form.description.$error ? 'error' : ''" size="large" min-rows="5"></at-textarea>
          <div class="form-group-feedback" v-if="!$v.form.description.required">문의사항을 입력해주세요.</div>
        </div>
        <at-button hollow class="form-btn" nativeType="submit">문의하기</at-button>
      </form>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'ContactForm',
  mixins: [
    validationMixin
  ],
  data () {
    return {
      loading: false,
      form: {
        type: '',
        email: '',
        title: '',
        description: ''
      }
    }
  },
  validations: {
    form: {
      type: {
        required
      },
      email: {
        required,
        email
      },
      title: {
        required
      },
      description: {
        required
      }
    }
  },
  methods: {
    async onSubmit () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        // todo
      } else {
        return false
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

  .el-select {
    width: 100%;
  }
}
</style>
