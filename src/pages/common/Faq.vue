<template>
  <app-layout>
    <div class="inner-contents">
      <h2 class="contents-title">자주 묻는 질문</h2>
      <p class="contents-text">평소 궁금해하시는 질문들을 모았습니다.</p>
      <div class="collapse-container">
        <faq-collapse :title="studentTitle" :items="studentItems"></faq-collapse>
        <faq-collapse :title="instructorTitle" :items="instructorItems"></faq-collapse>
      </div>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from '@/components/layout/AppLayout'
import FaqCollapse from '@/components/faq/FaqCollapse'

export default {
  name: 'Faq',
  data () {
    return {
      studentTitle: '학생이신가요?',
      studentItems: [
        { title: '질문입니다.', text: '답변입니다.' },
        { title: '질문입니다.', text: '답변입니다.' }
      ],
      instructorTitle: '강사이신가요?',
      instructorItems: [
        { title: '질문입니다.', text: '답변입니다.' },
        { title: '질문입니다.', text: '답변입니다.' }
      ]
    }
  },
  components: {
    AppLayout,
    FaqCollapse
  }
}
</script>

<style lang="scss" scoped>
  .collapse-container {
    padding-bottom: map-get($spacers, 5);

    @include clearfix();
  }
</style>
