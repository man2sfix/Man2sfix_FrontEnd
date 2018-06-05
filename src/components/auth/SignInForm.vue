<template>
  <div class="form">
    <form @submit.prevent="onSubmit">
      <div class="form-group" :class="{ 'status': $v.form.email.$error }">
        <label for="email" class="form-group-title"><span class="text-danger">*</span> 이메일 (Man2sfix@man2sfix.com)</label>
        <at-input type="email" v-model.trim="$v.form.email.$model" id="email" :status="$v.form.email.$error ? 'error' : ''" size="large"></at-input>
        <div class="form-group-feedback" v-if="!$v.form.email.required">이메일을 입력해주세요.</div>
        <div class="form-group-feedback" v-if="!$v.form.email.email">올바른 이메일을 입력해주세요.</div>
      </div>
      <div class="form-group" :class="{ 'status': $v.form.password.$error }">
        <label for="password" class="form-group-title"><span class="text-danger">*</span> 비밀번호</label>
        <at-input type="password" v-model.trim="$v.form.password.$model" id="password" :status="$v.form.password.$error ? 'error' : ''" size="large"></at-input>
        <div class="form-group-feedback" v-if="!$v.form.password.required">비밀번호를 입력해주세요.</div>
      </div>
      <at-button hollow class="form-btn" nativeType="submit">로그인</at-button>
      <div class="form-link">
        <router-link :to="'/find-account'" class="btn-link">이메일/비밀번호를 잊으셨나요?</router-link>
        <router-link :to="'/signup'" class="btn-link">아직 회원이 아니신가요?</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'SignInForm',
  mixins: [
    validationMixin
  ],
  data () {
    return {
      loading: false,
      form: {
        email: '',
        password: ''
      }
    }
  },
  validations: {
    form: {
      email: {
        required,
        email
      },
      password: {
        required
      }
    }
  },
  methods: {
    async onSubmit () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        // 로딩 시작
        this.loading = true
        // 폼 데이터 셋
        const formData = {
          email: this.form.email,
          password: this.form.password
        }
        // 리턴 boolean
        const bool = await this.$store.dispatch('signIn', formData)
        // 리턴값에 따른 분기
        if (bool) {
          this.$message({
            showClose: true,
            message: '로그인에 성공하였습니다.',
            type: 'success'
          })
          this.$router.replace(this.$route.query.redirect || '/')
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
