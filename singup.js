var firebaseConfig = {
    apiKey: "AIzaSyAcM3wkkq3YlraB5HMmVzPtafBNxcSZQoY",
    authDomain: "miniproject-9dee1.firebaseapp.com",
    databaseURL: "https://miniproject-9dee1.firebaseio.com",
    projectId: "miniproject-9dee1",
    storageBucket: "miniproject-9dee1.appspot.com",
    messagingSenderId: "410539804770",
    appId: "1:410539804770:web:d8af45223668059336e93b",
    measurementId: "G-NT4LQEJF7J"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  

function singup(){

    var username=document.getElementById('name');
    var email=document.getElementById('email');
    var pass=document.getElementById('pass');
   
    var contact=document.getElementById('contact');
    

    firebase.auth().createUserWithEmailAndPassword(email.value,pass.value).then(function(response){

        firebase.database().ref('users').push({
            username:username.value,
            email:firebase.auth().currentUser.email,
            userId:firebase.auth().currentUser.uid,
           password:pass.value,
            contact:contact.value,
            
           });

          window.location.href="login.html"; 
    })
    .catch(function(error){

        var errorCode=error.code;
        var errorMessage=error.message;
        console.log(errorCode);
        console.log(errorMessage);
    })
}