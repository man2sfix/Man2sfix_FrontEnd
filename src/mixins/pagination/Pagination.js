export default {
  methods: {
    currentPage () {
      this.page = parseInt(this.$route.params.id) || 1
    },
    currentSort () {
      if (this.sortList.indexOf(this.$route.query.sort) < 0) {
        this.sort = 'latest'
      } else {
        this.sort = this.$route.query.sort
      }
    },
    handlePageChange (page) {
      this.$router.push({ path: `${this.$route.matched[0].path}/${page}`, query: { sort: this.sort } })
    },
    handleSortChange (sort) {
      this.$router.push({ path: `${this.$route.matched[0].path}/1`, query: { sort: this.sort } })
    }
  }
}
