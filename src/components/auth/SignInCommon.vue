<template>
  <div class="signin-form" v-loading="loading">
    <el-card shadow="never">
      <el-form ref="form" :model="form" :rules="rules" label-position="top" size="medium" @submit.prevent.native="onSubmit('form')">
        <el-form-item label="이메일" prop="email">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="비밀번호" prop="password">
          <el-input type="password" v-model="form.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button native-type="submit" plain class="btn-submit">로그인</el-button>
        </el-form-item>
        <div class="btn-box">
          <el-button type="text" size="small" @click="openFindPassword">비밀번호를 잊으셨나요?</el-button>
          <el-button type="text" size="small"><router-link :to="'/signup'">아직 회원이 아니신가요?</router-link></el-button>
        </div>
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
          const signInData = {
            email: this.form.email,
            password: this.form.password,
            lastLoginedAt: new Date().getTime()
          }
          // 리턴 boolean
          const bool = await this.$store.dispatch('signIn', signInData)
          // 리턴값에 따른 분기
          if (bool) {
            this.$router.replace(this.$route.query.redirect || '/')
          }
          // 로딩 끝
          this.loading = false
        } else {
          return false
        }
      })
    },
    async openFindPassword () {
      try {
        const email = await this.$prompt('이메일', '비밀번호 찾기', {
          confirmButtonText: '찾기',
          cancelButtonText: '취소',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '올바른 이메일을 입력해주세요.'
        })
        const bool = await this.$store.dispatch('passwordResetEmail', email)
        if (bool) {
          this.$message({
            message: '이메일을 확인하여 주세요.',
            type: 'success'
          })
        }
      } catch (err) {
        // todo
      }
    }
  }
}
</script>

<style lang="scss">
  .signin-form {
    max-width: 550px;
    margin: 0 auto;
    padding: map-get($spacers, 5) 0;

    .el-form-item__label {
      padding-bottom: 0;
    }

    .el-form-item {
      margin-bottom: map-get($spacers, 3);

      &:last-child {
        margin-bottom: 0;
        text-align: center;
      }
    }

    .btn-submit {
      display: block;
      width: 100%;
      margin-top: map-get($spacers, 2);
    }

    .btn-box {
      .el-button {
        display: block;
        margin: 0;
      }
    }
  }

  .signin-dialog {
    .el-dialog__body {
      padding-top: 0;
    }
  }
</style>
