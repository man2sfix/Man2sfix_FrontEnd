<template>
  <div class="form">
    <form @submit.prevent="onSubmit" v-if="!found">
      <div class="form-group" :class="{ 'status': $v.form.name.$error }">
        <label for="name" class="form-group-title"><span class="text-danger">*</span> 이름 (홍길동)</label>
        <at-input v-model.trim="$v.form.name.$model" id="name" :status="$v.form.name.$error ? 'error' : ''" size="large"></at-input>
        <div class="form-group-feedback" v-if="!$v.form.name.required">이름을 입력해주세요.</div>
        <div class="form-group-feedback" v-if="!$v.form.name.minLength || !$v.form.name.maxLength">이름은 2글자 이상 5글자 이하로 입력해주세요.</div>
      </div>
      <div class="form-group" :class="{ 'status': $v.form.phone.$error }">
        <label for="phone" class="form-group-title"><span class="text-danger">*</span> 휴대폰 번호 (010-0000-0000)</label>
        <at-input v-model.trim="$v.form.phone.$model" id="phone" :status="$v.form.phone.$error ? 'error' : ''" size="large"></at-input>
        <div class="form-group-feedback" v-if="!$v.form.phone.required">휴대폰 번호를 입력해주세요.</div>
        <div class="form-group-feedback" v-if="!$v.form.phone.helpers">올바른 휴대폰 번호를 입력해주세요.</div>
      </div>
      <at-button hollow class="form-btn" nativeType="submit">이메일 찾기</at-button>
    </form>
    <div class="found" v-if="found">
      회원님의 이메일 주소를 확인해주세요.
      <strong class="value">{{ email }}</strong>
      <div class="form-link">
        <router-link :to="'/find-account/password'" class="btn btn-link btn-sm btn-block text-left">비밀번호를 잊으셨나요?</router-link>
        <router-link :to="'/signin'" class="btn btn-link btn-sm btn-block text-left">로그인 하러가기</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength, helpers } from 'vuelidate/lib/validators'

export default {
  name: 'FindEmail',
  mixins: [
    validationMixin
  ],
  data () {
    return {
      loading: false,
      found: false,
      email: '',
      form: {
        name: '',
        phone: ''
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
      phone: {
        required,
        helpers: helpers.regex('phone', /^\d{3}-\d{3,4}-\d{4}$/)
      }
    }
  },
  methods: {
    init () {
      this.found = false
      this.email = ''
    },
    async onSubmit () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        // 로딩 시작
        this.loading = true
        // 폼 데이터 셋
        const formData = {
          name: this.form.name,
          phone: this.form.phone
        }
        // 리턴 data
        const data = await this.$store.dispatch('findEmail', formData)
        // 리턴값에 따른 분기
        if (data) {
          this.found = true
          this.email = data
        }
        // 로딩 끝
        this.loading = false
      } else {
        return false
      }
    }
  },
  watch: {
    '$route': 'init'
  },
  created () {
    this.init()
  }
}
</script>

<style lang="scss" scoped>
.found {
  text-align: center;
  font-size: $font-size-sm;
  padding: map-get($spacers, 5) 0 map-get($spacers, 4);

  .value {
    display: block;
    padding: map-get($spacers, 4) 0;
    font-size: $font-size-base;
  }
}
</style>
