pipeline {
    agent { label 'linux' }

    options {
        disableConcurrentBuilds()
    }

    triggers {
        cron('H 17 * * *')
    }

    stages {
        stage('Build and test') {
            steps {
                sh 'make build'
            }
        }

        stage('Publish package') {
            environment {
                GH_TOKEN = credentials('github-access-token')
                NPM_TOKEN = credentials('devnpm-access-token')
                CI = true
            }
            steps {
                script {
                    if (env.BRANCH_NAME == 'master') {
                        sh 'make publish'
                    } else {
                        echo('Skipping release step because this is not the master branch.')
                    }
                }
            }
        }
    }
}
