<template>
  <div class="signup-form">
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
      <el-form-item label="생년월일" prop="birthday">
        <el-date-picker type="date" v-model="form.birthday" placeholder="0000-00-00" style="width: 100%;"></el-date-picker>
      </el-form-item>
      <el-form-item label="경력사항" prop="career">
        <el-input type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="첨부파일" prop="file">
        <el-upload
          class="upload"
          drag
          action="#"
          :limit="5"
          :http-request="handleUpload"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :on-exceed="handleExceed"
          :file-list="fileList"
          multiple
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
            <div class="el-upload__tip" slot="tip">파일당 크기는 최대 500kb로 제한됩니다.</div>
        </el-upload>
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
      form: {
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
        birthday: ''
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
        ],
        birthday: [
          { required: true, message: '생년월일을 입력해주세요.', trigger: 'blur' }
        ]
      },
      fileList: []
    }
  },
  methods: {
    handlePreview (file) {
      console.log(file)
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handleUpload (file) {
      console.log(file)
    },
    handleExceed (files, fileList) {
      console.log(files, fileList)
    },
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const signUpData = {
            type: 'instructor',
            name: this.form.name,
            email: this.form.email,
            password: this.form.password,
            createdAt: new Date().getTime(),
            lastLoginedAt: new Date().getTime()
          }

          this.$store.dispatch('signUp', signUpData)
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
    .upload,
    .el-upload,
    .el-upload-dragger {
      width: 100%;
      display: block;
    }
  }
</style>
