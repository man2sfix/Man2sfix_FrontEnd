<template>
  <div class="login-form" v-loading="loading">
    <el-card shadow="never" class="login-form-card">
      <el-form ref="form" :model="form" :rules="rules" label-position="top" size="medium" @submit.prevent.native="onSubmit('form')">
        <el-form-item label="이메일" prop="email">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="비밀번호" prop="password">
          <el-input type="password" v-model="form.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button native-type="submit" class="btn-submit">로그인</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'SignInCommon',
  data () {
    return {
      loading: false,
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
          const signInData = {
            email: this.form.email,
            password: this.form.password,
            lastLoginedAt: new Date().getTime()
          }
          // 리턴 boolean
          const bool = await this.$store.dispatch('signIn', signInData)
          // 리턴값에 따른 분기
          if (bool) {
            // 알람
            this.$notify({
              message: '로그인에 성공하였습니다.',
              type: 'success'
            })
            this.$router.replace(this.$route.query.redirect || '/')
          } else {
            // 알람
            this.$notify({
              message: '이메일 혹은 비밀번호를 확인해주세요.',
              type: 'warning'
            })
            // 로딩 끝
            this.loading = false
          }
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
  .login-form {
    padding: map-get($spacers, 5) map-get($spacers, 3);

    .login-form-card {
      max-width: 500px;
      margin: 0 auto;
    }

    .el-form-item__label {
      padding-bottom: 0;
    }

    .el-form-item {
      margin-bottom: map-get($spacers, 2);

      &:last-child {
        margin-bottom: 0;
        text-align: center;
      }
    }

    .btn-submit {
      display: block;
      width: 100%;
      margin-top: map-get($spacers, 3);
    }
  }
</style>
