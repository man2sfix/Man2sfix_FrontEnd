<template>
  <div class="form-container">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="email"><span class="text-danger">*</span> 이메일</label>
        <input type="email" class="form-control" :class="{ 'is-invalid': $v.form.email.$error }" id="email" placeholder="man2sfix@man2sfix.com" v-model.trim="$v.form.email.$model">
        <div class="invalid-feedback" v-if="!$v.form.email.required">이메일을 입력해주세요.</div>
        <div class="invalid-feedback" v-if="!$v.form.email.email">올바른 이메일을 입력해주세요.</div>
      </div>
      <div class="form-group">
        <label for="password"><span class="text-danger">*</span> 비밀번호</label>
        <input type="password" class="form-control" :class="{ 'is-invalid': $v.form.password.$error }" id="password" v-model.trim="$v.form.password.$model">
        <div class="invalid-feedback" v-if="!$v.form.password.required">비밀번호를 입력해주세요.</div>
      </div>
      <button type="submit" class="btn btn-outline-primary btn-block">로그인</button>
      <div class="form-link">
        <router-link :to="'/find-account'" class="btn btn-link btn-sm btn-block text-left">이메일/비밀번호를 잊으셨나요?</router-link>
        <router-link :to="'/signup'" class="btn btn-link btn-sm btn-block text-left">아직 회원이 아니신가요?</router-link>
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
