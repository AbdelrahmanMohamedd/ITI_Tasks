$(function () { 

/// ABOUT
    $("#DisplayDiv").hide();
    $("#AboutBTN").click(function() { 
        $("#DisplayDiv").toggle();
    });


/// GALLARY
    var images= [];
        images[0]='imgs/1.jpg';
        images[1]='imgs/2.jpg';
        images[2]='imgs/3.jpg';
        images[3]='imgs/4.jpg';
        images[4]='imgs/5.jpg';
        images[5]='imgs/6.jpg';
        images[6]='imgs/7.jpg';
        images[7]='imgs/8.jpg';
        var i = 1;
    $("#GallaryDIV").hide();
    $("#GallaryBTN").click(function() { 
        $("#GallaryDIV").toggle();
            $("#Rightimg").click(function(){
                if(i<=8) {
                    $("#View").attr("src",images[i]);
                    i++;
                }
                if(i>=8) i=0;
            })
            $("#Leftimg").click(function(){
                if(i>=0){
                    $("#View").attr("src",images[i]);
                    i--;
                }
                if(i<=0) i=8;
            })
    });


/// SERVICE
    $(".toggled").hide();
    $("#ServicesBTN").click(function() { 
        $(".toggled").slideToggle();
    });


/// COMPLIAN
    $("#ComplainDIV").hide();
    $("#ComplainDIVresult").hide();
    
    $("#ComplainBTN").click(function() { 
        $("#ComplainDIV").toggle();
    });

        $("#ComplainSubmit").click(function(){
            
            var name =  $("#NmInpt").val();
            var email =  $("#EmailInpt").val();           
            var phone = $("#PhnInpt").val();
            var complain = $("#CompInpt").val();
            
            if(name!="" && email!="" && phone!="" && complain!=""){
                $("#ComplainDIV").toggle();  $("#ComplainDIVresult").toggle();

                $("#ComplainDIVresultdata").append("<lable class='lables' >Your Name is   </lable>"
                +"<lable class='res' >" + name  + "</lable><br><br>"); 
                $("#ComplainDIVresultdata").append("<lable class='lables' >Your Email is  </lable> " 
                +"<lable class='res' >" + email + "</lable><br><br>");
                $("#ComplainDIVresultdata").append("<lable class='lables' >Your Phone is  </lable> " 
                +"<lable class='res' >" + phone + "</lable><br><br>");
                $("#ComplainDIVresultdata").append("<lable class='lables' >Your Complain is  </lable>" 
                +"<lable class='res' >" + complain + "</lable><br><br>");
            }
            else {
                alert("something is empty");
            }
        })

    
    $("#ComplainBACK").click(function() { 
        $("#ComplainDIV").toggle();  $("#ComplainDIVresult").toggle();
        $("#ComplainDIVresultdata").empty();
    })













});





