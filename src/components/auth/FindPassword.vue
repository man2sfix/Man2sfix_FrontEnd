<template>
  <div class="form-find" v-loading="loading">
    <el-card shadow="never">
      <el-form ref="form" :model="form" :rules="rules" label-position="top" size="medium" @submit.prevent.native="onSubmit('form')">
        <el-form-item label="이메일" prop="email">
          <el-input v-model="form.email" placeholder="예) man2sfix@man2sfix.com"></el-input>
        </el-form-item>
        <el-form-item label="핸드폰번호" prop="phone">
          <el-input type="text" v-model="form.phone" placeholder="예) 010-0000-0000"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button native-type="submit" plain class="btn-block">비밀번호 찾기</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import Validator from '@/mixins/validator/Validator'

export default {
  name: 'FindPassword',
  mixins: [
    Validator
  ],
  data () {
    return {
      loading: false,
      form: {
        email: '',
        phone: ''
      },
      rules: {
        email: [
          { required: true, message: '이메일을 입력해주세요.', trigger: 'blur' },
          { type: 'email', message: '올바른 이메일을 입력해주세요.', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '휴대폰 번호를 입력해주세요.', trigger: 'blur' },
          { validator: this.validatePhone, message: '휴대폰 번호가 올바르지 않습니다.', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
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
            // todo
          }
          // 로딩 끝
          this.loading = false
        } else {
          return false
        }
      })
    }
  }
}
</script>
