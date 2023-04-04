/////////////////////////////////////  Prob 1 ///////////////////////////////////////////////////////////////////////////////////
function CourseInfo_Genrator(courseInfo={}) {               /*courseName,courseDuration,courseOwner*/
    for ( prop in courseInfo){
        if ( prop!="courseName" && prop!="courseDuration" && prop!="courseOwner")
        throw ( "The passed object has at least 1 property other than it should be !");
    }
    let defultObj={
        courseName:"ES6",
        courseDuration:"3days",
        courseOwner:"JavaScript"
        }
    var NormalObj= Object.assign({},defultObj,courseInfo)
    console.log(`Course Name ${NormalObj.courseName}`)
    console.log(`Course Duration ${NormalObj.courseDuration}`)
    console.log(`Course Owner ${NormalObj.courseOwner}`)    
}

obj={
    courseName:"Abdelrahman",
    courseDuration:"202222",
    // courseOwner:"hihi"
}

// if( Object.keys(courseInfo).length==0 || courseInfo.hasOwnProperty('courseName') || courseInfo.hasOwnProperty('courseDuration') || 
// courseInfo.hasOwnProperty('courseOwner') &&  Object.keys(courseInfo).length<3 )
// "courseName" in courseInfo
// var ObjKeys = Object.keys(courseInfo)
/////////////////////////////////////  Prob 2 ///////////////////////////////////////////////////////////////////////////////////
var arr=[0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393];

function* FibonanciGenrator__1(x){   // display x nums from FibSerise 
    var i=0;
    console.log( x + " nums from FibSerise")
    while(i<x){
        console.log(arr[i])
        i++
        yield x;
    }
} 
///////////////
function* FibonanciGenrator__2(x){   // display nums less than x from FibSerise 
    var j=0;
    console.log( "display nums less than " + x + " from FibSerise")
    while(arr[j]<x){
        console.log(arr[j])
        j++;
        yield x;
    }
} 

const Genrate_X_FibSeries = FibonanciGenrator__1(10);
const Genrate_FibSeries_lessthanX = FibonanciGenrator__2(10);

Genrate_X_FibSeries.next(); //repeat this line 
Genrate_X_FibSeries.next();
Genrate_X_FibSeries.next();
Genrate_X_FibSeries.next();
Genrate_X_FibSeries.next();
Genrate_X_FibSeries.next();
Genrate_X_FibSeries.next();
Genrate_X_FibSeries.next();
Genrate_X_FibSeries.next();
Genrate_X_FibSeries.next();

Genrate_FibSeries_lessthanX.next();  //repeat this line 
Genrate_FibSeries_lessthanX.next();
Genrate_FibSeries_lessthanX.next();
Genrate_FibSeries_lessthanX.next();
Genrate_FibSeries_lessthanX.next();
Genrate_FibSeries_lessthanX.next();
Genrate_FibSeries_lessthanX.next();
Genrate_FibSeries_lessthanX.next();
Genrate_FibSeries_lessthanX.next();
Genrate_FibSeries_lessthanX.next();
/////////////////////////////////////  Prob 3 ///////////////////////////////////////////////////////////////////////////////////
NameObj={
    name:"Abdelrahman",
    City:"Giza",
    Collage:"FCAI",
    [Symbol.replace](str){
        if(str.length<=15)     return str    //"###############..." (15X+...)
        else if(str.length>15) return str.substring(0,15).concat("...")    //"###############"    (15X)
        
    }
}

console.log('15 or less chars   >>  ' + 'Abdelrahman'.replace(NameObj))
console.log('More Than 15 chars >>  ' + 'AbdelrahmanMohamed'.replace(NameObj))
/////////////////////////////////////  Prob 4 ///////////////////////////////////////////////////////////////////////////////////
Objectt={
    name:"Abdo",
    Age:"23",
    FavColor:"Red",
    BYear:"1999",
    [Symbol.iterator]:function(){
        var cntr=0;
        var ObjecttKeys= Object.keys(Objectt);
        var KeysLength = ObjecttKeys.length;
        return {
            "next":function(){
                if(cntr==KeysLength)  return {property:undefined , value:undefined , done:true }
                else return { property:ObjecttKeys[cntr] , value:Objectt[ObjecttKeys[cntr++]] , done:false }
            }
        }
    }
}

myIterator=Objectt[Symbol.iterator]();














