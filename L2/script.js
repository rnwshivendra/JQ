/*

two way through which we can include jquery in our html
1. by downloading jquery   2. by using CDN (Content Delievery Network)


mouse - click, dblclick, 

selector.on("event",function (){
    code 
})
*/

console.log(document);


$(document).on("keydown",function(event){
  
    $("div").hide();
  
})


$(document).on("keyup",function(event){
   
     $("div").show();
   
 })
 

if(event.key == "s"){
    $("div").show();
   }
