////////////////////////////////  Prob 3 ///////////////////////////////////////////////
function service() { 
    const url = "https://jsonplaceholder.typicode.com/users";
    var myPromise= new Promise(function (resolve,reject) { 
        var xhr = new XMLHttpRequest();
            xhr.open('GET',url)
            xhr.onreadystatechange=function(){
                if(xhr.readystate==4){
                    if(xhr.status==200) resolve(xhr.responseve)
                    else reject("Erorr")
                }
            }
        xhr.send('')
        })
    myPromise.then((mydata) => {var result = JSON.parse(mydata); console.log(result); }).catch((mydata) => {console.log(mydata)})
}


