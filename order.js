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
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var user=window.localStorage.getItem("name");
 
  var date;
  var itemname;
  var itemquantity;
  var itemprice;
  var key;
  var data;
  var i=0;
  var dat={};
    var leadsRef = firebase.database().ref('order').child(user);
leadsRef.limitToLast(1).once('value', function(snapshot) {
    console.log("Hello");
    console.log(snapshot.val());
    
    
    snapshot.forEach(function(childSnapshot) {
        //console.log("Hello2");
      var childData = childSnapshot.val();
      
      console.log(childData.user);
      console.log(childData.TableId);
      console.log(childData.TotalAmount);
      $("#user").append(childData.user);
      $("#tableid").append(childData.TableId);
      $("#totalamount").append(childData.TotalAmount);
      $("#OrderDate").append(childData.OrderDate);
      for(i=0;i<childData.Items.length;i++){
          console.log(childData.Items[i].name);
      console.log(childData.Items[i].price);
      console.log(childData.Items[i].quantity);
      $("#orderid").append("<tr style='margin:20px; font-size:22px; padding:10px;'> <td style='margin:20px; font-size:22px; padding:10px;'>"+childData.Items[i].name+"</td><td style='margin:20px; font-size:22px; padding:10px;'>"+childData.Items[i].price+"</td><td style='margin:20px; font-size:22px; padding:10px;'>"+childData.Items[i].quantity+"</td> </tr>");
      }
      
      
    });
    
});
    
    
  
   
   