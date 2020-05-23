//i have two points to say 
//how about there is a small game in this about corona virus 
//can we give link in the output ,when we click it we will go to the game
//game is me if you say yes





function setup() {
  createCanvas(1345,4000);
  //createSprite(400, 200, 50, 50);
}
var response,responseJSON;
function draw() {
  background("pink");  
  //drawSprites();
  
 

  //Maharastra
  fill("blue");
  textSize(30);
    text("Maharastra",10,45);
    
    text("Confirmed Cases",10,75);
    
    text("Active Cases",280,75);
    
    text("Deaths",500,75);
    
    text("Recovered",670,75);

  Maharastra();

  //tamilnadu
  fill("red");
  textSize(30);
  text("Tamilnadu",10,170);
  
  text("Confirmed Cases",10,200);
  
  text("Active Cases",280,200);
  
  text("Deaths",500,200);
  
  text("Recovered",670,200);

tamilnadu();
 
//Gujarat
fill("Black");
  textSize(30);
  text("Gujarat",10,280);
  
  text("Confirmed Cases",10,315);
  
  text("Active Cases",280,315);
  
  text("Deaths",500,315);
  
  text("Recovered",670,315);

Gujarat();

//Delhi
fill("Darkblue")
  textSize(30);
  text("Delhi",10,405);
  
  text("Confirmed Cases",10,440);
  
  text("Active Cases",280,440);
  
  text("Deaths",500,440);
  
  text("Recovered",670,440);

Delhi();

//Rajasthan
fill("DarkGreen")
  textSize(30);
  text("Rajasthan",10,535);
  
  text("Confirmed Cases",10,570);
  
  text("Active Cases",280,570);
  
  text("Deaths",500,570);
  
  text("Recovered",670,570);

Rajasthan();

//Madhya Pradesh
fill("white")
  textSize(30);
  text("Madhya Pradesh",10,660);
  
  text("Confirmed Cases",10,695);
  
  text("Active Cases",280,695);
  
  text("Deaths",500,695);
  
  text("Recovered",670,695);

  MadhyaPradesh();



//Uttar Pradesh
fill("red")
textSize(30);
text("Uttar Pradesh",10,780);

text("Confirmed Cases",10,810);

text("Active Cases",280,810);

text("Deaths",500,810);

text("Recovered",670,810);

UttarPradesh();

//West Bengal
fill("blue")
textSize(30);
text("West Bengal",10,890);

text("Confirmed Cases",10,925);

text("Active Cases",280,925);

text("Deaths",500,925);

text("Recovered",670,925);

WestBengal();

//AndhraPradesh                                                        
fill("black")
textSize(30);
text("Andhra Pradesh",10,1000);

text("Confirmed Cases",10,1035);

text("Active Cases",280,1035);

text("Deaths",500,1035);

text("Recovered",670,1035);

AndhraPradesh();

//Bihar

fill("Darkblue")
textSize(30);
text("Bihar",10,1110);

text("Confirmed Cases",10,1155);

text("Active Cases",280,1155);

text("Deaths",500,1155);

text("Recovered",670,1155);

Punjab();

//punjab

fill("green")
textSize(30);
text("Punjab",10,1240);

text("Confirmed Cases",10,1270);

text("Active Cases",280,1270);

text("Deaths",500,1270);

text("Recovered",670,1270);

Bihar();

//Telangana

 fill("blue")
 textSize(30);
 text("Telangana",10,1370);

 text("Confirmed Cases",10,1410);

 text("Active Cases",280,1410);

 text("Deaths",500,1410);

 text("Recovered",670,1410);

 Telangana();


 //karnataka

 fill("red")
 textSize(30);
 text("Karnataka",10,1490);

 text("Confirmed Cases",10,1520);

 text("Active Cases",280,1520);

 text("Deaths",500,1520);

 text("Recovered",670,1520);

 karnataka();

 //jammu and kashmir

 fill("darkgreen")
 textSize(30);
 text("Jammu and Kashmir",10,1600);

 text("Confirmed Cases",10,1630);

 text("Active Cases",280,1630);

 text("Deaths",500,1630);

 text("Recovered",670,1630);

 jammuandkashmir ();


 //Odisha

 fill("white")
 textSize(30);
 text("Odisha",10,1710);

 text("Confirmed Cases",10,1750);

 text("Active Cases",280,1750);

 text("Deaths",500,1750);

 text("Recovered",670,1750);

 Odisha();


 //Haryana

 fill("black")
 textSize(30);
 text("Haryana",10,1830);

 text("Confirmed Cases",10,1860);

 text("Active Cases",280,1860);

 text("Deaths",500,1860);

 text("Recovered",670,1860);

 Haryana();


 //Kerala
 fill("darkblue")
 textSize(30);
 text("Kerala",10,1930);

 text("Confirmed Cases",10,1960);

 text("Active Cases",280,1960);

 text("Deaths",500,1960);

 text("Recovered",670,1960);

 Kerala();

 //Jharkhand

 fill("darkgreen")
 textSize(30);
 text("Jharkhand",10,2030);

 text("Confirmed Cases",10,2060);

 text("Active Cases",280,2060);

 text("Deaths",500,2060);

 text("Recovered",670,2060);

 Jharkhand();


 //Assam

 fill("red")
 textSize(30);
 text("Assam",10,2140);

 text("Confirmed Cases",10,2170);

 text("Active Cases",280,2170);

 text("Deaths",500,2170);

 text("Recovered",670,2170);

 Assam();


  //Chandigarh

  fill("blue")
  textSize(30);
  text("Chandigarh",10,2250);
 
  text("Confirmed Cases",10,2280);
 
  text("Active Cases",280,2280);
 
  text("Deaths",500,2280);
 
  text("Recovered",670,2280);
 
  Chandigarh();


  //Tripura

  fill("white")
  textSize(30);
  text("Tripura",10,2360);
 
  text("Confirmed Cases",10,2390);
 
  text("Active Cases",280,2390);
 
  text("Deaths",500,2390);
 
  text("Recovered",670,2390);
 
  Tripura();


   //Chhattisgarh
   fill("black")
   textSize(30);
   text("Chhattisgarh",10,2470);
  
   text("Confirmed Cases",10,2500);
  
   text("Active Cases",280,2500);
  
   text("Deaths",500,2500);
  
   text("Recovered",670,2500);
  
   Chhattisgarh();

    //Himachal Pradesh
    fill("green")
    textSize(30);
    text("Himachal Pradesh",10,2580);
   
    text("Confirmed Cases",10,2610);
   
    text("Active Cases",280,2610);
   
    text("Deaths",500,2610);
   
    text("Recovered",670,2610);
   
    HimachalPradesh();


     //Uttarakhand
     fill("darkblue")
     textSize(30);
     text("Uttarakhand",10,2690);
    
     text("Confirmed Cases",10,2720);
    
     text("Active Cases",280,2720);
    
     text("Deaths",500,2720);
    
     text("Recovered",670,2720);
    
     Uttarakhand();


      //Goa
      fill("red")
      textSize(30);
      text("Goa",10,2780);
     
      text("Confirmed Cases",10,2810);
     
      text("Active Cases",280,2810);
     
      text("Deaths",500,2810);
     
      text("Recovered",670,2810);
     
      Goa();


       //Ladakh
       fill("blue")
       textSize(30);
       text("Ladakh",10,2870);
      
       text("Confirmed Cases",10,2900);
      
       text("Active Cases",280,2900);
      
       text("Deaths",500,2900);
      
       text("Recovered",670,2900);
      
       Ladakh();


        //Andaman and Nicobar Islands
        fill("white")
        textSize(30);
        text("Andaman and Nicobar Islands",10,2970);
       
        text("Confirmed Cases",10,3000);
       
        text("Active Cases",280,3000);
       
        text("Deaths",500,3000);
       
        text("Recovered",670,3000);
       
        AndamanandNicobarIslands();

          //Manipur
          fill("black")
          textSize(30);
          text("Manipur",10,3060);
         
          text("Confirmed Cases",10,3090);
         
          text("Active Cases",280,3090);
         
          text("Deaths",500,3090);
         
          text("Recovered",670,3090);
         
          Manipur();

           //Puducherry
           fill("green")
           textSize(30);
           text("Puducherry",10,3160);
          
           text("Confirmed Cases",10,3190);
          
           text("Active Cases",280,3190);
          
           text("Deaths",500,3190);
          
           text("Recovered",670,3190);
          
           Puducherry();
 


           //Meghalaya
           fill("darkblue")
           textSize(30);
           text("Meghalaya",10,3250);
          
           text("Confirmed Cases",10,3280);
          
           text("Active Cases",280,3280);
          
           text("Deaths",500,3280);
          
           text("Recovered",670,3280);
          
           Meghalaya();
 

           
           //Mizoram
           fill("red")
           textSize(30);
           text("Mizoram",10,3340);
          
           text("Confirmed Cases",10,3370);
          
           text("Active Cases",280,3370);
          
           text("Deaths",500,3370);
          
           text("Recovered",670,3370);
          
           Mizoram();


            //Arunachal Pradesh
            fill("blue")
            textSize(30);
            text("Arunachal Pradesh",10,3430);
           
            text("Confirmed Cases",10,3460);
           
            text("Active Cases",280,3460);
           
            text("Deaths",500,3460);
           
            text("Recovered",670,3460);
           
            ArunachalPradesh();


              //Dadra and Nagar Haveli and Daman and Diu
              fill("white")
              textSize(30);
              text("Dadra and Nagar Haveli and Daman and Diu",10,3520);
             
              text("Confirmed Cases",10,3550);
             
              text("Active Cases",280,3550);
             
              text("Deaths",500,3550);
             
              text("Recovered",670,3550);
             
              DadraandNagarHaveliandDamanandDiu();
 


              
              //Nagaland
              fill("black")
              textSize(30);
              text("Nagaland",10,3610);
             
              text("Confirmed Cases",10,3640);
             
              text("Active Cases",280,3640);
             
              text("Deaths",500,3640);
             
              text("Recovered",670,3640);
             
              Nagaland();

               
              //Lakshadweep
              fill("green")
              textSize(30);
              text("Lakshadweep",10,3700);
             
              text("Confirmed Cases",10,3730);
             
              text("Active Cases",280,3730);
             
              text("Deaths",500,3730);
             
              text("Recovered",670,3730);
             
              Lakshadweep();

               //Sikkim
               fill("darkblue")
               textSize(30);
               text("Sikkim",10,3790);
              
               text("Confirmed Cases",10,3820);
              
               text("Active Cases",280,3820);
              
               text("Deaths",500,3820);
              
               text("Recovered",670,3820);
              
               Sikkim();
 
 abc();
//Maharastra


}
async function Maharastra(){
var response = await fetch("https://api.covid19india.org/data.json");
var responseJson = await response.json();

console.log(responseJson);
 var third = responseJson.statewise;
 // console.log(third[1]);
 var confirmed = third[1].confirmed;
// console.log(bye);
textSize(20);
fill("blue");
 text(confirmed,50,110);
 var Active = third[1].active;
 text(Active,310,110);
 var Deaths = third[1].deaths;
 text(Deaths,515,110);
 var Recovered= third[1].recovered;
 text(Recovered,690 ,110);
 //var confirm = third.confirmed;
 //text(confirm,120,150);

}


