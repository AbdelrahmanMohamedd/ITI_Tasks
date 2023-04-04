///////////////////////////////////////////// Prob 1 //////////////////////////////////////////
var x = 100;
var y = 200;
var arr = [x,y];

console.log (`Before Swaping: X= ${x} `);
console.log (`Before Swaping: Y= ${y} `);

[x,y]=[y,x];  

console.log (`>> After Swaping: X=  ${x} `);
console.log (`>> After Swaping: Y=  ${y} `);
console.log("///////////////////////////////")
///////////////////////////////////////////// Prob 2 //////////////////////////////////////////
function MinMax(...arr) {
    let NewArr=[] = arr;   //Dextructuring
    console.log(` Min Value in Array >>   ${Math.min(...NewArr)}`);  //min
    console.log(` Max Value in Array >>   ${Math.max(...NewArr)}`);  //max   
}
var myarr=[11,21,5,6,9];
MinMax(...myarr);
console.log("///////////////////////////////")
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////// Prob 3 //////////////////////////////////////////
var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

//a
const isStr = fruits.every((item) => {
    if ( typeof item == "string") console.log(item); return item;
})
console.log(isStr);


//b
const beginA = fruits.some((item) => {
    if (item.startsWith("a")) /* console.log(item); */     return item;
})
console.log(beginA);


//c 
const beginBorS = fruits.filter((item)=> { 
    if (item.startsWith("b") || item.startsWith("s") )  /*console.log(item);*/     return item;
});
console.log(beginBorS);


//d
const IlikeX = fruits.map((item)=>{
    return(`I like ${item}`);
})


//e
IlikeX.forEach((item)=>{
    console.log(item);
})

