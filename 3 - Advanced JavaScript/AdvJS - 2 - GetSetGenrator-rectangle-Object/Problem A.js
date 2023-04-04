aboGentrator = {
    id:"SD-10",
    location:"SV", 
    addr:"123 st.", 
    getSetGen:function(){

        var propNames = Object.keys(this);

        for (const prop in this){   //prop is string having this(caller) obj names(keys)

            if (typeof (this[prop]) !=='function'){      //  avoid caller's funcs   

                var propName=String(prop); 
                var CapStart=propName.charAt(0).toUpperCase() + propName.slice(1);
                var setX= "set"+CapStart; 
                var getX= "get"+CapStart;     //just Capitalizing the First Char of the Property in funcNames

                // if(propNames.includes(setX) |propNames.includes(getX) ) throw( "\nThis Object is called before and had its Setters & Getters");

// genrate setters
                Object.defineProperty(this,setX,{value:function(x){
                    for ( var i=0 ; i<propNames.length ; i++){ 
                        if (prop == propNames[i] ){
                            this[prop] = x;
                            console.log(prop + " has been set ");
                        }
                    } 
                }});

// genrate getters
                Object.defineProperty(this,getX,{value:function(){
                    for ( var i=0 ; i<propNames.length ; i++){ 
                        if (prop == propNames[i] )
                            return (prop + ": " + this[prop]) ;
                    } 
                }});
            }
        }
    }
}



me = {
    name:"Abdo",
    age:23,
    address:"Giza",
    test: function(){
        console.log("ana func me")
    }
}

aboGentrator.getSetGen.call(me);