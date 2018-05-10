<template>
  <div class="signup-form" v-loading="loading">
    <el-form ref="form" :model="form" :rules="rules" label-position="top" size="medium">
      <el-form-item label="이름" prop="name">
        <el-input v-model="form.name" placeholder="예) 홍길동"></el-input>
      </el-form-item>
      <el-form-item label="이메일" prop="email">
        <el-input v-model="form.email" placeholder="예) man2sfix@man2sfix.com"></el-input>
      </el-form-item>
      <el-form-item label="비밀번호" prop="password">
        <el-input type="password" v-model="form.password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="비밀번호 확인" prop="passwordConfirm">
        <el-input type="password" v-model="form.passwordConfirm" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="sumbit" round @click="onSubmit('form')">회원가입</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'SignUpStudent',
  data () {
    // Validate Password
    const validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('비밀번호를 입력해주세요.'))
      } else {
        if (this.form.passwordConfirm !== '') {
          this.$refs.form.validateField('passwordConfirm')
        }
        callback()
      }
    }

    // Validate Password Confirm
    var validatePasswordConfirm = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('비밀번호를 입력해주세요.'))
      } else if (value !== this.form.password) {
        callback(new Error('비밀번호가 서로 다릅니다.'))
      } else {
        callback()
      }
    }

    return {
      loading: false,
      form: {
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
      },
      rules: {
        name: [
          { required: true, message: '이름을 입력해주세요.', trigger: 'blur' },
          { min: 2, max: 5, message: '이름은 2글자 이상 5글자 이하로 입력해주세요.', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '이메일을 입력해주세요.', trigger: 'blur' },
          { type: 'email', message: '올바른 이메일을 입력해주세요.', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '비밀번호를 입력해주세요.', trigger: 'blur' },
          { min: 6, message: '비밀번호는 6글자 이상으로 입력해주세요.', trigger: 'blur' },
          { validator: validatePassword, trigger: 'blur' }
        ],
        passwordConfirm: [
          { required: true, message: '비밀번호를 확인해주세요.', trigger: 'blur' },
          { validator: validatePasswordConfirm, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const signUpData = {
            type: 'student',
            name: this.form.name,
            email: this.form.email,
            password: this.form.password,
            createdAt: new Date().getTime(),
            lastLoginedAt: new Date().getTime()
          }

          const bool = await this.$store.dispatch('signUp', signUpData)
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
  .signup-form {
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
