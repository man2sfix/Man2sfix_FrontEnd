<template>
  <app-layout>
    <div class="inner-contents">
      <h2 class="contents-title">로그인</h2>
      <p class="contents-text">로그인하고 맨투스픽 서비스를 즐겨보세요.</p>
      <div class="login-form">
        <el-form ref="form" :model="form" :rules="rules" label-position="top" size="medium">
          <el-form-item label="이메일" prop="email">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item label="비밀번호" prop="password">
            <el-input type="password" v-model="form.password" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button round @click="onSubmit('form')">로그인</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from '@/components/layout/AppLayout'

export default {
  name: 'SignIn',
  data () {
    return {
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
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('login')
        } else {
          return false
        }
      })
    }
  },
  components: {
    AppLayout
  }
}
</script>

<style lang="scss" scoped>

</style>
