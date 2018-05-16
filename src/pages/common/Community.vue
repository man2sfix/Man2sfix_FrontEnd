<template>
  <app-layout>
    <div class="inner-contents">
      <!-- header -->
      <div class="community-header">
        <h3 class="title">커뮤니티</h3>
        <el-radio-group
          v-model="sort"
          @change="handleSortChange"
          >
          <el-radio :label="'latest'">최신순</el-radio>
          <el-radio :label="'person'">맴버순</el-radio>
          <el-radio :label="'view'">조회순</el-radio>
        </el-radio-group>
      </div>
      <!-- list -->
      <community-list :list="list"></community-list>
      <!-- footer -->
      <div class="community-footer">
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
import CommunityList from '@/components/community/CommunityList'

export default {
  name: 'Community',
  mixins: [
    Pagination
  ],
  data () {
    return {
      page: 1,
      sort: 'latest',
      sortList: [
        'latest',
        'person',
        'view'
      ],
      list: [
        {
          thumb: 'http://element.eleme.io/static/hamburger.50e4091.png',
          title: '제목제목제목제목제목제목제목제목',
          description: '상세상세상세상세상세상세상세상세상세상세상세상세상세상세상세상세상세상세상세',
          nowMember: 3,
          limitMember: 10,
          date: new Date()
        },
        {
          thumb: 'http://element.eleme.io/static/hamburger.50e4091.png',
          title: '제목제목제목제목제목제목제목제목',
          description: '상세상세상세상세상세상세상세상세상세상세상세상세상세상세상세상세상세상세상세',
          nowMember: 3,
          limitMember: 10,
          date: new Date()
        },
        {
          thumb: 'http://element.eleme.io/static/hamburger.50e4091.png',
          title: '제목제목제목제목제목제목제목제목',
          description: '상세상세상세상세상세상세상세상세상세상세상세상세상세상세상세상세상세상세상세',
          nowMember: 3,
          limitMember: 10,
          date: new Date()
        },
        {
          thumb: 'http://element.eleme.io/static/hamburger.50e4091.png',
          title: '제목제목제목제목제목제목제목제목',
          description: '상세상세상세상세상세상세상세상세상세상세상세상세상세상세상세상세상세상세상세',
          nowMember: 3,
          limitMember: 10,
          date: new Date()
        },
        {
          thumb: 'http://element.eleme.io/static/hamburger.50e4091.png',
          title: '제목제목제목제목제목제목제목제목',
          description: '상세상세상세상세상세상세상세상세상세상세상세상세상세상세상세상세상세상세상세',
          nowMember: 3,
          limitMember: 10,
          date: new Date()
        },
        {
          thumb: 'http://element.eleme.io/static/hamburger.50e4091.png',
          title: '제목제목제목제목제목제목제목제목',
          description: '상세상세상세상세상세상세상세상세상세상세상세상세상세상세상세상세상세상세상세',
          nowMember: 3,
          limitMember: 10,
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
    CommunityList
  }
}
</script>

<style lang="scss" scoped>
.community-header {
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

.community-footer {
  text-align: center;
  padding-top: map-get($spacers, 4);
}
</style>
