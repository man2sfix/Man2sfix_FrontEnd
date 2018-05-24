export default {
  methods: {
    uploadAcademicFile (file, fileList) {
      this.uploadFile(file, fileList, 'academicFile')
    },
    removeAcademicFile (file, fileList) {
      this.form.academicFile = ''
    },
    uploadCareerFile (file, fileList) {
      this.uploadFile(file, fileList, 'careerFile')
    },
    removeCareerFile (file, fileList) {
      this.form.careerFile = ''
    },
    uploadCompletionFile (file, fileList) {
      this.uploadFile(file, fileList, 'completionFile')
    },
    removeCompletionFile (file, fileList) {
      this.form.completionFile = ''
    },
    exceedFile (file, fileList) {
      this.$message({
        showClose: true,
        message: '파일은 1개만 등록가능합니다.',
        type: 'warning'
      })
    }
  }
}
