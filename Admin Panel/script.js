// https://www.jqueryscript.net/demo/dashboard-admin-template-bootstrap/dashboard.html



$("#about,#chart").hide();


$("button").on("click",function(){
    $("#about,#chart,#dashboard").hide();
    $($(this).attr("for")).show();
})