pipeline {
  agent none
  environment {
    CI = 'true'
  }
  stages {
    stage('Checkout') {
      agent any
      steps {
        // start checkout
        echo 'start checkout'
        echo "Building ${BRANCH_NAME}"
        echo "Current workspace : ${workspace}"

        // remove app views
        echo 'copy workspace diretory'
        sh 'rm -rf /app/views/*'

        // copy workspace -> app
        echo 'copy workspace diretory'
        sh 'cp -rf ./dist/* /app/views/'
      }
    }
    stage('Product Deploy') {
      agent any
      when {
        branch 'master'
      }
      steps {
        retry(2) { // 2 retry
          timeout(2) { // 2minutes
            // product container list
            echo 'product conatiner list'
            sh 'docker exec -i product ls -al'

            // pm2 delete & start
            echo 'pm2 product delete & start'
            sh 'docker exec -i product npm --prefix /app start'
          }
        }
      }
    }
  }
}