//tamilnadu

async function tamilnadu(){
  var response = await fetch("https://api.covid19india.org/data.json");
  var responseJson = await response.json();
  
  //console.log(responseJson);
   var third = responseJson.statewise;
    //console.log(third[2])
   var confirmed = third[2].confirmed;
  // console.log(bye);
  fill("red")
  textSize(20);
   text(confirmed,50,230);
   var Active = third[2].active;
   text(Active,310,230);
   var Deaths = third[2].deaths;
   text(Deaths,530,230);
   var Recovered= third[2].recovered;
   text(Recovered,700,230);
   //var confirm = third.confirmed;
   //text(confirm,120,150);
  
  }


//gujarat

   async function Gujarat(){
     var response = await fetch("https://api.covid19india.org/data.json");
     var responseJson = await response.json();
    
    // console.log(responseJson);
      var third = responseJson.statewise;
       //console.log(third[3])
     var confirmed = third[3].confirmed;
     // console.log(bye);
     fill("black")
     textSize(20);
      text(confirmed,50,350);
      var Active = third[3].active;
      text(Active,310,350);
      var Deaths = third[3].deaths;
      text(Deaths,530,350);
      var Recovered= third[3].recovered;
      text(Recovered,700,350);
      //var confirm = third.confirmed;
     //text(confirm,120,150);

  }
  
  //Delhi
