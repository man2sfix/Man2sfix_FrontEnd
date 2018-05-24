<template>
  <div class="form" v-loading="loading">
    <el-form ref="form" :model="form" :rules="rules" label-position="top" size="medium" @submit.prevent.native="onSubmit('form')">
      <el-form-item label="이메일" prop="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="비밀번호" prop="password">
        <el-input type="password" v-model="form.password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button native-type="submit" plain class="btn-block">로그인</el-button>
      </el-form-item>
      <div class="link-box">
        <router-link :to="'/find-account'" class="link">이메일/비밀번호를 잊으셨나요?</router-link>
        <router-link :to="'/signup'" class="link">아직 회원이 아니신가요?</router-link>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'SignInCommon',
  data () {
    return {
      loading: false,
      passwordVisible: false,
      form: {
        email: '',
        password: ''
      },
      rules: {
        email: [
          { required: true, message: '이메일을 입력해주세요.', trigger: 'blur' },
          { type: 'email', message: '올바른 이메일을 입력해주세요.', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '비밀번호를 입력해주세요.', trigger: 'blur' }
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
      })
    }
  }
}
</script>
