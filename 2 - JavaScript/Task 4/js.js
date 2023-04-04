// Prob1
function showClock() {
        alert("Clock Started");
        var time  = new Date();
        var timenow = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
        alert("The Time now is >> " + timenow);
}
///////////////////////////////////////////////////////////////////////////////
// Prob2
function NewWindow(){
        window.open("https://www.linkedin.com/feed/","blank");
}
///////////////////////////////////////////////////////////////////////////////
//Prob3
var mypage="https://www.amazon.eg/";
function openAd(){
        var mystring=" Hello Hellooooo ";
        var NewWindow= window.open(mypage,"blank"); 
        alert(mystring);
        NewWindow.document.write(mystring);   //////azay aktb 3la al opened ?!
}
function openAdAfter3Sec(){
        alert("Clicked,click ok wait 3 secs to be opened");
        var pag = window.setTimeout(openAd,3000);
}

function closeWin() {
        window.close(mypage); /////xxxxxxxxxxxxxxxxxxxx
}

///////////////////////////////////////////////////////////////////////////////
//Prob4
// function sayHI() {
//         if(window.scrollY>777)    alert("Hiiiii");
// }   
///////////////////////////////////////////////////////////////////////////////
//Prob5
        // do{
        // var userName= prompt("Enter Your Name: ");
        // var RegN=/^[a-zA-Z]{4,40}/;
        // }                                                    // Right !!!?!!
        // while(!RegN.test(userName))
        // alert("Success!, Valid Name ");

        // do{
        // var userEmail= prompt("Enter Your Email : ");
        // var RegE=/^[a-z0-9]{10,40}@[a-z]{4,10}.[a-z]{3,10}(.eg)/
        // }
        // while(!RegE.test(userEmail)) 
        // alert("Success!, Valid Email ");

        // alert("Done, Thank U ^_^ ");
///////////////////////////////////////////////////////////////////////////////
        