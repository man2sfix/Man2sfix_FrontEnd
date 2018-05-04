<template>
  <ul class="nav">
    <li v-for="(item, index) in nav" :key="index">
      <router-link :to="item.href">{{ item.name }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AppNav',
  data () {
    return {
      nav: [
        {
          name: '맨투스픽 소개',
          href: '/'
        },
        {
          name: '강사진 소개',
          href: 'instructors'
        },
        {
          name: '이용방법',
          href: 'howtouse'
        },
        {
          name: '자주 묻는 질문',
          href: 'faq'
        },
        {
          name: '제휴 및 문의',
          href: 'contact'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .nav {
    flex: auto;
    font-size: 0;
    text-align: right;

    &,
    li,
    a {
      height: 100%;
    }

    li {
      display: inline-block;
      font-size: $font-size-base;
      margin: 0 map-get($spacers, 2);
    }

    a {
      display: flex;
      align-items: center;
    }

    .router-link-exact-active {
      color: theme-color('primary');
    }
  }
</style>
