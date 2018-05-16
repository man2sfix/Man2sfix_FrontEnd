<template>
  <div class="form-signin" v-loading="loading">
    <el-card shadow="never">
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
          <router-link :to="'/findaccount'" class="link">이메일/비밀번호를 잊으셨나요?</router-link>
          <router-link :to="'/signup'" class="link">아직 회원이 아니신가요?</router-link>
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
          const formData = {
            email: this.form.email,
            password: this.form.password,
            lastLoginedAt: new Date().getTime()
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

<style lang="scss" scoped>
.form-signin {
  max-width: 500px;
  margin: 0 auto;
  padding: map-get($spacers, 5) 0;

  .el-form-item__label {
    padding-bottom: 0;
  }

  .el-form-item {
    margin-bottom: map-get($spacers, 3);

    &:last-child {
      margin-bottom: 0;
    }
  }

  .btn-block {
    display: block;
    width: 100%;
    margin-top: map-get($spacers, 2);
  }

  .link-box {
    .link {
      display: block;
      color: gray('700');
      font-size: $font-size-base * 0.8;
      padding: map-get($spacers, 2);

      &:hover,
      &:focus {
        color: theme-color('primary');
      }
    }
  }
}
</style>
