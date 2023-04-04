////////////////////////////////  Prob 2 ////////////////////////////////////////////////
Objectt={
    Name:"Abdo",
    Age:"23",
    Adress:"Cairo"   
}

handler={
    set(target,prop,value){
        if(target[prop].length===7 && prop=="Name"){
            target[prop]=value;
        }
        else if(typeof value == 'string'  && prop=="Adress"){
            target[prop]=value;
        }
        else if ( value>25 && value<60  && prop=="Age" ){
            target[prop]=value;
        }
        else console.log("Not valid input")
    }
}



var myProxy= new Proxy(Objectt,handler)
myProxy.Name="hey";
console.log(myProxy.Name);  