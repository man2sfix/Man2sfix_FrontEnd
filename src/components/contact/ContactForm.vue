<template>
  <div class="inner-contents">
    <h4 class="contents-title-sub">문의상담</h4>
    <div class="form" v-loading="loading">
      <el-form ref="form" :model="form" :rules="rules" label-position="top" size="medium" @submit.prevent.native="onSubmit('form')">
        <el-form-item label="문의 유형" prop="type">
          <el-select v-model="form.type" placeholder="유형을 선택해주세요">
            <el-option label="제휴" value="alliance"></el-option>
            <el-option label="강사신청" value="instructor"></el-option>
            <el-option label="불편사항" value="problem"></el-option>
            <el-option label="오류사항" value="error"></el-option>
            <el-option label="기타" value="etc"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="답변받을 이메일" prop="email">
          <el-input type="email" v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="문의 제목" prop="title">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="문의 내용" prop="description">
          <el-input type="textarea" v-model="form.description" :autosize="{ minRows: 3, maxRows: 10}"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button native-type="submit" plain class="btn-block">문의하기</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data () {
    return {
      loading: false,
      form: {
        type: '',
        email: '',
        title: '',
        description: ''
      },
      rules: {
        type: [
          { required: true, message: '문의 유형을 선택해주세요.', trigger: 'change' }
        ],
        email: [
          { required: true, message: '이메일을 입력해주세요.', trigger: 'blur' },
          { type: 'email', message: '올바른 이메일을 입력해주세요.', trigger: 'blur' }
        ],
        title: [
          { required: true, message: '문의 제목을 입력해주세요.', trigger: 'blur' }
        ],
        description: [
          { required: true, message: '문의 내용을 입력해주세요.', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          // todo
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.contents-title-sub {
  max-width: 800px;
  margin: 0 auto;
}

.form {
  max-width: 800px;
  margin: map-get($spacers, 3) auto;
}
</style>