async function Delhi(){
  var response = await fetch("https://api.covid19india.org/data.json");
  var responseJson = await response.json();
 
  //console.log(responseJson);
   var third = responseJson.statewise;
    //console.log(third[4])
  var confirmed = third[4].confirmed;
  // console.log(bye);
  fill("Darkblue")
  textSize(20);
   text(confirmed,50,470);
   var Active = third[4].active;
   text(Active,310,470);
   var Deaths = third[4].deaths;
   text(Deaths,530,470);
   var Recovered= third[4].recovered;
   text(Recovered,700,470);
   //var confirm = third.confirmed;
  //text(confirm,120,150);

}




 //Rajasthan
 async function Rajasthan(){
  var response = await fetch("https://api.covid19india.org/data.json");
  var responseJson = await response.json();
 
 // console.log(responseJson);
   var third = responseJson.statewise;
    //console.log(third[5])
  var confirmed = third[5].confirmed;
  // console.log(bye);
  fill("DarkGreen")
  textSize(20);
   text(confirmed,50,595);
   var Active = third[5].active;
   text(Active,310,595);
   var Deaths = third[5].deaths;
   text(Deaths,530,595);
   var Recovered= third[5].recovered;
   text(Recovered,700,595);
   //var confirm = third.confirmed;
  //text(confirm,120,150);

}


