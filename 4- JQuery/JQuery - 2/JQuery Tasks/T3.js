$(function(){  


    $("#rabit").draggable();
    $("#Bhole").droppable({
        drop: function(){
            $(this).animate({height:"+=100px"},500)
            $(this).animate({height:"-=100px"},500)
            $("#rabit").animate({opacity:"0%"},1000)
        }
    }); 


});