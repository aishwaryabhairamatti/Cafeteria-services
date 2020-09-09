/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


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
 
  
   firebase.initializeApp(firebaseConfig);

  function submit(iteam)
  {
      var name= document.getElementById("name").value;
      var keyname=name.toString().toLowerCase();
        var price=document.getElementById("price").value;
      var x= document.getElementById(iteam);
      var domain=x.options[x.selectedIndex].value;
      var  admin = firebase.database().ref().child(domain).child(keyname);
      console.log("domain---",domain);
       
      console.log("name-----",name);
      var data={
          "name" : name,
          "price" : price
      }
      
      console.log("key--",keyname);
      admin.set(data);
      
  }

