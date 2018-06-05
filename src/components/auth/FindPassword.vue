<template>
  <div class="form">
    <form @submit.prevent="onSubmit">
      <div class="form-group" :class="{ 'status': $v.form.email.$error }">
        <label for="email" class="form-group-title"><span class="text-danger">*</span> 이메일 (Man2sfix@man2sfix.com)</label>
        <at-input type="email" v-model.trim="$v.form.email.$model" :status="$v.form.email.$error ? 'error' : ''" size="large" id="email"></at-input>
        <div class="form-group-feedback" v-if="!$v.form.email.required">이메일을 입력해주세요.</div>
        <div class="form-group-feedback" v-if="!$v.form.email.email">올바른 이메일을 입력해주세요.</div>
      </div>
      <div class="form-group" :class="{ 'status': $v.form.phone.$error }">
        <label for="phone" class="form-group-title"><span class="text-danger">*</span> 휴대폰 번호 (010-0000-0000)</label>
        <at-input v-model.trim="$v.form.phone.$model" :status="$v.form.phone.$error ? 'error' : ''" size="large" id="phone"></at-input>
        <div class="form-group-feedback" v-if="!$v.form.phone.required">휴대폰 번호를 입력해주세요.</div>
        <div class="form-group-feedback" v-if="!$v.form.phone.helpers">올바른 휴대폰 번호를 입력해주세요.</div>
      </div>
      <at-button hollow class="form-btn" nativeType="submit">비밀번호 찾기</at-button>
    </form>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email, helpers } from 'vuelidate/lib/validators'

export default {
  name: 'FindPassword',
  mixins: [
    validationMixin
  ],
  data () {
    return {
      loading: false,
      form: {
        email: '',
        phone: ''
      }
    }
  },
  validations: {
    form: {
      email: {
        required,
        email
      },
      phone: {
        required,
        helpers: helpers.regex('phone', /^\d{3}-\d{3,4}-\d{4}$/)
      }
    }
  },
  methods: {
    async onSubmit (formName) {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        // 로딩 시작
        this.loading = true
        // 폼 데이터 셋
        const formData = {
          email: this.form.email,
          phone: this.form.phone
        }
        // 리턴 boolean
        const bool = await this.$store.dispatch('findPassword', formData)
        // 리턴값에 따른 분기
        if (bool) {
          this.$message({
            message: '이메일을 확인하여 주세요.',
            type: 'success'
          })
        }
        // 로딩 끝
        this.loading = false
      } else {
        return false
      }
    }
  }
}
</script>
