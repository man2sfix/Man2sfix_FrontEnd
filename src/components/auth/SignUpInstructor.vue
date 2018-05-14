<template>
  <div class="form signup-form" v-loading="loading">
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
        <!-- 강사용 정보 -->
        <el-form-item label="성별" prop="gender">
          <el-radio-group v-model="form.gender">
            <el-radio label="man">남성</el-radio>
            <el-radio label="woman">여성</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="생년월일" prop="birthday">
          <el-date-picker v-model="form.birthday" type="date" placeholder="예) 0000-00-00"></el-date-picker>
        </el-form-item>
        <el-form-item label="인사말" prop="greeting">
          <el-input type="textarea" v-model="form.greeting" :autosize="{ minRows: 3, maxRows: 10}"></el-input>
        </el-form-item>
        <el-form-item label="학력인증 (학력증명서, 졸업증명서, 재학증명서)" prop="academicFile" class="relative-box">
          <el-upload action="#" :auto-upload="false" :limit="1" :on-change="uploadAcademicFile" :on-remove="removeAcademicFile">
            <el-button size="small" plain>업로드</el-button>
            <div slot="tip" class="el-upload__tip">2MB 이하의 gif/jpg/png/pdf 파일만 가능합니다.</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="경력인증 (경력증명서, 출강증명서)" prop="careerFile" class="relative-box">
          <el-upload action="#" :auto-upload="false" :limit="1" :on-change="uploadCareerFile" :on-remove="removeCareerFile">
            <el-button size="small" plain>업로드</el-button>
            <div slot="tip" class="el-upload__tip">2MB 이하의 gif/jpg/png/pdf 파일만 가능합니다.</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="수료인증 (수료증 및 이수증)" prop="completionFile" class="relative-box">
          <el-upload action="#" :auto-upload="false" :limit="1" :on-change="uploadCompletionFile" :on-remove="removeCompletionFile">
            <el-button size="small" plain>업로드</el-button>
            <div slot="tip" class="el-upload__tip">2MB 이하의 gif/jpg/png/pdf 파일만 가능합니다.</div>
          </el-upload>
        </el-form-item>
        <!-- // 강사용 정보 -->
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
import SignUpStudent from '@/components/auth/SignUpStudent'
import SignUpTerms from '@/components/auth/SignUpTerms'
import SignUpPrivacy from '@/components/auth/SignUpPrivacy'

export default {
  name: 'SignUpInstructor',
  extends: SignUpStudent,
  data () {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
        phone: '',
        gender: null,
        birthday: '',
        greeting: '',
        academicFile: '',
        careerFile: '',
        completionFile: '',
        profile: '',
        terms: false,
        privacy: false,
        emailRecive: true,
        phoneRecive: true,
        verified: false,
        active: true
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
        gender: [
          { required: true, message: '성별을 선택해주세요.', trigger: 'change' }
        ],
        birthday: [
          { required: true, message: '생년월일을 입력해주세요.', trigger: 'blur' }
        ],
        greeting: [
          { required: true, message: '인사말을 입력해주세요.', trigger: 'blur' },
          { min: 100, message: '인사말은 최소 100자 이상으로 입력해주세요.', trigger: 'blur' }
        ],
        academicFile: [
          { required: true, message: '학력인증 파일을 등록해주세요', trigger: 'blur' }
        ],
        careerFile: [
          { required: true, message: '경력인증 파일을 등록해주세요.', trigger: 'blur' }
        ],
        completionFile: [
          { required: true, message: '수료인증 파일을 등록해주세요.', trigger: 'blur' }
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
    uploadFile (file, fileList, key) {
      const isSize = file.size <= 2 * 1024 * 1024
      const isType = file.raw.type === 'image/jpg' || file.raw.type === 'image/png' || file.raw.type === 'image/jpeg' || file.raw.type === 'image/gif' || file.raw.type === 'application/pdf'

      if (isSize && isType) {
        this.form[key] = file.raw
      } else {
        fileList.pop()
        this.$message({
          showClose: true,
          message: '파일 크기 혹은 형식을 확인해주세요.',
          type: 'warning'
        })
      }
    },
    uploadAcademicFile (file, fileList) {
      this.uploadFile(file, fileList, 'academicFile')
    },
    removeAcademicFile (file, fileList) {
      this.form.academicFile = ''
    },
    uploadCareerFile (file, fileList) {
      this.uploadFile(file, fileList, 'careerFile')
    },
    removeCareerFile (file, fileList) {
      this.form.careerFile = ''
    },
    uploadCompletionFile (file, fileList) {
      this.uploadFile(file, fileList, 'completionFile')
    },
    removeCompletionFile (file, fileList) {
      this.form.completionFile = ''
    },
    onSubmit (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          // 로딩 시작
          this.loading = true
          // 폼 데이터 set
          const formData = {
            type: 'instructor',
            name: this.form.name,
            email: this.form.email,
            password: this.form.password,
            phone: this.form.phone,
            gender: this.form.gender,
            birthday: this.form.birthday.getTime(),
            greeting: this.form.greeting,
            academicFile: this.form.academicFile,
            careerFile: this.form.careerFile,
            completionFile: this.form.completionFile,
            profile: this.form.profile,
            terms: this.form.terms,
            privacy: this.form.privacy,
            emailRecive: this.form.emailRecive,
            phoneRecive: this.form.phoneRecive,
            verified: this.form.verified,
            active: this.form.active,
            createdAt: new Date().getTime(),
            lastLoginedAt: new Date().getTime(),
            lastUpdatedAt: new Date().getTime(),
            passwordChangedAt: new Date().getTime()
          }
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
