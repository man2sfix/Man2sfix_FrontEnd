<template>
  <el-form ref="form" :model="form" :rules="rules" label-position="top" size="medium" @submit.prevent.native="onSubmit('form')">
    <div class="item-career">
      <el-button @click.prevent="addCareer()" class="btn-add--career" size="mini"><i class="el-icon-plus"></i></el-button>
      <el-form-item label="경력사항">
        <el-form-item :prop="'careers[' + index + ']'" v-for="(career, index) in form.careers" :key="career.key">
          <div class="item-career-inner">
            <el-input type="text" v-model="career.company" placeholder="예) Man2sfix"></el-input>
            <el-button @click.prevent="removeCareer(career)"><i class="el-icon-close"></i></el-button>
          </div>
          <el-date-picker
            v-model="career.date"
            type="daterange"
            range-separator="-"
            start-placeholder="0000-00-00"
            end-placeholder="0000-00-00">
          </el-date-picker>
          <el-input type="textarea" v-model="career.description" placeholder="해당 경력을 소개해주세요."></el-input>
        </el-form-item>
      </el-form-item>
    </div>
  </el-form>
</template>

<script>
export default {
  name: 'Carrer',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
