<template>
  <app-layout>
    <div class="inner-contents">
      <h2 class="contents-title">패스워드 변경</h2>
      <div class="form" v-loading="loading">
        <el-form ref="form" :model="form" :rules="rules" label-position="top" size="medium" @submit.prevent.native="onSubmit('form')">
          <el-form-item label="현재 비밀번호" prop="prevPassword">
            <el-input type="password" v-model="form.prevPassword" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="새로운 비밀번호" prop="password">
            <el-input type="password" v-model="form.password" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="새로운 비밀번호 확인" prop="passwordConfirm">
            <el-input type="password" v-model="form.passwordConfirm" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button native-type="submit" plain class="btn-block">변경하기</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </app-layout>
</template>

<script>
import Validator from '@/mixins/validator/Validator'
import AppLayout from '@/components/layout/AppLayout'

export default {
  name: 'ChangePassword',
  mixins: [
    Validator
  ],
  data () {
    return {
      loading: false,
      auth: '',
      form: {
        prevPassword: '',
        password: '',
        passwordConfirm: ''
      },
      rules: {
        prevPassword: [
          { required: true, message: '비밀번호를 입력해주세요.', trigger: 'blur' },
          { min: 6, message: '비밀번호는 6글자 이상으로 입력해주세요.', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '새로운 비밀번호를 입력해주세요.', trigger: 'blur' },
          { min: 6, message: '비밀번호는 6글자 이상으로 입력해주세요.', trigger: 'blur' },
          { validator: this.validatePassword, trigger: 'blur' }
        ],
        passwordConfirm: [
          { required: true, message: '새로운 비밀번호를 확인해주세요.', trigger: 'blur' },
          { validator: this.validatePasswordConfirm, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    getAuth () {
      this.$store.commit('setState')
      this.auth = this.$store.getters.getStateAuth
    },
    onSubmit (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          // 로딩 시작
          this.loading = true
          // 폼 데이터 셋
          const formData = {
            password: this.form.prevPassword,
            newPassword: this.form.password
          }
          // 리턴 boolean
          const bool = await this.$store.dispatch('changePassword', formData)
          // 리턴값에 따른 분기
          if (bool) {
            this.$message({
              showClose: true,
              message: '비밀번호를 변경하였습니다.',
              type: 'success'
            })
            this.$router.replace('/mypage')
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
    '$route': 'getAuth'
  },
  created () {
    this.getAuth()
  },
  components: {
    AppLayout
  }
}
</script>
