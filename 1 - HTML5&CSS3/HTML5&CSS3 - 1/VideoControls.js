var FrozenVid = document.getElementById("myVid"); 
var vidLine = document.getElementById("vidTimeLine");
var vidcurrTime = document.getElementById("VcurrTime");
var vidtotalTime = document.getElementById("VtotalTime");

var vidVolume = document.getElementById("vidVol");
var vidSpeed = document.getElementById("vidSpeed");

var ply_Btn = document.getElementById("ply");
var stp_Btn = document.getElementById("stp");

var LL_Btn = document.getElementById("LL");
var L_Btn = document.getElementById("L");
var R_Btn = document.getElementById("R");
var RR_Btn = document.getElementById("RR");

var Mute_Btn = document.getElementById("Mute");


// play & puase  btn
ply_Btn.onclick=  function () {     //   puase
    if(ply_Btn.value=="Play"){
        console.log("Playing");
        ply_Btn.value="Pause";
        FrozenVid.play();
    }
    else if (ply_Btn.value=="Pause" ){ // play  
        console.log("Paused");
        ply_Btn.value="Play";
        FrozenVid.pause();
    }
}

stp_Btn.onclick = function(){    // stop
    console.log("Stopped");
    if (ply_Btn.value=="Pause") ply_Btn.value="Play";
    FrozenVid.pause();  //load func also makes this
    FrozenVid.currentTime=00;
}

LL_Btn.onclick = function(){       // back 3 seconds
    if(FrozenVid.currentTime>0){
        FrozenVid.currentTime-=3;
        console.log(" 3 seconds to the back");
    }
    else console.log("The Video on its start")
}

L_Btn.onclick = function(){         ///goto start
    console.log("The video at the Start");
    FrozenVid.currentTime=0;
}

R_Btn.onclick = function(){              ///goto end
    console.log("The video at the End");
    FrozenVid.currentTime=FrozenVid.duration;
}

RR_Btn.onclick = function(){             ///skip 3 seconds
    if(FrozenVid.currentTime<FrozenVid.duration){
    console.log(" 3 seconds skipped");
    FrozenVid.currentTime+=3;
    }
    else console.log("The video is at its End")
}

Mute_Btn.onclick = function(){  /// Mute unmute 

    if(!FrozenVid.muted){
        FrozenVid.muted=true;
        console.log("Muted");
        Mute_Btn.value="Unmute";
    }
    else if (FrozenVid.muted){
        FrozenVid.muted=false;
        console.log("UnMuted");
        Mute_Btn.value="Mute";
    }
}

//Volume   
vidVolume.oninput = function () { 
    FrozenVid.volume=vidVolume.value;
    console.log("Volume >>  " + vidVolume.value );
    if(vidVolume.value==0) console.log("Muted, raiseup volume to Ummute");;
}

// VideoSpeed
vidSpeed.oninput = function () { 
    FrozenVid.playbackRate=vidSpeed.value;
    console.log("Current speed >>  " + vidSpeed.value);
}

// VideoTimeLine 
vidLine.oninput = function () { 
    if(ply_Btn.value=="Pause"){// the video is Playing at the moment
        FrozenVid.currentTime=vidLine.value;
        FrozenVid.play();
    }
    else if (ply_Btn.value=="Play" ){  // the video is paused 
        FrozenVid.currentTime=vidLine.value;
        FrozenVid.pause();
    }
}

//shows video current duration on the time line + change of the current time lable
var CompletedMinutes=0;
var seconds=0;
FrozenVid.addEventListener("timeupdate" , function(){
    vidLine.value=Math.floor(FrozenVid.currentTime);
    seconds=Math.floor(FrozenVid.currentTime);
    CompletedMinutes=Math.floor(seconds/60);
    vidcurrTime.innerHTML= CompletedMinutes + ":" + (seconds%60) ;
    console.log(seconds);
});

//shows video total duration
var mins=0
var secs=0;
    FrozenVid.onloadeddata = function(){
    vidLine.value=0;
    vidLine.max= Math.floor(FrozenVid.duration);   //making the TimeLine inputRange bar Equal to the real VidTimeLine bar in movment and fitting it 
    mins=FrozenVid.duration/60; 
    secs=Math.floor(FrozenVid.duration);
    vidtotalTime.innerHTML=Math.floor(mins) + ":" + secs%60;
}