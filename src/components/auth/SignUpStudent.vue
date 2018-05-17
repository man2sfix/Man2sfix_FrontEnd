<template>
  <div class="form" v-loading="loading">
    <el-card shadow="never" class="form-card">
      <el-form ref="form" :model="form" :rules="rules" enctype="multipart/form-data" label-position="top" size="medium" @submit.prevent.native="onSubmit('form')">
        <el-form-item label="이름" prop="name">
          <el-input v-model="form.name" placeholder="예) 홍길동"></el-input>
        </el-form-item>
        <el-form-item label="이메일" prop="email">
          <el-input v-model="form.email" placeholder="예) man2sfix@man2sfix.com"></el-input>
          <el-checkbox v-model="form.emailAgree">이메일 수신동의</el-checkbox>
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
          <el-checkbox v-model="form.phoneAgree">SMS 수신동의</el-checkbox>
        </el-form-item>
        <el-form-item label="프로필사진" class="relative-box">
          <el-upload list-type="picture" action="#" :auto-upload="false" :limit="1" :on-change="uploadProfile" :on-remove="removeProfile">
            <el-button size="small" plain>업로드</el-button>
            <div slot="tip" class="el-upload__tip">1MB 이하의 gif/jpg/png 파일만 가능합니다.</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="이용약관" prop="terms" class="relative-box">
          <el-checkbox v-model="form.terms">동의하기</el-checkbox>
          <el-button plain size="mini" @click="termsVisible = true">전문보기</el-button>
        </el-form-item>
        <el-form-item label="개인정보처리방침" prop="privacy" class="relative-box">
          <el-checkbox v-model="form.privacy">동의하기</el-checkbox>
          <el-button plain size="mini" @click="privacyVisible = true">전문보기</el-button>
        </el-form-item>
        <el-form-item>
          <el-button native-type="submit" plain class="btn-block">회원가입</el-button>
        </el-form-item>
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
import Validator from '@/mixins/validator/Validator'
import UploadProfile from '@/mixins/upload/UploadProfile'

import SignUpTerms from '@/components/auth/SignUpTerms'
import SignUpPrivacy from '@/components/auth/SignUpPrivacy'

export default {
  name: 'SignUpStudent',
  mixins: [
    Validator,
    UploadProfile
  ],
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
        emailAgree: true,
        phoneAgree: true
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
    onSubmit (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          // 로딩 시작
          this.loading = true
          // 폼 데이터 set
          const formData = new FormData()
          formData.append('type', 'student')
          formData.append('name', this.form.name)
          formData.append('email', this.form.email)
          formData.append('password', this.form.password)
          formData.append('phone', this.form.phone)
          formData.append('profile', this.form.profile)
          formData.append('terms', this.form.terms)
          formData.append('privacy', this.form.privacy)
          formData.append('emailAgree', this.form.emailAgree)
          formData.append('phoneAgree', this.form.phoneAgree)
          // 리턴 boolean
          const bool = await this.$store.dispatch('signUp', formData)
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
