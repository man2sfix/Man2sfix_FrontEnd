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
            // copy dist diretory
            echo 'copy dist diretory'
            sh 'cp -rf ./dist/* /app/views/'

            // pm2 delete & start
            echo 'pm2 product delete & start'
            sh 'npm --prefix /app start'
          }
        }
      }
    }
  }
}
