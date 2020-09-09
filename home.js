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
  function addtocart(buttonid)
  {
      
      //let id;
      //id=document.getElementById(buttonid).value;
      //console.log(id);
      
  var itemname;
  var itemquantity;
  var itemprice;
  var result;

      
      switch(buttonid){
          case "button1":
                    
                    itemname="Cupcakes with cookies";
                    console.log("======"+itemname);
                    itemprice = 240;
                    itemquantity = document.getElementById("q1").value;
                    console.log( "========"+itemquantity);
                    console.log( "========"+itemprice);
                    break;
          case "button2":
                    itemname="Burger with finger chips";
                    console.log("======"+itemname);
                    itemprice = 210;
                    itemquantity = document.getElementById("q2").value;
                    console.log( "========"+itemquantity);
                    console.log( "========"+itemprice);
                    break;
          case "button3":
                    itemname="Coffee";
                    console.log("======"+itemname);
                      itemprice = 85;
                    itemquantity = document.getElementById("q3").value;
                    console.log( "========"+itemquantity);
                    console.log( "========"+itemprice);
                    break;
          case "button4":
                    itemname="Pizza";
                    console.log("======"+itemname);
                    itemprice = 200;
                    itemquantity = document.getElementById("q4").value;
                    console.log( "========"+itemquantity);
                    console.log( "========"+itemprice);
                    break;
      }
  
  var order={};
  var orders=[];
if(itemquantity>0)
{
     order={
                name:itemname,
                quantity:itemquantity,
                price:itemprice
            };
            var temp=orders.push(order);
            console.log("orders count======================================"+temp);
            console.log("Orders=======================================price"+order.price+", name="+order.name+", quantity="+order.quantity);
           
            
}


            createOrder(user,orders);
            
            alert("Sucessfully Entered.");
}

function createOrder(user,order){
      console.log("User in createOrder=  "+user);
      console.log("Order in createOrder=  "+order);
     
    firebase.database().ref(`cart/${user}`).once("value", snapshot => {
   if (snapshot.exists()){
      console.log("exists!");
      updateToCart(user,order);
   }
   else
   {
      let db = firebase.database().ref("cart/"+user);
      db.set(order);
   }
});
      //let db = firebase.database().ref("cart/"+user);
      //db.set(order);
  }
function updateToCart(user,newItem){
    var currentItems=[];
    let p;
    itemref=firebase.database().ref("cart/"+user);
    p=firebase.database().ref("cart/"+user+"/");
        console.log("value of p=====",p);
    itemref.once('value',snap=>{
        console.log("update to cart walaga")
        if(snap.exists())currentItems=snap.val();
        console.log(newItem);
        currentItems=currentItems.concat(newItem);
        console.log("whole list",currentItems);
        
        p.remove();
        itemref.set(currentItems);
    });
}
