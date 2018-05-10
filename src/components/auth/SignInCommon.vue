<template>
  <div class="login-form" v-loading="loading">
    <el-form ref="form" :model="form" :rules="rules" label-position="top" size="medium">
      <el-form-item label="이메일" prop="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="비밀번호" prop="password">
        <el-input type="password" v-model="form.password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="sumbit" round @click="onSubmit('form')">로그인</el-button>
      </el-form-item>
    </el-form>
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
          const signInData = {
            email: this.form.email,
            password: this.form.password,
            lastLoginedAt: new Date().getTime()
          }

          const bool = await this.$store.dispatch('signIn', signInData)
          console.log(bool)
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
    max-width: 500px;
    margin: map-get($spacers, 5) auto;
    padding: map-get($spacers, 4);
    border: 1px solid gray('300');
    border-radius: $font-size-sm;

    .el-form-item__label {
      padding-bottom: 0;
    }

    .el-form-item {
      &:last-child {
        margin-bottom: 0;
        text-align: center;
      }
    }
  }
</style>
