<template>
  <div class="signup-form" v-loading="loading">
    <el-card shadow="never" class="signup-form-card">
      <el-form ref="form" :model="form" :rules="rules" label-position="top" size="medium" @submit.prevent.native="onSubmit('form')">
        <el-form-item label="이름" prop="name">
          <el-input v-model="form.name" placeholder="예) 홍길동"></el-input>
        </el-form-item>
        <el-form-item label="이메일" prop="email">
          <el-input v-model="form.email" placeholder="예) man2sfix@man2sfix.com"></el-input>
          <el-checkbox v-model="form.emailRecive">이메일 수신동의</el-checkbox>
        </el-form-item>
        <el-form-item label="비밀번호" prop="password">
          <el-input type="password" v-model="form.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="비밀번호 확인" prop="passwordConfirm">
          <el-input type="password" v-model="form.passwordConfirm" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="휴대폰 번호" prop="phone">
          <div class="item-phone">
            <el-input type="text" v-model="form.phone" placeholder="예) 010-0000-0000"></el-input>
          </div>
          <el-checkbox v-model="form.phoneRecive">SMS 수신동의</el-checkbox>
        </el-form-item>
        <el-form-item label="프로필사진" class="relative-container">
          <el-upload list-type="picture" action="#" :auto-upload="false" :limit="1" :on-change="uploadProfileFile" :on-remove="removeProfileFile">
            <el-button size="small" plain>업로드</el-button>
            <div slot="tip" class="el-upload__tip">1MB 이하의 gif/jpg/png 파일만 가능합니다.</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="이용약관" prop="terms" class="relative-container">
          <el-checkbox v-model="form.terms">동의하기</el-checkbox>
          <el-button plain size="mini" @click="termsVisible = true">전문보기</el-button>
        </el-form-item>
        <el-form-item label="개인정보처리방침" prop="privacy" class="relative-container">
          <el-checkbox v-model="form.privacy">동의하기</el-checkbox>
          <el-button plain size="mini" @click="privacyVisible = true">전문보기</el-button>
        </el-form-item>
        <div class="form-btn">
          <el-form-item>
            <el-button native-type="submit" plain class="btn-submit">회원가입</el-button>
          </el-form-item>
        </div>
      </el-form>
    </el-card>
    <el-dialog title="이용약관" :visible.sync="termsVisible" class="signup-dialog">
      <sign-up-terms></sign-up-terms>
    </el-dialog>
    <el-dialog title="개인정보처리방침" :visible.sync="privacyVisible" class="signup-dialog">
      <sign-up-privacy></sign-up-privacy>
    </el-dialog>
  </div>
</template>

<script>
import SignUpTerms from '@/components/auth/SignUpTerms'
import SignUpPrivacy from '@/components/auth/SignUpPrivacy'

export default {
  name: 'SignUpStudent',
  data () {
    return {
      loading: false,
      termsVisible: false,
      privacyVisible: false,
      form: {
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
        phone: '',
        profile: '',
        terms: false,
        privacy: false,
        emailRecive: true,
        phoneRecive: true
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
          { validator: this.validatePassword, trigger: 'blur' }
        ],
        passwordConfirm: [
          { required: true, message: '비밀번호를 확인해주세요.', trigger: 'blur' },
          { validator: this.validatePasswordConfirm, trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '휴대폰 번호를 입력해주세요.', trigger: 'blur' },
          { validator: this.validatePhone, message: '휴대폰 번호가 올바르지 않습니다.', trigger: 'blur' }
        ],
        terms: [
          { required: true, message: '이용약관에 동의해주세요.', trigger: 'change' },
          { validator: this.validateCheck, message: '이용약관에 동의해주세요.', trigger: 'change' }
        ],
        privacy: [
          { required: true, message: '개인정보처리방침에 동의해주세요.', trigger: 'change' },
          { validator: this.validateCheck, message: '개인정보처리방침에 동의해주세요.', trigger: 'change' }
        ]
      }
    }
  },
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
    },
    uploadProfileFile (file, fileList) {
      const isSize = file.size <= 1 * 1024 * 1024
      const isType = file.raw.type === 'image/jpg' || file.raw.type === 'image/png' || file.raw.type === 'image/jpeg' || file.raw.type === 'image/gif'

      if (isSize && isType) {
        this.form.profile = file.raw
      } else {
        fileList.pop()
        this.$message({
          showClose: true,
          message: '파일 크기 혹은 형식을 확인해주세요.',
          type: 'warning'
        })
      }
    },
    removeProfileFile (file, fileList) {
      this.form.profile = ''
    },
    onSubmit (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          // 로딩 시작
          this.loading = true
          // 폼 데이터 set
          const signUpData = {
            type: 'student',
            name: this.form.name,
            email: this.form.email,
            password: this.form.password,
            phone: this.form.phone,
            profile: this.form.profile,
            terms: this.form.terms,
            privacy: this.form.privacy,
            emailRecive: this.form.emailRecive,
            phoneRecive: this.form.phoneRecive,
            createdAt: new Date().getTime(),
            lastLoginedAt: new Date().getTime(),
            passwordChangedAt: new Date().getTime()
          }
          // 리턴 boolean
          const bool = await this.$store.dispatch('signUp', signUpData)
          // 리턴값에 따른 분기
          if (bool) {
            this.$message({
              showClose: true,
              message: '회원가입에 성공하였습니다.',
              type: 'success'
            })
            this.$router.replace('/signin')
          }
          // 로딩 끝
          this.loading = false
        } else {
          return false
        }
      })
    }
  },
  components: {
    SignUpTerms,
    SignUpPrivacy
  }
}
</script>
