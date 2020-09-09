
function login(){

    var userEmail = document.getElementById("exampleInputEmail1").value;
    var userPass = document.getElementById("exampleInputPassword1").value;
    var username = userEmail.split("@", 1);
    console.log(username);
    window.localStorage.setItem("name",username);
    console.log("==========",firebase.auth());
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(
    function(){
        
        window.location.href="home1.html";
       
        }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
      // ...
    });
  
}
function logout(){
     window.localStorage.clear();
     alert("User logged out successfully");
    window.location.href="login.html";
    
}

  
  
  
