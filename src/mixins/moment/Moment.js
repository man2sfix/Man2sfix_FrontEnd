export default {
  methods: {
    moment (date, type) {
      const year = date.getUTCFullYear()
      const month = date.getUTCMonth() < 10 ? `0${date.getUTCMonth()}` : date.getUTCMonth()
      const day = date.getUTCDate() < 10 ? `0${date.getUTCDate()}` : date.getUTCDate()
      const hours = date.getHours() > 12 ? `0${date.getHours() - 12}` : date.getHours()
      const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
      const meridiem = date.getHours() > 12 ? 'PM' : 'AM'
      let filter = ''

      switch (type) {
        case 'YYYY-MM-DD HH:mm a':
          filter = `${year}-${month}-${day} ${hours}:${minutes} ${meridiem}`
          break

        default:
          filter = `${year}-${month}-${day}`
          break
      }

      return filter
    }
  }
}
