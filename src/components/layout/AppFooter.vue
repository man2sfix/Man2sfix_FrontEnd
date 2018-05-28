<template>
  <footer class="app-footer">
    <div class="footer-nav">
      <ul class="nav-list">
        <li class="nav-item" v-for="(item, index) in about" :key="index"><router-link :to="item.href" class="link">{{ item.name }}</router-link></li>
      </ul>
      <ul class="nav-list">
        <li class="nav-item" v-for="(item, index) in help" :key="index"><router-link :to="item.href" class="link">{{ item.name }}</router-link></li>
      </ul>
    </div>
    <div class="footer-sns">
      <ul class="nav-list">
        <li class="nav-item" v-for="(item, index) in sns" :key="index">
          <a :href="item.href" class="link" target="_blank"><i :class="item.icon"></i></a>
        </li>
      </ul>
    </div>
    <p class="copyright">Copyright &copy; MAN2SFIX. ALL RIGHTS RSERVED. 2018</p>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data () {
    return {
      about: [
        { name: '회사 소개', href: '/company' },
        { name: '서비스 소개', href: '/service' },
        { name: '이용방법', href: '/how-to-use' }
      ],
      help: [
        { name: '이용약관', href: '/terms-of-use' },
        { name: '개인정보 처리방침', href: '/privacy-policy' }
      ],
      sns: [
        { name: 'facebook', href: 'https://facebook.com', icon: 'fab fa-facebook-f' },
        { name: 'youtube', href: 'https://youtube.com', icon: 'fab fa-youtube' },
        { name: 'instagram', href: 'https://instagram.com', icon: 'fab fa-instagram' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.app-footer {
  text-align: center;
  border-top: 1px solid gray('300');
  padding: map-get($spacers, 5) 0;
  background-color: gray('800');

  .nav-list {
    font-size: 0;
  }

  .nav-item {
    display: inline-block;
    padding: map-get($spacers, 2);
    color: $white;
    font-size: $font-size-base * 0.8;
  }

  .footer-sns {
    padding: map-get($spacers, 3);

    .nav-item {
      font-size: $font-size-base;
      margin: 0 map-get($spacers, 1);
    }
  }

  .copyright {
    font-size: $font-size-base * 0.7;
    color: gray('400');
    line-height: 1.5;
  }
}
</style>
