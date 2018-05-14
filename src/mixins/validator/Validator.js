export default {
  methods: {
    validatePassword (rule, value, callback) {
      if (value === '') {
        callback(new Error('비밀번호를 입력해주세요.'))
      } else {
        if (this.form.passwordConfirm !== '') {
          this.$refs.form.validateField('passwordConfirm')
        }
        callback()
      }
    },
    validatePasswordConfirm (rule, value, callback) {
      if (value === '') {
        callback(new Error('비밀번호를 입력해주세요.'))
      } else if (value !== this.form.password) {
        callback(new Error('비밀번호가 서로 다릅니다.'))
      } else {
        callback()
      }
    },
    validateCheck (rule, value, callback) {
      if (!value) {
        callback(new Error())
      } else {
        callback()
      }
    },
    validatePhone (rule, value, callback) {
      if (!/^\d{3}-\d{3,4}-\d{4}$/.test(value)) {
        callback(new Error())
      } else {
        callback()
      }
    }
  }
}
