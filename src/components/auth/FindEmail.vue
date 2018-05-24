<template>
  <div class="form form-find" v-loading="loading">
    <el-form ref="form" :model="form" :rules="rules" label-position="top" size="medium" @submit.prevent.native="onSubmit('form')" v-if="!found">
      <el-form-item label="이름" prop="name">
        <el-input v-model="form.name" placeholder="예) 홍길동"></el-input>
      </el-form-item>
      <el-form-item label="핸드폰번호" prop="phone">
        <el-input type="text" v-model="form.phone" placeholder="예) 010-0000-0000"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button native-type="submit" plain class="btn-block">이메일 찾기</el-button>
      </el-form-item>
    </el-form>
    <div class="found" v-if="found">
      회원님의 이메일 주소를 확인해주세요.
      <strong class="value">{{ email }}</strong>
      <div class="link-box">
        <router-link :to="'/find-account/password'" class="link">비밀번호를 잊으셨나요?</router-link>
        <router-link :to="'/signin'" class="link">로그인 하러가기</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Validator from '@/mixins/validator/Validator'

export default {
  name: 'FindEmail',
  mixins: [
    Validator
  ],
  data () {
    return {
      loading: false,
      found: false,
      email: '',
      form: {
        name: '',
        phone: ''
      },
      rules: {
        name: [
          { required: true, message: '이름을 입력해주세요.', trigger: 'blur' },
          { min: 2, max: 5, message: '이름은 2글자 이상 5글자 이하로 입력해주세요.', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '휴대폰 번호를 입력해주세요.', trigger: 'blur' },
          { validator: this.validatePhone, message: '휴대폰 번호가 올바르지 않습니다.', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    init () {
      this.found = false
      this.email = ''
    },
    onSubmit (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
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
      })
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
