<template>
  <div class="inner-contents">
    <div class="collapse-container">
      <at-tabs>
        <at-tab-pane label="자주묻는질문">
          <faq-collapse-item :items="studentItems"></faq-collapse-item>
        </at-tab-pane>
        <at-tab-pane label="강사관련">
          <faq-collapse-item :items="instructorItems"></faq-collapse-item>
        </at-tab-pane>
      </at-tabs>
    </div>
  </div>
</template>

<script>
import FaqCollapseItem from '@/components/faq/FaqCollapseItem'

export default {
  name: 'FaqCollapse',
  data () {
    return {
      activeName: 'first',
      studentItems: [
        { title: '질문입니다.', text: '답변입니다.' },
        { title: '질문입니다.', text: '답변입니다.' }
      ],
      instructorItems: [
        { title: '질문입니다.', text: '답변입니다.' },
        { title: '질문입니다.', text: '답변입니다.' }
      ]
    }
  },
  components: {
    FaqCollapseItem
  }
}
</script>

<style lang="scss" scoped>
.collapse-container {
  max-width: 800px;
  margin: 0 auto;

  @include clearfix();
}
</style>
