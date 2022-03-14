node{
  
       stage('SCM checkout...'){
       git  'https://github.com/javahometech/my-app'
       }
       stage('compile the whole package'){
       def mvnhome = tool name: 'maven-3', type: 'maven'
         sh "${mvnhome}/bin/mvn package"
       }
}
