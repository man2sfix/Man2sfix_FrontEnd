<template>
  <div class="form">
    <form @submit.prevent="onSubmit">
      <div class="form-group" :class="{ 'status': $v.form.name.$error }">
        <label for="name" class="form-group-title"><span class="text-danger">*</span> 이름 (홍길동)</label>
        <at-input v-model.trim="$v.form.name.$model" class="form-control" id="name" :status="$v.form.name.$error ? 'error' : ''" size="large"></at-input>
        <div class="form-group-feedback" v-if="!$v.form.name.required">이름을 입력해주세요.</div>
        <div class="form-group-feedback" v-if="!$v.form.name.minLength || !$v.form.name.maxLength">이름은 2글자 이상 5글자 이하로 입력해주세요.</div>
      </div>
      <div class="form-group" :class="{ 'status': $v.form.email.$error }">
        <label for="email" class="form-group-title"><span class="text-danger">*</span> 이메일 (Man2sfix@man2sfix.com)</label>
        <at-input type="email" v-model.trim="$v.form.email.$model" id="email" :status="$v.form.email.$error ? 'error' : ''" size="large"></at-input>
        <div>
          <at-checkbox v-model="form.emailAgree" label="emailAgree">이메일 수신 동의</at-checkbox>
        </div>
        <div class="form-group-feedback" v-if="!$v.form.email.required">이메일을 입력해주세요.</div>
        <div class="form-group-feedback" v-if="!$v.form.email.email">올바른 이메일을 입력해주세요.</div>
      </div>
      <div class="form-group" :class="{ 'status': $v.form.password.$error }">
        <label for="password" class="form-group-title"><span class="text-danger">*</span> 비밀번호</label>
        <at-input type="password" v-model.trim="$v.form.password.$model" :status="$v.form.password.$error ? 'error' : ''" size="large" id="password"></at-input>
        <div class="form-group-feedback" v-if="!$v.form.password.required">비밀번호를 입력해주세요.</div>
        <div class="form-group-feedback" v-if="!$v.form.password.minLength">비밀번호는 최소 6자리 이상으로 입력해주세요.</div>
      </div>
      <div class="form-group" :class="{ 'status': $v.form.passwordConfirm.$error }">
        <label for="passwordConfirm" class="form-group-title"><span class="text-danger">*</span> 비밀번호 확인</label>
        <at-input type="password" v-model.trim="$v.form.passwordConfirm.$model" :status="$v.form.passwordConfirm.$error ? 'error' : ''" size="large" id="passwordConfirm"></at-input>
        <div class="form-group-feedback" v-if="!$v.form.passwordConfirm.required || !$v.form.passwordConfirm.sameAsPassword">비밀번호를 확인해주세요.</div>
      </div>
      <div class="form-group" :class="{ 'status': $v.form.phone.$error }">
        <label for="phone" class="form-group-title"><span class="text-danger">*</span> 휴대폰 번호 (010-0000-0000)</label>
        <at-input v-model.trim="$v.form.phone.$model" id="phone" :status="$v.form.phone.$error ? 'error' : ''" size="large"></at-input>
        <div>
          <at-checkbox v-model="form.phoneAgree" label="phoneAgree">SMS 수신 동의</at-checkbox>
        </div>
        <div class="form-group-feedback" v-if="!$v.form.phone.required">휴대폰 번호를 입력해주세요.</div>
        <div class="form-group-feedback" v-if="!$v.form.phone.helpers">올바른 휴대폰 번호를 입력해주세요.</div>
      </div>
      <div class="form-group" :class="{ 'status': $v.form.terms.$error }">
        <label class="form-group-title"><span class="text-danger">*</span> 이용약관</label>
        <div>
          <at-checkbox v-model="form.terms" label="terms">동의하기</at-checkbox>
        </div>
        <at-button type="primary" hollow class="btn-detail" @click="termsModal = true"> 전문보기</at-button>
        <div class="form-group-feedback" v-if="!$v.form.terms.between">이용약관에 동의해주세요.</div>
      </div>
      <div class="form-group" :class="{ 'status': $v.form.privacy.$error }">
        <label class="form-group-title"><span class="text-danger">*</span> 개인정보 취급방침</label>
        <div>
          <at-checkbox v-model="form.privacy" label="privacy">동의하기</at-checkbox>
        </div>
        <at-button type="primary" class="btn-detail" hollow @click="privacyModal = true">전문보기</at-button>
        <div class="form-group-feedback" v-if="!$v.form.privacy.between">개인정보 취급방침에 동의해주세요.</div>
      </div>
      <at-button hollow class="form-btn" nativeType="submit">회원가입</at-button>
    </form>
    <!-- modal -->
    <at-modal v-model="termsModal">
      <div slot="header">
        <span>이용약관</span>
      </div>
      <div style="max-height: 300px; overflow-y: scroll;">
        <sign-up-terms></sign-up-terms>
      </div>
      <div slot="footer">
        <at-button style="width:100%;" @click="termsModal = false">확인</at-button>
      </div>
    </at-modal>
    <!-- modal -->
    <at-modal v-model="privacyModal">
      <div slot="header">
        <span>개인정보 취급방침</span>
      </div>
      <div style="max-height: 300px; overflow-y: scroll;">
        <sign-up-privacy></sign-up-privacy>
      </div>
      <div slot="footer">
        <at-button style="width:100%;" @click="privacyModal = false">확인</at-button>
      </div>
    </at-modal>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email, minLength, maxLength, sameAs, helpers, between } from 'vuelidate/lib/validators'

import SignUpTerms from '@/components/auth/SignUpTerms'
import SignUpPrivacy from '@/components/auth/SignUpPrivacy'

export default {
  name: 'SignUpStudent',
  mixins: [
    validationMixin
  ],
  data () {
    return {
      loading: false,
      termsModal: false,
      privacyModal: false,
      form: {
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
        phone: '',
        profile: '',
        terms: false,
        privacy: false,
        emailAgree: true,
        phoneAgree: true
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
      password: {
        required,
        minLength: minLength(6)
      },
      passwordConfirm: {
        required,
        sameAsPassword: sameAs('password')
      },
      phone: {
        required,
        helpers: helpers.regex('phone', /^\d{3}-\d{3,4}-\d{4}$/)
      },
      terms: {
        between: between(1, 1)
      },
      privacy: {
        between: between(1, 1)
      }
    }
  },
  methods: {
    async onSubmit () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        // 로딩 시작
        this.loading = true
        // 폼 데이터 set
        let formData = new FormData()
        formData.append('type', 'student')
        formData.append('name', this.form.name)
        formData.append('email', this.form.email)
        formData.append('password', this.form.password)
        formData.append('phone', this.form.phone)
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
      }
    }
  },
  components: {
    SignUpTerms,
    SignUpPrivacy
  }
}
</script>
