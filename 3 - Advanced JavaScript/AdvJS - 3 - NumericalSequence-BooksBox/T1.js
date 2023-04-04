function Numerical_Sequence(start, end, step){

    var arr=[];

    Object.defineProperty(this, "start",{value:start, writable:false,configurable:false,enumerable:false})
    Object.defineProperty(this, "end",{value:end, writable:false,configurable:false,enumerable:false});
    Object.defineProperty(this, "step",{value:step, writable:false,configurable:false,  enumerable:false});

    var insertion=function(){
        for(i=start; i<=end; i+=step){
            arr.push(i)
        }
    }.bind(this)
    insertion();

    this.toString=function(){
        var array=""
        for(var i=0; i<arr.length;i++){
            array=  array + "" + arr[i] + ","
        }
        console.log(array);
    }

    this.push=function(value){
        if(arr.length!=0){
        if(arr[arr.length-1]>value || arr[arr.length-1]==value ) throw("Error, Wrong input")
        }
        arr.push(value);
    }

    this.pop=function(){
        arr.pop()
    }

    this.enqueue=function(value){
        if(value==arr[0]) throw("Dublicates are NOT Allowed")
        if(arr.length!=0){
        if(arr[0]<value) throw("Error, sequential Values only allowed to be pushed ")
        }
        arr.unshift(value)
    }
    this.dequeue=function(){
        arr.shift();
    }

}