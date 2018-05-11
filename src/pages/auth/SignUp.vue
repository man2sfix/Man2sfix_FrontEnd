<template>
  <app-layout>
    <div class="inner-contents">
      <h2 class="contents-title">회원가입</h2>
      <p class="contents-text">회원가입하고 맨투스픽 서비스를 즐겨보세요.</p>
      <div class="signup-tab">
        <el-radio-group v-model="type">
          <el-radio-button label="student">학생</el-radio-button>
          <el-radio-button label="instructor">강사</el-radio-button>
        </el-radio-group>
      </div>
      <div class="signup-container">
        <sign-up-student v-if="type === 'student'"></sign-up-student>
        <sign-up-instructor v-if="type === 'instructor'"></sign-up-instructor>
      </div>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from '@/components/layout/AppLayout'
import SignUpStudent from '@/components/auth/SignUpStudent'
import SignUpInstructor from '@/components/auth/SignUpInstructor'

export default {
  name: 'SignUp',
  data () {
    return {
      type: 'student'
    }
  },
  watch: {
    '$route': 'setType'
  },
  methods: {
    setType () {
      this.type = 'student'
    }
  },
  components: {
    AppLayout,
    SignUpStudent,
    SignUpInstructor
  }
}
</script>

<style lang="scss" scoped>
  .signup-tab {
    padding: map-get($spacers, 5) 0 0;
    text-align: center;
  }
</style>
