def dockerimage
pipeline {
    
     agent any
    
  tools {nodejs "NodeJS 16.13.0"}
    stages {
        
        stage('Deployer app node'){

          steps {
           echo 'test'
          }
        }
        
        stage('Build') {
          steps {
            bat 'npm --version'  
            bat 'npm install express'
            bat 'npm install mongo'
            bat 'npm install mocha -g'
            
          }
        }  
        /* stage('Test') {
          steps {
            sh 'npm test'
          }
        }*/
        stage('Build image with docker') {
             steps{
                script{
                   
                   dockerImage = docker.build("syrine96/nodeapp:latest")
                    
                }
             }
                    
          }
        stage('Push image') {
            steps{
                script{
           
                    withDockerRegistry([credentialsId: "docker-hub", url:""]){
                    dockerImage.push()
                    
              }
               }
             }
        }
        
        
        /*stage('Docker Build and Push'){
            steps{
                withDockerRegistry([credentialsId: "docker-hub", url:""]){
                    //sh 'printenv'
                    sh 'docker build -t yaouini/appnode-oct:""$GIT_COMMIT"" .'
                    sh 'docker push yaouini/appnode-oct:""$GIT_COMMIT"" '
                }
            }
            
        }*/
        
         
        
    }
}