//Madhya Pradesh
async function MadhyaPradesh(){
  var response = await fetch("https://api.covid19india.org/data.json");
  var responseJson = await response.json();
 
 // console.log(responseJson);
   var third = responseJson.statewise;
    //console.log(third[6])
  var confirmed = third[6].confirmed;
  // console.log(bye);
  fill("white")
  textSize(20);
   text(confirmed,50,720);
   var Active = third[5].active;
   text(Active,310,720);
   var Deaths = third[6].deaths;
   text(Deaths,530,720);
   var Recovered= third[6].recovered;
   text(Recovered,700,720);
   //var confirm = third.confirmed;
  //text(confirm,120,150);
}


//Uttar Pradesh
async function UttarPradesh(){
  var response = await fetch("https://api.covid19india.org/data.json");
  var responseJson = await response.json();
 
 // console.log(responseJson);
   var third = responseJson.statewise;
    //console.log(third[7])
  var confirmed = third[7].confirmed;
  // console.log(bye);
  fill("red")
  textSize(20);
   text(confirmed,50,840);
   var Active = third[7].active;
   text(Active,310,840);
   var Deaths = third[7].deaths;
   text(Deaths,530,840);
   var Recovered= third[7].recovered;
   text(Recovered,700,840);
   //var confirm = third.confirmed;
  //text(confirm,120,150);
}


//Westbengal
async function WestBengal(){
  var response = await fetch("https://api.covid19india.org/data.json");
  var responseJson = await response.json();
 
 // console.log(responseJson);
   var third = responseJson.statewise;
    //console.log(third[8])
  var confirmed = third[8].confirmed;
  // console.log(bye);
  fill("blue")
  textSize(20);
   text(confirmed,50,950);
   var Active = third[8].active;
   text(Active,310,950);
   var Deaths = third[8].deaths;
   text(Deaths,530,950);
   var Recovered= third[8].recovered;
   text(Recovered,700,950);
   //var confirm = third.confirmed;
  //text(confirm,120,150);
}


//AndhraPradesh
async function AndhraPradesh(){
  var response = await fetch("https://api.covid19india.org/data.json");
  var responseJson = await response.json();
 
 // console.log(responseJson);
   var third = responseJson.statewise;
    //console.log(third[9])
  var confirmed = third[9].confirmed;
  // console.log(bye);
  fill("black")
  textSize(20);
   text(confirmed,50,1070);
   var Active = third[9].active;
   text(Active,310,1070);
   var Deaths = third[9].deaths;
   text(Deaths,530,1070);
   var Recovered= third[9].recovered;
   text(Recovered,700,1070);
   //var confirm = third.confirmed;
  //text(confirm,120,150);
}


//Bihar
async function Bihar(){
  var response = await fetch("https://api.covid19india.org/data.json");
  var responseJson = await response.json();
 
 // console.log(responseJson);
   var third = responseJson.statewise;
    //console.log(third[11])
  var confirmed = third[11].confirmed;
  // console.log(bye);
  fill("Darkblue")
  textSize(20);
   text(confirmed,50,1190);
   var Active = third[11].active;
   text(Active,310,1190);
   var Deaths = third[11].deaths;
   text(Deaths,530,1190);
   var Recovered= third[11].recovered;
   text(Recovered,700,1190);
   //var confirm = third.confirmed;
  //text(confirm,120,150);
}

