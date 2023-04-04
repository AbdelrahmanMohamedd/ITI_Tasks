//B.1                   //#DONE
function reverse_1() {     
    var myArr=[];
    console.log(myArr.reverse.call(arguments));
}
function reverse_2() {
    var myArr=[];
    console.log(myArr.reverse.bind(arguments)());
}
///////////////////////////////////////////////////////////////////////////////////
//B.2
function exeptionThrower(x,y) {      //#DONE
    if(arguments.length>2 || arguments.length<2){
        throw(" Parameter passed to the function are not 2 parameter they meybe less or more");
    }
    else console.log(" >> 2 Parameters passed  ");
}
///////////////////////////////////////////////////////////////////////////////////
//B.3                                 //#DONE 
function adding (){
    var summation=0;
    for(var i=0 ; i<arguments.length ; i++){
        if ((typeof arguments[i] !='number') || arguments.length==0 ){ 
            throw("Thrown exeptionfrom >> user didnt pass any number or didnt pass argus");
        }
        else summation+=arguments[i];
    } return summation;
}
///////////////////////////////////////////////////////////////////////////////////
//B.4            
            // >> cookie Library Updated > check it 



