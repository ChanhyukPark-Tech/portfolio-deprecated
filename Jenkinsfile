pipeline {
     agent any
     stages {
        stage("Build") {
            steps { 
                dir('client'){
                    sh 'ls -al'
                }        
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo rm -rf /home/ubuntu/client/deploy"
                sh "sudo cp -r ${WORKSPACE}/build/ /home/ubuntu/client/deploy"
            }
        }
    }
}
