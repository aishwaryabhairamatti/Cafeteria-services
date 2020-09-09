/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
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
  var temp=0;
  var count=0;
  var length=0;
  var user;
  var tableid;
  var totalamount;
 var innerData2;
  var innerData;
  var itemname=[];
  var itemquantity=[];
  var itemprice=[];
  var key;
  var data;
  var i=0;
  var p;
  var abc=0;
  var html_id;
  var orderdate;
  var dat={};
    var leadsRef = firebase.database().ref('order');
    leadsRef.once('value', function(snapshot) {
    console.log("Hello");
    //console.log(snapshot.val());
    data = snapshot.val();
    for (var key in data) {
    // check if the property/key is defined in the object itself, not in parent
    if (data.hasOwnProperty(key)) {           
        
        innerData = data[key];
        //console.log(innerData);
        for (var key in innerData) {
    // check if the property/key is defined in the object itself, not in parent
    if (innerData.hasOwnProperty(key)) {           
        
        innerData2 = innerData[key];
        //console.log(innerData2);
        for (var key in innerData2) {
    // check if the property/key is defined in the object itself, not in parent
    if (innerData2.hasOwnProperty(key)) {           
        //console.log(key, innerData2[key]);
        
        //console.log(innerData3);
        
        if(key=="user"){
        user=innerData2[key];
        console.log(user);
        count = count +1;
        }
        if(key=="TableId"){
        tableid=innerData2[key];
        count = count +1;
        console.log(tableid);
        }
        if(key=="TotalAmount"){
        totalamount= innerData2[key];
        count = count +1;
        console.log(totalamount);
        }
        
        if(key=="OrderDate"){
        orderdate= innerData2[key];
        count = count +1;
        console.log(orderdate);
        }
        
        if(key == "Items"){
            console.log("Length1");
            console.log(innerData2[key].length);
            length=innerData2[key].length;
            for(p=0;p<innerData2[key].length;p++){
                itemname[p] = innerData2[key][p].name;
                
                itemprice[p] = innerData2[key][p].price;
                
                itemquantity[p] = innerData2[key][p].quantity;
                
                //$("#orderid").append("<tr style='margin:20px; font-size:22px; padding:10px;'> <td style='margin:20px; font-size:22px; padding:10px;'>"+itemname[i]+"</td><td style='margin:20px; font-size:22px; padding:10px;'>"+itemprice[i]+"</td><td style='margin:20px; font-size:22px; padding:10px;'>"+itemquantity[i]+"</td> </tr>");
            }
            console.log("Iteration "+abc);
            abc = abc+1;
            console.log(itemname);
            console.log(itemprice);
            console.log(itemquantity);
             count = count +1;
        }
       
        if(count ==5){
        $("#overall").append("\
        <h1 align='center' style='text-decoration: underline;font-weight: bolder;'> </h1>\
            <div class='container'>\
                \
                <h2 id='user' align='center' style='margin-left: 150px; float: left;'>Customer Name:"+user+" </h2>\
                <h2 id='tableid' align='center' style='margin-right: 150px; float: right;'>Table Id:"+tableid+" </h2>\
                \
            </div>\
            \<div class='container'>\
                \
                <h2 id='user' align='center' style='margin-left: 150px; float: left;'>Order Date:"+orderdate+" </h2>\
                \
            </div>\
            <br><br><br><br><br>\
            <div class='container'>\
                \
            \
            <table align='center'>\
                \
                <thead>\
                  <tr style='margin:20px; text-size:24px; padding:10px; float:center;'>\
                      <td style='margin:20px; font-size:22px; padding:10px; font-weight: bold;'>Name</td>\
                      <td style='margin:20px; font-size:22px; padding:10px; font-weight: bold;'>Price</td>\
                      <td style='margin:20px; font-size:22px; padding:10px; font-weight: bold;'>Quantity</td>\
                      \
                  </tr>\
                  <tr >\
                      <td style='border-bottom: 4px dotted;'></td>\
                      <td style='border-bottom: 4px dotted;'></td>\
                      <td style='border-bottom: 4px dotted;'></td>\
                  </tr>\
                 \
                </thead>\
                  <tbody  id='orderid"+temp+"'>\n\
                   </tbody>\
                   <tr >\
                      <td style='border-bottom: 4px dotted;'></td>\
                      <td style='border-bottom: 4px dotted;'></td>\
                      <td style='border-bottom: 4px dotted;'></td>\
                  </tr>\
            </table>\
            </div>\
            \
            \
            <div>\
                <h2 id='totalamount' align='center' style='text-decoration: underline;'>Total Amount:"+totalamount+" </h2>\
            </div>\
            ");
              count = count+1;                       
        } 
        if(count==6){
            console.log("Length of item iteration====="+length);
            html_id="#orderid"+temp;
        for(p=0;p<length;p++){
            
            $(html_id).append("<tr style='margin:20px; font-size:22px; padding:10px;'> <td style='margin:20px; font-size:22px; padding:10px;'>"+itemname[p]+"</td><td style='margin:20px; font-size:22px; padding:10px;'>"+itemprice[p]+"</td><td style='margin:20px; font-size:22px; padding:10px;'>"+itemquantity[p]+"</td> </tr>");
        }
        length=0;
        itemname=[];
        itemprice=[];
        itemquantity=[];
        count=0;
         temp = temp+1;
        }
            
                                
             
       
    }
    
}

 
console.log("=========================================");

    }
    
}

    }
    
}   
        
 
    
   
       
   });
    
  
   
   

