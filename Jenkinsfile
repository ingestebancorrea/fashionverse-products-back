pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Build') {
      steps {
        sh 'sudo chown -R ec2-user:ec2-user ~/.npm'
        sh 'sudo chown -R ec2-user:ec2-user /home/ec2-user/projects/fashionverse-products-back'
        sh 'npm install'
      }
    }      
    stage('Test') {
      steps {
        sh 'node test'
      }
    }
  }
}
