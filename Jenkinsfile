pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                 dir('client'){
                      sh "npm install"
                      sh "npm run build"
                 }
                
            }
        }
        stage("Deploy") {
            steps {
                sh "rm -rf /home/ubuntu/client/deploy"
                sh "cp -r ${WORKSPACE}/build/ /home/ubuntu/client/deploy"
            }
        }
    }
}
