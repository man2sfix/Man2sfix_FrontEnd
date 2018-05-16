<template>
  <div class="form-find" v-loading="loading">
    <el-card shadow="never">
      <el-form ref="form" :model="form" :rules="rules" label-position="top" size="medium" @submit.prevent.native="onSubmit('form')">
        <el-form-item label="이름" prop="name">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="비밀번호" prop="password">
          <el-input type="password" v-model="form.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button native-type="submit" plain class="btn-block">로그인</el-button>
        </el-form-item>
        <div class="link-box">
          <router-link :to="'/findaccount'" class="link">이메일/비밀번호를 잊으셨나요?</router-link>
          <router-link :to="'/signup'" class="link">아직 회원이 아니신가요?</router-link>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'FindEmail',
  data () {
    return {
      form: {
        
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
