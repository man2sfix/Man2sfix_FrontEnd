<template>
  <div class="form-container">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="name"><span class="text-danger">*</span> 이름</label>
        <input type="text" class="form-control" :class="{ 'is-invalid': $v.form.name.$error }" id="name" placeholder="홍길동" v-model.trim="$v.form.name.$model">
        <div class="invalid-feedback" v-if="!$v.form.name.required">이름을 입력해주세요.</div>
        <div class="invalid-feedback" v-if="!$v.form.name.minLength || !$v.form.name.maxLength">이름은 2글자 이상 5글자 이하로 입력해주세요.</div>
      </div>
      <div class="form-group">
        <label for="email"><span class="text-danger">*</span> 이메일</label>
        <input type="email" class="form-control" :class="{ 'is-invalid': $v.form.email.$error }" id="email" placeholder="man2sfix@man2sfix.com" v-model.trim="$v.form.email.$model">
        <label class="form-control-checkbox"><input type="checkbox" v-model.trim="$v.form.emailAgree.$model" :checked="form.emailAgree"> 이메일 수신 동의</label>
        <div class="invalid-feedback" v-if="!$v.form.email.required">이메일을 입력해주세요.</div>
        <div class="invalid-feedback" v-if="!$v.form.email.email">올바른 이메일을 입력해주세요.</div>
      </div>
      <div class="form-group">
        <label for="password"><span class="text-danger">*</span> 비밀번호</label>
        <input type="text" class="form-control" :class="{ 'is-invalid': $v.form.passowrd.$error }" id="password" v-model.trim="$v.form.password.$model">
        <div class="invalid-feedback" v-if="!$v.form.password.required">비밀번호를 입력해주세요.</div>
        <div class="invalid-feedback" v-if="!$v.form.password.minLength">비밀번호는 6글자 이상으로 입력해주세요.</div>
      </div>
      <div class="form-group">
        <label for="passwordConfirm"><span class="text-danger">*</span> 비밀번호 확인</label>
        <input type="text" class="form-control" :class="{ 'is-invalid': $v.form.passwordConfirm.$error }" id="passwordConfirm" v-model.trim="$v.form.passwordConfirm.$model">
        <div class="invalid-feedback" v-if="!$v.form.passwordConfirm.sameAsPassword">비밀번호를 확인하여 주세요.</div>
      </div>
    </form>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email, minLength, maxLength, sameAs } from 'vuelidate/lib/validators'

import SignUpTerms from '@/components/auth/SignUpTerms'
import SignUpPrivacy from '@/components/auth/SignUpPrivacy'

export default {
  name: 'SignUpInstructor',
  mixins: [
    validationMixin
  ],
  data () {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
        phone: '',
        gender: null,
        birthday: '',
        greeting: '',
        academicFile: '',
        careerFile: '',
        completionFile: '',
        profile: '',
        terms: false,
        privacy: false,
        emailAgree: true,
        phoneAgree: true,
        instructorVerified: false,
        instructorActive: true
      }
    }
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(5)
      },
      email: {
        required,
        email
      },
      passowrd: {
        required,
        minLength: minLength(6)
      },
      passwordConfirm: {
        required,
        sameAsPassword: sameAs('password')
      }
    }
  },
  methods: {
    async onSubmit (formName) {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        // 로딩 시작
        this.loading = true
        // 폼 데이터 set
        const formData = new FormData()
        formData.append('type', 'instructor')
        formData.append('name', this.form.name)
        formData.append('email', this.form.email)
        formData.append('password', this.form.password)
        formData.append('phone', this.form.phone)
        formData.append('gender', this.form.gender)
        formData.append('birthday', this.form.birthday)
        formData.append('greeting', this.form.greeting)
        formData.append('academic_file', this.form.academicFile)
        formData.append('career_file', this.form.careerFile)
        formData.append('completion_file', this.form.completionFile)
        formData.append('instructor_verified', this.form.instructorVerified)
        formData.append('instructor_active', this.form.instructorActive)
        formData.append('profile', this.form.profile)
        formData.append('terms', this.form.terms)
        formData.append('privacy', this.form.privacy)
        formData.append('email_agree', this.form.emailAgree)
        formData.append('phone_agree', this.form.phoneAgree)
        // 리턴 boolean
        const bool = await this.$store.dispatch('signUp', formData)
        // 리턴값에 따른 분기
        if (bool) {
          this.$message({
            showClose: true,
            message: '회원가입에 성공하였습니다.',
            type: 'success'
          })
          this.$router.replace('/signin')
        }
        // 로딩 끝
        this.loading = false
      } else {
        return false
      }
    }
  },
  components: {
    SignUpTerms,
    SignUpPrivacy
  }
}
</script>
