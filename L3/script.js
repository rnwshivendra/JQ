/*

css api - add class , remove class , toggle class, css()

*/




// $("#btn-1").on("click",hide);
// $("#btn-2").on("click",hide);
// $("#btn-3").on("click",hide);

// function hide(){
//     $("h1").hide();
// }

// addClass
$("#btn-1").on("click",function(){
    $("h1").removeClass("size").addClass(["hello"]);
})


// removeclass
$("#btn-2").on("click",function(){
    $("h1").removeClass(["size"]);
})


//css 
$("#btn-3").on("click",function(){
    $("h1").css("border","1px solid black").css("letterSpacing","2rem").css("textAlign","center");
})


//slide and fade

$("#slideup").on("click",function(){
    // $("img").slideUp("slow")
    $("img").fadeOut("slow");
})

$("#slidedown").on("click",function(){
    // $("img").slideDown("slow")
    $("img").fadeIn("slow");
})

$("#toggle").on("click",function(){
    // $("img").slideToggle(5000)
    $("img").fadeToggle("slow");
})

