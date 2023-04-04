//Prob1

function AddToken() {
        var NametoAdd=document.getElementById("userNam");
        var PassWtoAdd=document.getElementById("UserPassW");
        localStorage.setItem("UserNAme",NametoAdd.value);
        localStorage.setItem("PassWtoAdd",PassWtoAdd.value);
        
}

function RemoveToken() {
        var NametoAdd=document.getElementById("userNam");
        var PassWtoAdd=document.getElementById("UserPassW");
        localStorage.removeItem("NametoAdd");
        localStorage.removeItem("PassWtoAdd");
        
}