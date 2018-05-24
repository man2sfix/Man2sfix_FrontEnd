<template>
  <app-layout>
    <div class="inner-contents" v-loading="pageLoading">
      <h2 class="contents-title">정보 수정</h2>
      <div class="form" v-loading="loading">
        <el-form ref="form" :model="form" :rules="rules" label-position="top" size="medium" @submit.prevent.native="onSubmit('form')">
          <el-form-item label="이름" prop="name">
            <el-input v-model="form.name" placeholder="예) 홍길동"></el-input>
          </el-form-item>
          <el-form-item label="이메일 (이메일은 변경이 불가능합니다.)" prop="email">
            <el-input v-model="form.email" placeholder="예) man2sfix@man2sfix.com" readonly></el-input>
            <el-checkbox v-model="form.emailAgree">이메일 수신동의</el-checkbox>
          </el-form-item>
          <el-form-item label="휴대폰 번호" prop="phone">
            <div class="item-phone">
              <el-input type="text" v-model="form.phone" placeholder="예) 010-0000-0000"></el-input>
            </div>
            <el-checkbox v-model="form.phoneAgree">SMS 수신동의</el-checkbox>
          </el-form-item>
          <el-form-item label="프로필사진" class="relative-box">
            <el-upload list-type="picture" action="#" :auto-upload="false" :limit="1" :on-change="uploadProfile" :on-remove="removeUpdateProfile" :on-exceed="exceedProfile" :file-list="fileList">
              <el-button size="small" plain>업로드</el-button>
              <div slot="tip" class="el-upload__tip">1MB 이하의 gif/jpg/png 파일만 가능합니다.</div>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <el-button native-type="submit" plain class="btn-block">수정하기</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </app-layout>
</template>

<script>
import Validator from '@/mixins/validator/Validator'
import UploadProfile from '@/mixins/upload/UploadProfile'
import AppLayout from '@/components/layout/AppLayout'

export default {
  name: 'ChangeInfo',
  mixins: [
    Validator,
    UploadProfile
  ],
  data () {
    return {
      loading: false,
      pageLoading: true,
      user: '',
      fileList: [],
      form: {
        id: '',
        name: '',
        email: '',
        phone: '',
        profile: '',
        profileURL: '',
        profileRemove: false,
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
        phone: [
          { required: true, message: '휴대폰 번호를 입력해주세요.', trigger: 'blur' },
          { validator: this.validatePhone, message: '휴대폰 번호가 올바르지 않습니다.', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    async init () {
      this.user = await this.$store.dispatch('getUser')
      // set form data
      this.form.id = this.user.mem_id
      this.form.name = this.user.mem_name
      this.form.email = this.user.mem_email
      this.form.phone = this.user.mem_phone
      this.form.emailAgree = this.user.mem_email_agree
      this.form.phoneAgree = this.user.mem_phone_agree
      this.form.profileURL = this.user.mem_profile
      // file list
      if (this.user.mem_profile) {
        const fileArr = this.user.mem_profile.split('/')
        this.fileList.push({
          name: fileArr[fileArr.length - 1],
          url: `${this.$api}/${fileArr.join('/')}`
        })
      }
      // 로딩 끝
      this.pageLoading = false
    },
    onSubmit (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          console.log(this.form)
          // 로딩 시작
          this.loading = true
          // 폼 데이터 set
          let formData = new FormData()
          formData.append('id', this.form.id)
          formData.append('name', this.form.name)
          formData.append('email', this.form.email)
          formData.append('phone', this.form.phone)
          formData.append('email_agree', this.form.emailAgree)
          formData.append('phone_agree', this.form.phoneAgree)
          formData.append('profileURL', this.form.profileURL)
          formData.append('profileRemove', this.form.profileRemove)
          if (this.form.profile) {
            formData.append('profile', this.form.profile)
          }
          // 리턴 boolean
          const bool = await this.$store.dispatch('chageInfo', formData)
          // 리턴값에 따른 분기
          if (bool) {
            this.$message({
              showClose: true,
              message: '회원정보를 수정하였습니다.',
              type: 'success'
            })
            this.$router.replace('/mypage')
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
    AppLayout
  },
  watch: {
    '$route': 'init'
  },
  created () {
    this.init()
  }
}
</script>

<style lang="scss" scoped>

</style>
