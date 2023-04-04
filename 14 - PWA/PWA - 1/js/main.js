let Promptt ;

window.addEventListener("beforeinstallprompt", (e) => {
    if (!Promptt)   Promptt = e;
    else throw ("This App is Downloaded before");
});

document.getElementById('InstallBtn').addEventListener('click' , ()=>{
    if (Promptt !== undefined) {
        Promptt.prompt();
        Promptt = undefined ; 
    }
    else {
        alert("You already have shortcut")
    }
});


