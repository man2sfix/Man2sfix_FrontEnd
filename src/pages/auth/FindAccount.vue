<template>
  <app-layout>
    <div class="inner-contents">
      <h2 class="contents-title">계정 찾기</h2>
      <div v-if="show">
        <p class="contents-text">찾으시는 계정 유형을 선택해주세요.</p>
        <div class="find-select">
          <router-link :to="'/find-account/email'" class="link">
            <at-card>
              <div>
                <div class="icon-container"><i class="icon icon-mail"></i></div>
                <h3>이메일 찾기</h3>
              </div>
            </at-card>
          </router-link>
          <router-link :to="'/find-account/password'" class="link">
            <at-card>
              <div>
                <div class="icon-container"><i class="icon icon-unlock"></i></div>
                <h3>비밀번호 찾기</h3>
              </div>
            </at-card>
          </router-link>
        </div>
      </div>
      <router-view/>
      <p class="notice">문의사항은 <router-link :to="'/contact'" class="text-primary">제휴 및 문의</router-link>를 이용하여 주세요.</p>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from '@/components/layout/AppLayout'

export default {
  name: 'FindAccount',
  data () {
    return {
      show: true
    }
  },
  methods: {
    onShow () {
      if (this.$route.path !== '/find-account') {
        this.show = false
      } else {
        this.show = true
      }
    }
  },
  created () {
    this.onShow()
  },
  watch: {
    '$route': 'onShow'
  },
  components: {
    AppLayout
  }
}
</script>

<style lang="scss" scoped>
.find-select {
  max-width: 500px;
  margin: 0 auto;
  padding: map-get($spacers, 5) 0 map-get($spacers, 4);
  text-align: center;

  .link {
    display: block;

    &:last-child {
      margin-top: map-get($spacers, 3);
    }
  }

  .icon-container {
    margin-bottom: map-get($spacers, 2);
  }

  .icon {
    font-size: $font-size-base * 2;
  }
}

.notice {
  text-align: center;
  color: gray('700');
  font-size: $font-size-sm;
  line-height: 1.5;
}
</style>
