export default {
  methods: {
    uploadProfile (file, fileList) {
      const isSize = file.size <= 1 * 1024 * 1024
      const isType = file.raw.type === 'image/jpg' || file.raw.type === 'image/png' || file.raw.type === 'image/jpeg' || file.raw.type === 'image/gif'

      if (isSize && isType) {
        this.form.profile = file.raw
      } else {
        fileList.pop()
        this.$message({
          showClose: true,
          message: '파일 크기 혹은 형식을 확인해주세요.',
          type: 'warning'
        })
      }
    },
    removeProfile (file, fileList) {
      this.form.profile = ''
    }
  }
}
