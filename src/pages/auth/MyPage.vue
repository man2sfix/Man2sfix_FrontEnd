<template>
  <app-layout>
    <div class="inner-contents">
      <div class="mypage-container" v-loading="loading">
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
import MyInfo from '@/components/mypage/MyInfo'
import MyPassword from '@/components/mypage/MyPassword'

export default {
  name: 'MyPage',
  data () {
    return {
      user: null,
      loading: true
    }
  },
  methods: {
    async fetchData () {
      this.user = await this.$store.dispatch('getUser')
      this.loading = false
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  created () {
    this.fetchData()
  },
  components: {
    AppLayout,
    MyInfo,
    MyPassword
  }
}
</script>

<style lang="scss">
.mypage-container {
  display: flex;
  flex-wrap: wrap;
  font-size: 0;
  min-height: 300px;

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

  .mypage-card {
    position: relative;
    display: flex;
    align-items: center;
    padding: map-get($spacers, 4);
    border: 1px solid gray('300');

    .el-card__body {
      display: flex;
      align-items: center;
      position: relative;
    }

    .thumb {
      flex: none;
      width: 150px;
      height: 150px;
      border: 1px solid gray('300');
      border-radius: 50%;
      overflow: hidden;
      background-color: gray('300');

      img {
        display: block;
        width: 100%;
        height: 100%;
      }

      &-icon {
        text-align: center;
        background-color: transparent;
      }

      .icon {
        padding-top: map-get($spacers, 5);
        font-size: $font-size-base * 3.5;
      }
    }

    .info {
      flex: auto;
      padding: 0 map-get($spacers, 4);
      line-height: 1.5;

      .title {
        color: gray('900');
        font-size: $font-size-lg;
        font-weight: 600;
      }

      .email,
      .phone {
        font-size: $font-size-base * 0.9;
      }

      .date {
        font-size: $font-size-sm;
      }

      .link {
        position: absolute;
        bottom: map-get($spacers, 4);
        right: map-get($spacers, 4);;
        font-size: $font-size-sm;
        color: gray('700');
        border: 1px solid gray('300');
        padding: map-get($spacers, 2);
      }
    }
  }
}
</style>
