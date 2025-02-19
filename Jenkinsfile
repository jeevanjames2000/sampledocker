pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'jeevanjames2000/sampledocker:latest'
        CONTAINER_NAME = 'sampledocker'
        PORT_MAPPING = '7000:7000'
    }

    stages {
        stage('Pull Latest Docker Image') {
            steps {
                script {
                    // Pull the latest Docker image
                    bat 'docker pull %DOCKER_IMAGE%'
                }
            }
        }

        stage('Stop and Remove Existing Container') {
            steps {
                script {
                    // Stop and remove the existing container (if it exists)
                    bat '''
                        docker stop %CONTAINER_NAME%
                        docker rm %CONTAINER_NAME% 
                    '''
                }
            }
        }

        stage('Run Updated Container') {
            steps {
                script {
                    // Run the updated container
                    bat 'docker run -d -p %PORT_MAPPING% --name %CONTAINER_NAME% %DOCKER_IMAGE%'
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}