//Punjab
 async function Punjab(){
   var response = await fetch("https://api.covid19india.org/data.json");
   var responseJson = await response.json();
 
  // console.log(responseJson);
    var third = responseJson.statewise;
     //console.log(third[10])
   var confirmed = third[10].confirmed;
   // console.log(bye);
   fill("green")
   textSize(20);
    text(confirmed,50,1300);
    var Active = third[10].active;
    text(Active,310,1300);
    var Deaths = third[10].deaths;
    text(Deaths,530,1300);
    var Recovered= third[10].recovered;
    text(Recovered,700,1300);
    //var confirm = third.confirmed;
   //text(confirm,120,150);
 }


 //Telangana
  async function Telangana(){
   var response = await fetch("https://api.covid19india.org/data.json");
   var responseJson = await response.json();

  // console.log(responseJson);
    var third = responseJson.statewise;
     //console.log(third[12])
   var confirmed = third[12].confirmed;
   // console.log(bye);
   fill("blue")
   textSize(20);
    text(confirmed,50,1440);
    var Active = third[12].active;
    text(Active,310,1440);
    var Deaths = third[12].deaths;
    text(Deaths,530,1440);
    var Recovered= third[12].recovered;
    text(Recovered,700,1440);
    //var confirm = third.confirmed;
   //text(confirm,120,150);
 }


 //karnataka
 async function karnataka(){
  var response = await fetch("https://api.covid19india.org/data.json");
  var responseJson = await response.json();

 // console.log(responseJson);
   var third = responseJson.statewise;
    //console.log(third[13])
  var confirmed = third[13].confirmed;
  // console.log(bye);
  fill("red")
  textSize(20);
   text(confirmed,50,1550);
   var Active = third[13].active;
   text(Active,310,1550);
   var Deaths = third[13].deaths;
   text(Deaths,530,1550);
   var Recovered= third[13].recovered;
   text(Recovered,700,1550);
   //var confirm = third.confirmed;
  //text(confirm,120,150);
 }

  //jammu and kashmir
  async function jammuandkashmir(){
    var response = await fetch("https://api.covid19india.org/data.json");
    var responseJson = await response.json();
  
   // console.log(responseJson);
     var third = responseJson.statewise;
      //console.log(third[14])
    var confirmed = third[14].confirmed;
    // console.log(bye);
    fill("green")
    textSize(20);
     text(confirmed,50,1660);
     var Active = third[14].active;
     text(Active,310,1660);
     var Deaths = third[14].deaths;
     text(Deaths,530,1660);
     var Recovered= third[14].recovered;
     text(Recovered,700,1660);
     //var confirm = third.confirmed;
    //text(confirm,120,150);
   }

   //Odisha
  async function Odisha(){
    var response = await fetch("https://api.covid19india.org/data.json");
    var responseJson = await response.json();
  
   // console.log(responseJson);
     var third = responseJson.statewise;
      //console.log(third[16])
    var confirmed = third[16].confirmed;
    // console.log(bye);
    fill("white")
    textSize(20);
     text(confirmed,50,1790);
     var Active = third[16].active;
     text(Active,310,1790);
     var Deaths = third[16].deaths;
     text(Deaths,530,1790);
     var Recovered= third[16].recovered;
     text(Recovered,700,1790);
     //var confirm = third.confirmed;
    //text(confirm,120,150);
   }


  //Haryana
  async function Haryana(){
    var response = await fetch("https://api.covid19india.org/data.json");
    var responseJson = await response.json();
  
   // console.log(responseJson);
     var third = responseJson.statewise;
      //console.log(third[17])
    var confirmed = third[17].confirmed;
    // console.log(bye);
    fill("black")
    textSize(20);
     text(confirmed,50,1890);
     var Active = third[17].active;
     text(Active,310,1890);
     var Deaths = third[17].deaths;
     text(Deaths,530,1890);
     var Recovered= third[17].recovered;
     text(Recovered,700,1890);
     //var confirm = third.confirmed;
    //text(confirm,120,150);
   }

   //Kerala
   async function Kerala(){
    var response = await fetch("https://api.covid19india.org/data.json");
    var responseJson = await response.json();
  
   // console.log(responseJson);
     var third = responseJson.statewise;
      //console.log(third[18])
    var confirmed = third[18].confirmed;
    // console.log(bye);
    fill("darkblue")
    textSize(20);
     text(confirmed,50,1985);
     var Active = third[18].active;
     text(Active,310,1985);
     var Deaths = third[18].deaths;
     text(Deaths,530,1985);
     var Recovered= third[18].recovered;
     text(Recovered,700,1985);
     //var confirm = third.confirmed;
    //text(confirm,120,150);
   }

   //Jharkhand

   async function Jharkhand(){
    var response = await fetch("https://api.covid19india.org/data.json");
    var responseJson = await response.json();
  
   // console.log(responseJson);
     var third = responseJson.statewise;
      //console.log(third[19])
    var confirmed = third[19].confirmed;
    // console.log(bye);
    fill("darkgreen")
    textSize(20);
     text(confirmed,50,2080);
     var Active = third[19].active;
     text(Active,310,2080);
     var Deaths = third[19].deaths;
     text(Deaths,530,2080);
     var Recovered= third[19].recovered;
     text(Recovered,700,2080);
     //var confirm = third.confirmed;
    //text(confirm,120,150);
   }


   //Assam

   async function Assam(){
    var response = await fetch("https://api.covid19india.org/data.json");
    var responseJson = await response.json();
  
   // console.log(responseJson);
     var third = responseJson.statewise;
      //console.log(third[20])
    var confirmed = third[20].confirmed;
    // console.log(bye);
    fill("red")
    textSize(20);
     text(confirmed,50,2200);
     var Active = third[20].active;
     text(Active,310,2200);
     var Deaths = third[20].deaths;
     text(Deaths,530,2200);
     var Recovered= third[20].recovered;
     text(Recovered,700,2200);
     //var confirm = third.confirmed;
    //text(confirm,120,150);
   }


    //Chandigarh

    async function Chandigarh(){
      var response = await fetch("https://api.covid19india.org/data.json");
      var responseJson = await response.json();
    
     // console.log(responseJson);
       var third = responseJson.statewise;
        //console.log(third[21])
      var confirmed = third[21].confirmed;
      // console.log(bye);
      fill("blue")
      textSize(20);
       text(confirmed,50,2310);
       var Active = third[21].active;
       text(Active,310,2310);
       var Deaths = third[21].deaths;
       text(Deaths,530,2310);
       var Recovered= third[21].recovered;
       text(Recovered,700,2310);
       //var confirm = third.confirmed;
      //text(confirm,120,150);
     }


      //tripura

    async function Tripura(){
      var response = await fetch("https://api.covid19india.org/data.json");
      var responseJson = await response.json();
    
     // console.log(responseJson);
       var third = responseJson.statewise;
        //console.log(third[22])
      var confirmed = third[22].confirmed;
      // console.log(bye);
      fill("white")
      textSize(20);
       text(confirmed,50,2420);
       var Active = third[22].active;
       text(Active,310,2420);
       var Deaths = third[22].deaths;
       text(Deaths,530,2420);
       var Recovered= third[22].recovered;
       text(Recovered,700,2420);
       //var confirm = third.confirmed;
      //text(confirm,120,150);
     }
  

      //Chhattisgarh

    async function Chhattisgarh(){
      var response = await fetch("https://api.covid19india.org/data.json");
      var responseJson = await response.json();
    
     // console.log(responseJson);
       var third = responseJson.statewise;
        //console.log(third[23])
      var confirmed = third[23].confirmed;
      // console.log(bye);
      fill("black")
      textSize(20);
       text(confirmed,50,2530);
       var Active = third[23].active;
       text(Active,310,2530);
       var Deaths = third[23].deaths;
       text(Deaths,530,2530);
       var Recovered= third[23].recovered;
       text(Recovered,700,2530);
       //var confirm = third.confirmed;
      //text(confirm,120,150);
     }


       //Himachal Pradesh

    async function HimachalPradesh(){
      var response = await fetch("https://api.covid19india.org/data.json");
      var responseJson = await response.json();
    
     // console.log(responseJson);
       var third = responseJson.statewise;
        //console.log(third[24])
      var confirmed = third[24].confirmed;
      // console.log(bye);
      fill("green")
      textSize(20);
       text(confirmed,50,2650);
       var Active = third[24].active;
       text(Active,310,2650);
       var Deaths = third[24].deaths;
       text(Deaths,530,2650);
       var Recovered= third[24].recovered;
       text(Recovered,700,2650);
       //var confirm = third.confirmed;
      //text(confirm,120,150);
     }


       //Uttarakhand

    async function Uttarakhand(){
      var response = await fetch("https://api.covid19india.org/data.json");
      var responseJson = await response.json();
    
     // console.log(responseJson);
       var third = responseJson.statewise;
        //console.log(third[25])
      var confirmed = third[25].confirmed;
      // console.log(bye);
      fill("darkblue")
      textSize(20);
       text(confirmed,50,2750);
       var Active = third[25].active;
       text(Active,310,2750);
       var Deaths = third[25].deaths;
       text(Deaths,530,2750);
       var Recovered= third[25].recovered;
       text(Recovered,700,2750);
       //var confirm = third.confirmed;
      //text(confirm,120,150);
     }
  


    //Goa

    async function Goa(){
      var response = await fetch("https://api.covid19india.org/data.json");
      var responseJson = await response.json();
    
     // console.log(responseJson);
       var third = responseJson.statewise;
        //console.log(third[26])
      var confirmed = third[26].confirmed;
      // console.log(bye);
      fill("red")
      textSize(20);
       text(confirmed,50,2840);
       var Active = third[26].active;
       text(Active,310,2840);
       var Deaths = third[26].deaths;
       text(Deaths,530,2840);
       var Recovered= third[26].recovered;
       text(Recovered,700,2840);
       //var confirm = third.confirmed;
      //text(confirm,120,150);
      }


       //Ladakh

    async function Ladakh(){
      var response = await fetch("https://api.covid19india.org/data.json");
      var responseJson = await response.json();
    
     // console.log(responseJson);
       var third = responseJson.statewise;
        //console.log(third[27])
      var confirmed = third[27].confirmed;
      // console.log(bye);
      fill("blue")
      textSize(20);
       text(confirmed,50,2930);
       var Active = third[27].active;
       text(Active,310,2930);
       var Deaths = third[27].deaths;
       text(Deaths,530,2930);
       var Recovered= third[27].recovered;
       text(Recovered,700,2930);
       //var confirm = third.confirmed;
      //text(confirm,120,150);
      }


       //Andaman and Nicobar Islands

    async function AndamanandNicobarIslands(){
      var response = await fetch("https://api.covid19india.org/data.json");
      var responseJson = await response.json();
    
     // console.log(responseJson);
       var third = responseJson.statewise;
        //console.log(third[28])
      var confirmed = third[28].confirmed;
      // console.log(bye);
      fill("white")
      textSize(20);
       text(confirmed,50,3030);
       var Active = third[28].active;
       text(Active,310,3030);
       var Deaths = third[28].deaths;
       text(Deaths,530,3030);
       var Recovered= third[28].recovered;
       text(Recovered,700,3030);
       //var confirm = third.confirmed;
      //text(confirm,120,150);
      }

       //Manipur

    async function Manipur(){
      var response = await fetch("https://api.covid19india.org/data.json");
      var responseJson = await response.json();
    
     // console.log(responseJson);
       var third = responseJson.statewise;
        //console.log(third[29])
      var confirmed = third[29].confirmed;
      // console.log(bye);
      fill("black")
      textSize(20);
       text(confirmed,50,3120);
       var Active = third[29].active;
       text(Active,310,3120);
       var Deaths = third[29].deaths;
       text(Deaths,530,3120);
       var Recovered= third[29].recovered;
       text(Recovered,700,3120);
       //var confirm = third.confirmed;
      //text(confirm,120,150);
      }


       //Puducherry

    async function Puducherry(){
      var response = await fetch("https://api.covid19india.org/data.json");
      var responseJson = await response.json();
    
     // console.log(responseJson);
       var third = responseJson.statewise;
        //console.log(third[30])
      var confirmed = third[30].confirmed;
      // console.log(bye);
      fill("green")
      textSize(20);
       text(confirmed,50,3220);
       var Active = third[30].active;
       text(Active,310,3220);
       var Deaths = third[30].deaths;
       text(Deaths,530,3220);
       var Recovered= third[30].recovered;
       text(Recovered,700,3220);
       //var confirm = third.confirmed;
      //text(confirm,120,150);
      }


       //Meghalaya

    async function Meghalaya(){
      var response = await fetch("https://api.covid19india.org/data.json");
      var responseJson = await response.json();
    
     // console.log(responseJson);
       var third = responseJson.statewise;
        //console.log(third[31])
      var confirmed = third[31].confirmed;
      // console.log(bye);
      fill("darkblue")
      textSize(20);
       text(confirmed,50,3310);
       var Active = third[31].active;
       text(Active,310,3310);
       var Deaths = third[31].deaths;
       text(Deaths,530,3310);
       var Recovered= third[31].recovered;
       text(Recovered,700,3310);
       //var confirm = third.confirmed;
      //text(confirm,120,150);
      }
      
      
         //Mizoram

    async function Mizoram(){
      var response = await fetch("https://api.covid19india.org/data.json");
      var responseJson = await response.json();
    
     // console.log(responseJson);
       var third = responseJson.statewise;
        //console.log(third[32])
      var confirmed = third[32].confirmed;
      // console.log(bye);
      fill("red")
      textSize(20);
       text(confirmed,50,3400);
       var Active = third[32].active;
       text(Active,310,3400);
       var Deaths = third[32].deaths;
       text(Deaths,530,3400);
       var Recovered= third[32].recovered;
       text(Recovered,700,3400);
       //var confirm = third.confirmed;
      //text(confirm,120,150);
      }


           //Arunachal Pradesh

    async function ArunachalPradesh(){
      var response = await fetch("https://api.covid19india.org/data.json");
      var responseJson = await response.json();
    
     // console.log(responseJson);
       var third = responseJson.statewise;
        //console.log(third[33])
      var confirmed = third[33].confirmed;
      // console.log(bye);
      fill("blue")
      textSize(20);
       text(confirmed,50,3490);
       var Active = third[33].active;
       text(Active,310,3490);
       var Deaths = third[33].deaths;
       text(Deaths,530,3490);
       var Recovered= third[33].recovered;
       text(Recovered,700,3490);
       //var confirm = third.confirmed;
      //text(confirm,120,150);
      }

           //Dadra and Nagar Haveli and Daman and Diu

    async function DadraandNagarHaveliandDamanandDiu(){
      var response = await fetch("https://api.covid19india.org/data.json");
      var responseJson = await response.json();
    
     // console.log(responseJson);
       var third = responseJson.statewise;
        //console.log(third[34])
      var confirmed = third[34].confirmed;
      // console.log(bye);
      fill("white")
      textSize(20);
       text(confirmed,50,3580);
       var Active = third[34].active;
       text(Active,310,3580);
       var Deaths = third[34].deaths;
       text(Deaths,530,3580);
       var Recovered= third[34].recovered;
       text(Recovered,700,3580);
       //var confirm = third.confirmed;
      //text(confirm,120,150);
      }
      

           //Nagaland

    async function Nagaland(){
      var response = await fetch("https://api.covid19india.org/data.json");
      var responseJson = await response.json();
    
     // console.log(responseJson);
       var third = responseJson.statewise;
        //console.log(third[35])
      var confirmed = third[35].confirmed;
      // console.log(bye);
      fill("black")
      textSize(20);
       text(confirmed,50,3670);
       var Active = third[35].active;
       text(Active,310,3670);
       var Deaths = third[35].deaths;
       text(Deaths,530,3670);
       var Recovered= third[35].recovered;
       text(Recovered,700,3670);
       //var confirm = third.confirmed;
      //text(confirm,120,150);
      }

      //Lakshadweep


    async function Lakshadweep(){
      var response = await fetch("https://api.covid19india.org/data.json");
      var responseJson = await response.json();
    
     // console.log(responseJson);
       var third = responseJson.statewise;
        //console.log(third[36])
      var confirmed = third[36].confirmed;
      // console.log(bye);
      fill("green")
      textSize(20);
       text(confirmed,50,3760);
       var Active = third[36].active;
       text(Active,310,3760);
       var Deaths = third[36].deaths;
       text(Deaths,530,3760);
       var Recovered= third[36].recovered;
       text(Recovered,700,3760);
       //var confirm = third.confirmed;
      //text(confirm,120,150);
      }


     //Sikkim


     async function Sikkim(){
       var response = await fetch("https://api.covid19india.org/data.json");
       var responseJson = await response.json();
    
      // console.log(responseJson);
        var third = responseJson.statewise;
         //console.log(third[37])
       var confirmed = third[37].confirmed;
       // console.log(bye);
       fill("darkblue")
       textSize(20);
        text(confirmed,50,3850);
        var Active = third[37].active;
        text(Active,310,3850);
        var Deaths = third[37].deaths;
        text(Deaths,530,3850);
        var Recovered= third[37].recovered;
        text(Recovered,700,3850);
        //var confirm = third.confirmed;
       //text(confirm,120,150);
       }
      

  