<template>
  <app-layout>
    <div class="inner-contents">
      <h2 class="contents-title">마이페이지</h2>
      <div class="mypage-container">
        <div class="mypage-info">
          <my-info :info="user"></my-info>
        </div>
      </div>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from '@/components/layout/AppLayout'
import MyInfo from '@/components/user/MyInfo'

export default {
  name: 'MyPage',
  data () {
    return {
      user: {}
    }
  },
  methods: {
    async fetchData () {
      const auth = JSON.parse(sessionStorage.getItem('_auth'))
      this.user = await this.$store.dispatch('getUser', auth)
    }
  },
  components: {
    AppLayout,
    MyInfo
  },
  created () {
    this.fetchData()
  }
}
</script>

<style lang="scss" scoped>
  .mypage-container {
    padding-bottom: map-get($spacers, 5);

    @include clearfix();
  }
</style>
