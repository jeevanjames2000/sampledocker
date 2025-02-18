pipeline {
    agent any

    stages {
        stage('Pull Latest Changes') {
            steps {
                script {
                    powershell 'git pull origin main'
                }
            }
        }
    }
}
