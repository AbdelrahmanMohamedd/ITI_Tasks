// Problem A.1

var linkedList = {
    data:[ {val:3},{val:5},{val:6},{val:9},{val:14}],
    
    pushVal:function(VALpushed){                           //#DONE
        if (this.data.length==0){   
            this.data.push({"val":VALpushed});
            console.log(this.data);
        }
        else if(this.data[this.data.length-1].val<VALpushed){
            this.data.push({"val":VALpushed}); 
            console.log(this.data);
        }
        else if (this.data[this.data.length-1].val==VALpushed){
            throw(" Duplication is not allowed, the Pushed val is already existed");
            console.log(this.data);
        }
        else{
            console.log(this.data);
            throw( " >> Error : The Value that you entered is less than the last Element, SO Cant be Pushed .  ");
        }
    },
//////////////////////////////////////////////////////
    popVal:function () {                                   //#DONE
        this.data.pop();
        console.log(this.data);
    },
////////////////////////////////////////////////////  
    insertVal:function (Valinserted) {                      //#DONE
        if (this.data.length==0 || this.data[this.data.length-1].val < Valinserted){ 
            this.data.push({"val":Valinserted}); //if data is empty >> first elemnt to insert
            console.log(this.data);
        }
        else if (this.data[0].val > Valinserted){  //insert at the start
            this.data.unshift({"val":Valinserted});
            console.log(this.data);
        }
        else if (this.data.length!=0 ){    //loop if indx in range
            var insertIsDN=false;
            for (var i=0 ; i<this.data.length ; i++){
                if (this.data[i].val==Valinserted && !insertIsDN)  throw(" Duplication is not allowed"); 
                else if ( Valinserted > this.data[i].val &&  Valinserted < this.data[i+1].val ){   
                this.data.splice(i+1,0,{"val":Valinserted});     
                insertIsDN=true;
                }
            }
            console.log(this.data);
        }   
        else {
            console.log(this.data);
            throw(" >> the value is smaller than all values in data array <OR> the index is no in range ");
        }
        
    },
// ////////////////////////////////////////////////////
    removeVal:function (valremove,onindx) {              //#DONE
        var notFound=true;
        if (onindx>this.data.length || onindx<0 ){ 
            throw(" >> This index not in Range (the data array length is less than " + onindx + " ) ");
        }
        else if (this.data[0].val==valremove  &&  onindx==0 ){   // if first element
            this.data.shift();
            console.log(this.data);
        }
        else if (this.data[this.data.length-1].val==valremove && this.data.length==onindx){     //if last element
            this.data.pop();
            console.log(this.data);;
        }
        else if (onindx>=0 && onindx<this.data.length){
            for(var i=0 ; i<this.data.length ; i++ ){
                if(this.data[i].val==valremove){
                    this.data.splice(onindx,1);   ///hyremove 1 mn onindx
                    notFound=false; //found
                }
            }
        }
        if(notFound) {
            console.log("data not found"); 
        }
        console.log(this.data);
    },
// ////////////////////////////////////////////////////
    enqueueVal:function(Valenqueue){                     //#DONE 
        if (this.data[0].val!=Valenqueue && this.data[0].val>Valenqueue){
            this.data.unshift({"val":Valenqueue});
        }     
        else if (this.data[0].val==Valenqueue){
            throw("  >> the Pushed val already existed in data array ");
        }          
        else if (this.data[0].val<Valenqueue){
            throw("  >> not accepted, data Arrangment is Ascendingly kept");

        }
        console.log(this.data);         
    }, 
// ////////////////////////////////////////////////////
    dequeueVal:function () {                             //#DONE  
        this.data.shift();
        console.log(this.data);
    },
// ////////////////////////////////////////////////////
    displayContent:function () {                         //#DONE
        for (var i=0 ; i<this.data.length ; i++){
            console.log(" Object " + i + "'s val="  + this.data[i].val);
        }
    }
}
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////




// ////////////Old insert////////////////////////////////////////////////////////////////////////////////

// insertVal:function (Valinserted,atindx) {
//     if (atindx<0 || atindx>this.data.length ){ 
//         throw(" >> This index not found (the data array length is less than " + atindx + "  ) ");
//     }
//     else if ((this.data.length==0) || (this.data[this.data.length-1].val<Valinserted && this.data.length==atindx) ){ 
//         this.data.push({"val":Valinserted}); //if data is empty (regardeless el indx)    OR     ///if last elemnt 
//         console.log(this.data);;
//     }
//     else if (this.data[0].val>Valinserted  &&  atindx==0  ) { ///if first elmnt
//         this.data.unshift({"val":Valinserted});
//         console.log(this.data);
//     }
//     else if (atindx>0 && atindx<this.data.length ){    //loop if indx in range
//         for (var i=0 ; i<this.data.length ; i++){
//             if (this.data[i].val==Valinserted)  throw(" Duplication is not allowed");
//             else if ( Valinserted > this.data[i].val  &&  this.data[i+1].val > Valinserted){   // 
//                 this.data.splice(i+1,0,{"val":Valinserted});      
//             }
//         }
//         console.log(this.data);
//     }   
//     else {
//         console.log(this.data);
//         throw(" >> the value is smaller than all values in data array <OR>the index is no in range ");
//     }
    
// },