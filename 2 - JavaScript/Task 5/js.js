/////////////////////////////////////////Prob1//////////////////////////////////////////////
        // var TheDivID = document.getElementById("DivID");
        // var TheDivName = document.getElementsByName("ItsDiv");
        // var TheDivClass = document.getElementsByClassName("MyDiv");
        // var DivByTag = document.getElementsByTagName("div");   // it works only if we have this only div >> otherwise it will applied on all
        // var DivByQuery = document.querySelector("#Container>div")
/////////////////////////////////////////Prob2//////////////////////////////////////////////
function ChangePic(JetImg) { ///------- mouse over! 
        JetImg.height+=50;
}
function RestoreImg(JetImg){ ///-------- mouse leave! 
        JetImg.height-=50;
}
//////////////////////////////////////////////Prob3////////////////////////////////////////////////////
function BtnClicked(){
        var CurrDiv=document.getElementById("BTN");
        var NewDiv= document.createElement("div");
        NewDiv.innerHTML="<h2>Hi Im New Child :)</h2>";
        NewDiv.innerHTML+="<img src='skye.jpg' height='300px'></img>";
        CurrDiv.appendChild(NewDiv);
}
//////////////////////////////////////////////Prob4/////////////////////////////////////////////////////////
function TxTinptfocusEvnt(ImHere){
        ImHere.style.border="solid 5px red";
}

function TxTinptBlurEvnt(ImHere){
        ImHere.style.border="solid 5px black";   // how to return it normal ! 
}

function DisplayData() {
        var CurrDiv=document.getElementById("area");
        var newdiv=document.createElement("div");
        var theForm = document.getElementById("myForm");
        newdiv.innerHTML+="<h4>Full name : </h4>" + theForm[0].value;
        newdiv.innerHTML+="<h4>Email : </h4>" + theForm[1].value;
        newdiv.innerHTML+="<h4>City : </h4>" + theForm[2].value;
        newdiv.innerHTML+="<h4>Password : </h4>" + theForm[3].value;
        CurrDiv.appendChild(newdiv);
}
//////////////////////////////////////////////Prob5/////////////////////////////////////////////////////////
        var images = [];
        images[0]='Mosalah.jfif';
        images[1]='CR7.jpg';
        images[2]='Messi.jfif';
        images[3]='Benzema.jpg';
        var i = 1;
        var j = 1;
        var Time = 1000;

function NextImg() {
        var imgSlide=document.getElementById("SlideShow");
        if ( i<4 ){
                imgSlide.src=images[i]; 
                i++;
        }
        if(i==4) i=0;
        
}
function PrevImg() {
        var imgSlide=document.getElementById("SlideShow");
                imgSlide.src=images[i]; 
                i--
                if (i<0)i=3;
}
function AllImg() {     //one each Second 
        var imgSlide=document.getElementById("SlideShow");
                imgSlide.src=images[j]; 
        if ( j<4 ){
                imgSlide.src=images[j]; 
                j++;
        }
        if(j==4) j=0;
        setTimeout(AllImg,Time);
}

function StopImg() { 
        Time=1000000000000000000;
}



