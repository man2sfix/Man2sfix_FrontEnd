<template>
  <app-layout>
    <div class="inner-contents">
      <div class="mypage-container">
        <div class="mypage-inner">
          <my-info v-if="user" :info="user"></my-info>
        </div>
        <div class="mypage-inner">
          <my-password v-if="user" :info="user"></my-password>
        </div>
      </div>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from '@/components/layout/AppLayout'
import MyInfo from '@/components/user/MyInfo'
import MyPassword from '@/components/user/MyPassword'

export default {
  name: 'MyPage',
  data () {
    return {
      user: null
    }
  },
  methods: {
    async fetchData () {
      const auth = JSON.parse(sessionStorage.getItem('_auth'))
      this.user = await this.$store.dispatch('getUser', auth)
      console.log(this.user)
    }
  },
  components: {
    AppLayout,
    MyInfo,
    MyPassword
  },
  watch: {
    '$route': 'fetchData'
  },
  created () {
    this.fetchData()
  }
}
</script>

<style lang="scss" scoped>
  .mypage-container {
    display: flex;
    flex-wrap: wrap;
    font-size: 0;
    padding: map-get($spacers, 5) 0;

    @include clearfix();

    .mypage-inner {
      width: 50%;

      &:nth-child(odd) {
        padding-right: map-get($spacers, 2);
      }

      &:nth-child(even) {
        padding-left: map-get($spacers, 2);
      }

      .el-card {
        height: 100%;
      }
    }
  }
</style>
