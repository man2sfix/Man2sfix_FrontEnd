<template>
  <div class="signup-form" v-loading="loading">
    <el-form ref="form" :model="form" :rules="rules" label-position="top" size="medium" @submit.prevent.native="onSubmit('form')">
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
      <!-- 경력 -->
      <div class="item-career">
        <el-button @click.prevent="addCareer()" class="btn-add--career" size="mini"><i class="el-icon-plus"></i></el-button>
        <el-form-item label="경력사항">
          <el-form-item :prop="'careers[' + index + ']'" v-for="(career, index) in form.careers" :key="career.key">
            <div class="item-career-inner">
              <el-input type="text" v-model="career.company" placeholder="예) Man2sfix"></el-input>
              <el-button @click.prevent="removeCareer(career)"><i class="el-icon-close"></i></el-button>
            </div>
            <el-date-picker
              v-model="career.date"
              type="daterange"
              range-separator="-"
              start-placeholder="0000-00-00"
              end-placeholder="0000-00-00">
            </el-date-picker>
            <el-input type="textarea" v-model="career.description" placeholder="해당 경력을 소개해주세요."></el-input>
          </el-form-item>
        </el-form-item>
      </div>
      <!-- // 경력 -->
      <!-- 첨부파일 -->
      <el-form-item label="첨부파일" prop="file" v-loading="fileLoading">
        <el-upload
          class="upload"
          drag
          action="#"
          :limit="5"
          :before-upload="handleUpload"
          :http-request="handleRequest"
          :before-remove="handleRemove"
          :on-exceed="handleExceed"
          :file-list="fileList"
          multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
            <div class="el-upload__tip" slot="tip">파일당 크기는 최대 1MB로 제한됩니다.</div>
        </el-upload>
      </el-form-item>
      <!-- // 첨부파일 -->
      <div class="form-btn">
        <el-form-item>
          <el-button native-type="submit" round>회원가입</el-button>
        </el-form-item>
      </div>
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
      fileLoading: false,
      key: `${Date.now()}`,
      form: {
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
        birthday: '',
        careers: [{
          key: Date.now(),
          company: '',
          date: '',
          description: ''
        }],
        fileList: []
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
    addCareer () {
      this.form.careers.push({
        key: Date.now(),
        company: '',
        date: '',
        description: ''
      })
      console.log(this.form.careers)
    },
    removeCareer (career) {
      const index = this.form.careers.indexOf(career)
      if (index !== -1) {
        this.form.careers.splice(index, 1)
        console.log(this.form.careers)
      }
    },
    handleUpload (file) {
      const maxFileSize = 1 * 1024 * 1024

      if (file.size > maxFileSize) {
        // 알람
        this.$notify({
          message: '파일크기가 초과하였습니다.',
          type: 'warning'
        })
        return false
      }
    },
    async handleRequest (file) {
      // 파일 정보
      const fileData = Object.assign({key: this.key}, file)
      // 로딩 시작
      this.fileLoading = true
      // retrun 값
      const res = await this.$store.dispatch('signUpUpload', fileData)
      if (res) {
        this.form.fileList.push({
          name: res.metadata.name,
          size: res.metadata.size,
          type: res.metadata.type,
          downloadURL: res.metadata.downloadURLs[0],
          path: res.metadata.fullPath
        })
        console.log(this.form.fileList)
      } else {
        // 알람
        this.$notify.error({
          message: '파일 업로드에 실패하였습니다.'
        })
      }
      // 로딩 끝
      this.fileLoading = false
    },
    async handleRemove (file, fileList) {
      // 로딩 시작
      this.fileLoading = true
      // 파일 index
      const index = fileList.indexOf(file)
      console.log(index)
      // 파일 path
      const path = this.form.fileList.length > 0 ? this.form.fileList[index].path : null
      // 삭제 정보
      const fileData = {
        path: path
      }
      // 파일 삭제
      const bool = await this.$store.dispatch('signUpDelete', fileData)
      if (bool) {
        if (index !== -1) this.form.fileList.splice(index, 1)
      } else {
        // 알람
        this.$notify.error({
          message: '파일 삭제에 실패하였습니다.'
        })
        this.fileLoading = false
        return false
      }

      // 로딩 끝
      this.fileLoading = false
    },
    handleExceed (file, fileList) {

    },
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 로딩 시작
          this.loading = true
          // 폼 데이터 set
          const signUpData = {
            type: 'instructor',
            name: this.form.name,
            email: this.form.email,
            password: this.form.password,
            birthday: this.form.birthday,
            careers: this.form.careers,
            fileList: this.form.fileList,
            createdAt: new Date().getTime(),
            lastLoginedAt: new Date().getTime()
          }
          // 리턴 boolean
          const bool = this.$store.dispatch('signUp', signUpData)
          // 리턴값에 따른 분기
          if (bool) {
            // 알람
            this.$notify({
              message: '회원가입에 성공하였습니다. 로그인 후 이용하여주세요.',
              type: 'success'
            })
            this.$router.replace('/signin')
          } else {
            // 알람
            this.$notify({
              message: '회원가입에 실패하였습니다. 이메일과 이름을 확인해주세요.',
              type: 'warning'
            })
            // 로딩 끝
            this.loading = false
          }
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
      display: block;
      width: 100%;
    }

    .item-career {
      position: relative;

      .btn-add--career {
        position: absolute;
        top: 0;
        right: 0;
      }

      .el-form-item__content {
        > .el-form-item {
          &:not(:last-child) {
            margin-bottom: map-get($spacers, 2);
          }
        }
      }

      .item-career-inner {
        display: flex;

        .el-input {
          flex: auto;
          width: auto;
        }

        .el-button {
          margin-left: map-get($spacers, 1);
        }
      }

      .el-date-editor {
        width: 100%;
        margin: map-get($spacers, 1) 0;
      }
    }
  }
</style>
