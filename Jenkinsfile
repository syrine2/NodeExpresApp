pipeline {
    
     agent any
    
  tools {nodejs "NodeJS 18.4.0"}
    stages {
        stage('Git') {
            steps {
                git 'https://github.com/KMechG/NodeExpresApp.git'
            }
        }
       
        stage('Build') {
          steps {
              
            sh 'npm --version'  
            sh 'npm install express'
            sh 'npm install mongo'
            
          }
        }  
        stage('Test') {
          steps {
            sh 'npm test'
          }
    }
        
         
        
    }
}
