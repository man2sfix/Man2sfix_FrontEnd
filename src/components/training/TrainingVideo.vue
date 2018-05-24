<template>
  <div>
    <div class="video-form">
      <video :src="`${$api}/video/video.mp4`" class="video-instructor" loop autoplay></video>
      <video id="video" class="video-training" autoplay muted></video>
    </div>
    <div class="">
      <el-button plain @click="startRecording()">시작</el-button>
      <el-button plain @click="stopRecording()">정지</el-button>
      <el-button plain @click="download()">다운로드</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TraningVideo',
  data () {
    return {
      type: '',
      question: '',
      stream: '',
      mediaRecorder: '',
      recordedBlobs: [],
      constraints: {
        audio: true,
        video: true
      }
    }
  },
  methods: {
    init () {
      this.type = this.$route.query.type
      this.question = this.$route.query.question
    },
    handleDataAvailable (event) {
      if (event.data && event.data.size > 0) {
        this.recordedBlobs.push(event.data)
      }
    },
    handleStop (event) {
      console.log('Recorder stopped: ', event)
    },
    startRecording () {
      this.recordedBlobs = []
      let options = { mimeType: 'video/webm; codecs=vp9' }

      if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        console.log(options.mimeType + ' is not Supported')
        options = { mimeType: 'video/webm; codecs=vp8' }
        if (!MediaRecorder.isTypeSupported(options.mimeType)) {
          console.log(options.mimeType + ' is not Supported')
          options = { mimeType: 'video/webm' }
          if (!MediaRecorder.isTypeSupported(options.mimeType)) {
            console.log(options.mimeType + ' is not Supported')
            options = { mimeType: '' }
          }
        }
      }
      try {
        this.mediaRecorder = new MediaRecorder(this.stream, options)
      } catch (e) {
        console.error('Exception while creating MediaRecorder: ' + e)
        alert('Exception while creating MediaRecorder: ' + e + '. mimeType: ' + options.mimeType)
        return
      }
      console.log('Created MediaRecorder', this.mediaRecorder, 'with options', options)
      console.log('MediaRecorder started', this.mediaRecorder)
      this.mediaRecorder.onstop = this.handleStop
      this.mediaRecorder.ondataavailable = this.handleDataAvailable
      this.mediaRecorder.start(10)
    },
    stopRecording () {
      this.mediaRecorder.stop()
      console.log('Recorded Blobs: ', this.recordedBlobs)
    },
    download () {
      const blob = new Blob(this.recordedBlobs, { type: 'video/webm' })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.style.display = 'none'
      a.href = url
      a.download = 'test.webm'
      document.body.appendChild(a)
      a.click()
      setTimeout(() => {
        document.body.removeChild(a)
        window.URL.revokeObjectURL(url)
      }, 100)
    },
    async webRtc () {
      const isSecureOrigin = location.protocol === 'https:' || location.hostname === 'localhost'
      if (!isSecureOrigin) {
        alert('getUserMedia() must be run from a secure origin: HTTPS or localhost.' + '\n\nChanging protocol to HTTPS')
        location.protocol = 'HTTPS'
      } else {
        try {
          const stream = await navigator.mediaDevices.getUserMedia(this.constraints)
          this.stream = stream
          document.getElementById('video').srcObject = stream
        } catch (err) {
          console.log('navigator.getUserMedia error: ', err)
        }
      }
    }
  },
  watch: {
    '$route': 'init'
  },
  created () {
    this.init()
    this.webRtc()
  }
}
</script>

<style lang="scss" scoped>
.video-form {
  padding: map-get($spacers, 5) 0 0;
  position: relative;

  .video-instructor {
    width: 100%;
  }

  .video-training {
    position: absolute;
    bottom: map-get($spacers, 3);
    right: map-get($spacers, 3);
    width: 150px;
  }
}
</style>
