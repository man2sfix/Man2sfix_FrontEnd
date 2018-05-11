<template>
  <app-layout>
    <div class="inner-contents">
      <h2 class="contents-title">모의훈련</h2>
      <p class="contents-text">모의훈련을 통해 스피치를 연습해보세요.</p>
      <div class="training-step">
        <el-steps :active="active" finish-status="success" align-center>
          <el-step>
            <template slot="title">
              유형 선택
            </template>
          </el-step>
          <el-step>
            <template slot="title">
              질문 생성
            </template>
          </el-step>
          <el-step>
            <template slot="title">
              훈련 시작
            </template>
          </el-step>
        </el-steps>
      </div>
      <div class="training-container">
        <training-type></training-type>
      </div>
      <div class="training-btn">
        <el-button round @click="next">질문생성하기</el-button>
      </div>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from '@/components/layout/AppLayout'
import TrainingType from '@/components/training/TrainingType'

export default {
  name: 'Training',
  data () {
    return {
      active: 0
    }
  },
  methods: {
    next () {
      if (this.active < 2) {
        this.active++
      }
    }
  },
  components: {
    AppLayout,
    TrainingType
  }
}
</script>

<style lang="scss" scoped>
  .training-step {
    padding: map-get($spacers, 5) 0 0;
  }

  .training-container {
    max-width: 850px;
    padding: map-get($spacers, 3);
    margin: map-get($spacers, 5) auto 0;
    border: 1px solid gray('300');
    border-radius: $font-size-sm;
  }

  .training-btn {
    text-align: center;
    padding: map-get($spacers, 5);
  }
</style>
