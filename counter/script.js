var startCount = 10;
var endcount = 50;

$("#start").on("click",function(){
    $("#counter").counter({
        countFrom:startCount,
        countTo:endcount,
        
    }); 
})


$("#reset").click(function(){
    window.location.reload();
})


