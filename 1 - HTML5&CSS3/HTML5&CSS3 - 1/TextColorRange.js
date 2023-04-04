var RedColor = document.getElementById("R");
var GreenColor = document.getElementById("G");
var BlueColor = document.getElementById("B");

var myText = document.getElementById("myText");

console.log(myText.innerHTML)
console.log("                     R,G,B")


RedColor.oninput=function(){ 
    myText.style.color="rgb(" +RedColor.value+ "," +GreenColor.value+ "," +BlueColor.value+ ")";
}
GreenColor.oninput=function(){
    myText.style.color= "rgb(" +RedColor.value+ "," +GreenColor.value+ "," +BlueColor.value+ ")";
}
BlueColor.oninput=function(){
    myText.style.color= "rgb(" +RedColor.value+ "," +GreenColor.value+ "," +BlueColor.value+ ")";
}


RedColor.onclick=function(){ 
    console.log("Red   Updated, RGB>> " + RedColor.value + "," + GreenColor.value + "," + BlueColor.value );
}
GreenColor.onclick=function(){
    console.log("Green Updated, RGB>> "+ RedColor.value + "," + GreenColor.value + "," + BlueColor.value );
}
BlueColor.onclick=function(){
    console.log("Blue  Updated, RGB>> " + RedColor.value + "," + GreenColor.value + "," + BlueColor.value );
}
