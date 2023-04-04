$(function(){

    $("#imgtagview").text($("#imgDiv").html()).css("color","blue")
    
    $("#btnGo").click(function () { 
        $("#car").css("position","relative")
        $("#car").animate({left:"1200"},2000)
        setInterval(function(){
            $("#imgtagview").text($("#imgDiv").html())
        },100)
    });


    $("#btnBack").click(function () { 
        $("#car").animate({left:"0"},2000)
    });
})