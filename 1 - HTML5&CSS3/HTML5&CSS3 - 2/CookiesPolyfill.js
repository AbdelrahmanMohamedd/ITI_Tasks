if(!window.localStorage) {

    (function(){

    Cookies = {}
        
        Object.defineProperty(Cookies, 'getCookie', {
            value: function(cookieName) {
                if( arguments.length==1 && typeof arguments=='object'){
                    var ArrofCookies=document.cookie.split(";");
                    for(let i=0; i<ArrofCookies.length ; i++){
                        if (ArrofCookies[i].trim().startsWith(cookieName,0)) return decodeURIComponent(ArrofCookies[i].trim()); 
                    }       //  >> keep it without else to keep hasCookie() func working!
                }
                else {
                    throw (" \n" + "Not Valid Paratmeter, This function accepts 1 Parameter only ");
                }
            }
        })

        Object.defineProperty(Cookies , 'setCookie', {
            value: function(cookieName,cookieValue,Xmonths) {
                if( arguments.length==3 && typeof arguments=='object'){
                    var date= new Date();
                    var currMonth= date.getMonth();
                    var Expiration = currMonth + Xmonths ;
                    date.setMonth(Expiration);
                    var myCookie= cookieName + "=" + encodeURIComponent(cookieValue) + "; expires= " + date.toUTCString();
                    return document.cookie=myCookie;
                }
                else {
                    throw (" \n" + "Not Valid Paratmeter, This function accepts 3 Parameter Neither more nor less ");
                }  
            }
        })

        Object.defineProperty(Cookies , 'deleteCookie', {
            value: function(cookieName) {
                if( arguments.length==1 && typeof arguments=='object') return document.cookie =  cookieName + "=; max-age=0";
            else throw (" \n" + "Not Valid Paratmeter, This function accepts 1 Parameter Neither more nor less ");  
                
            }
        })

        Object.defineProperty(Cookies , 'ListCookies', {
            value: function() {
                if( arguments.length==0){
                    var cookiesList = document.cookie.split(";");
                    var cokyList ="";
                    for (let i=0 ; i<cookiesList.length ; i++){
                        cokyList = cokyList + "  |  " + (i+1) + " > " + cookiesList[i] ;
                    }
                    return cokyList ; 
                }
                else{
                    throw (" \n" + "Not Valid Paratmeter, This Function Doesn't Take any Arguments ");  
                }
            }
        })

        Object.defineProperty(Cookies , 'hasCookie', {
            value: function(cookieName) {
                if( arguments.length==1 && typeof arguments=='object'){
                    var isexist = getCookie(cookieName);          
                    if (isexist) {
                        console.log(isexist)
                        console.log("The Cookie with Name ( "+cookieName+" ) Is Existed");
                    }
                    else if(!isexist)  console.log("This Cookie Doesn't Exist!");
                }
                else {
                    throw (" \n" + "Not Valid Paratmeter, This function accepts 1 Parameter only ");
                }
            }
        })
        window.Cookies;
    })()
}
