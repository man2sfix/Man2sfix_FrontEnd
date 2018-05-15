<template>
  <app-layout>
    <div class="inner-contents">
      <!-- header -->
      <div class="magazine-header">
        <h3 class="title">매거진</h3>
        <el-radio-group
          v-model="sort"
          @change="handleSortChange"
          >
          <el-radio :label="'latest'">최신순</el-radio>
          <el-radio :label="'recommend'">추천순</el-radio>
          <el-radio :label="'view'">조회순</el-radio>
        </el-radio-group>
      </div>
      <!-- list -->
      <magazine-list :list="list"></magazine-list>
      <!-- footer -->
      <div class="magazine-footer">
        <el-pagination
          layout="prev, pager, next"
          :page-size="12"
          :total="1000"
          :current-page.sync="page"
          @current-change="handlePageChange"
          >
        </el-pagination>
      </div>
    </div>
  </app-layout>
</template>

<script>
import Pagination from '@/mixins/pagination/Pagination'

import AppLayout from '@/components/layout/AppLayout'
import MagazineList from '@/components/magazine/MagazineList'

export default {
  name: 'Magazine',
  mixins: [
    Pagination
  ],
  data () {
    return {
      page: 1,
      sort: 'latest',
      sortList: [
        'latest',
        'recommend',
        'view'
      ],
      list: [
        {
          thumb: 'http://element.eleme.io/static/hamburger.50e4091.png',
          title: '제목제목제목제목제목제목제목제목',
          date: new Date()
        },
        {
          thumb: 'http://element.eleme.io/static/hamburger.50e4091.png',
          title: '제목제목제목제목제목제목제목제목',
          date: new Date()
        },
        {
          thumb: 'http://element.eleme.io/static/hamburger.50e4091.png',
          title: '제목제목제목제목제목제목제목제목',
          date: new Date()
        },
        {
          thumb: 'http://element.eleme.io/static/hamburger.50e4091.png',
          title: '제목제목제목제목제목제목제목제목',
          date: new Date()
        },
        {
          thumb: 'http://element.eleme.io/static/hamburger.50e4091.png',
          title: '제목제목제목제목제목제목제목제목',
          date: new Date()
        },
        {
          thumb: 'http://element.eleme.io/static/hamburger.50e4091.png',
          title: '제목제목제목제목제목제목제목제목',
          date: new Date()
        }
      ]
    }
  },
  methods: {
    getList () {
      this.currentPage()
      this.currentSort()
      console.log('a')
    }
  },
  watch: {
    '$route': 'getList'
  },
  created () {
    this.getList()
  },
  components: {
    AppLayout,
    MagazineList
  }
}
</script>

<style lang="scss" scoped>
.magazine-header {
  display: flex;
  align-items: center;
  padding-bottom: map-get($spacers, 4);

  .title {
    flex: auto;
    font-size: $font-size-lg;
  }

  .el-radio + .el-radio {
    margin-left: map-get($spacers, 3);
  }
}

.magazine-footer {
  text-align: center;
  padding-top: map-get($spacers, 4);
}
</style>
