$(function(){

var XHR = new XMLHttpRequest()
XHR.open("GET","rockbands.json");
XHR.onreadystatechange=function (){ 
    if(XHR.readyState==4 && XHR.status==200) {
        var dataObj=JSON.parse(XHR.responseText)
        // console.log(dataObj)

        
        $.each(dataObj, function (band) {
            $("#bands").append($("<option value='none' selected disabled hidden>Please Select</option> "))
            $("#bands").append($("<option value=" + band + ">"+ band +"</option>"))
        });

        $("#bands").change(function () {
            $("#artists option").remove();

            $.each(dataObj[$("#bands").val()], function (index,value) {
                $("#artists").append($("<option value='none' selected disabled hidden>Please Select</option>"))
                $("#artists").append($("<option value=" + value.value + ">"+ value.name + "</option>"))  
            });
        });

        $('#artists').change( function() {
            var newWindow = window.open("", "","height=500,width=700");
            newWindow.location.assign($("#artists").find(":selected").val())
        });
    }
};
XHR.send("");
});


