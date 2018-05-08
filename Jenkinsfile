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
    stage('Install') {
      agent any
      when {
        branch 'master'
      }
      steps {
        retry(3) { // 3 retry
          timeout(3) { // 3 minutes
            // show list 
            echo 'current workspace list'
            sh 'ls -al'

            // copy config file
            sh 'cp -rf ./enviroments/* /*'

            // npm install
            echo 'npm install'
            sh 'npm install'

            // npm run build
            echo 'npm build'
            sh 'npm run build'
          }
        }
      }
    }
    stage('Product Deploy') {
      agent any
      when {
        branch 'master'
      }
      steps {
        retry(2) {
          timeout(2) { // 2minutes
            // copy dist diretory
            echo 'copy dist diretory'
            sh 'cp -rf ./dist /app/views'

            // pm2 delete & start
            echo 'pm2 product delete & start'
            sh 'npm --prefix /app start'
          }
        }
      }
    }
  }
}
