
$("#about,#chart").hide();


$("button").on("click",function(){
    $("#about,#chart,#dashboard").hide();
    $($(this).attr("for")).show();
})