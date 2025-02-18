pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/jeevanjames2000/sampledocker.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                powershell  'npm install'
            }
        }
        stage('Deploy') {
            steps {
                powershell  'npm run dev'  // Customize your deployment script
            }
        }
    }
}
