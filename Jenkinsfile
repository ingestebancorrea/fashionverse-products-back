pipeline {
  agent any
  tools {nodejs "Node"}
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Build') {
      steps {
        sh 'chown -R ec2-user:ec2-user ~/.npm'
        sh 'chown -R ec2-user:ec2-user /home/ec2-user/projects/fashionverse-products-back'
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
