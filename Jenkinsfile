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
