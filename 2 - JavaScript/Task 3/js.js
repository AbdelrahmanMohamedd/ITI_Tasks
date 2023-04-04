//Prob1
        // var contArr = ["EGY","UK","USA","KSA","FRC","SENG","MORC","TUNS","SPAIN","GRM"];
        // alert("Randomly selected contry from the 10 Contries... ");
        // var randomNum;
        // for (let i=0 ; i<contArr.length ; i++){
        //         randomNum= Math.floor(Math.random()*contArr.length);
        //         alert("Here is Contry number " + (i+1) + " > " + contArr[randomNum]);
        // }

//Prob2
        // const date = new Date();
        // alert(date);

//Prob3
        // var flag=true;
        // do {
        // var Email = prompt("Enter your Email Please: ");
        // if (Email.includes("@")) flag=false;    //or use >> indexof()
        // }
        // while(flag);

//Prob4
        alert("Enter Your Birthdate");
        var Bdate = prompt("According to this format (DD–MM–YYYY) ex.22–01–1999 ");
        function input(Bdate){
                if( Bdate.length==10 && Bdate.includes("-",0) && Bdate.includes("-",5) ){   //it stops here ! 
                let day =  Bdate.substring(0,1);
                let month = Bdate.substring(3,4);
                let year = Bdate.substring(6,9);
                const datte = new Date(year,month,day);
                        alert("Here is the Date >>  " + datte);
                }
                else {
                        alert ("Wrong Date Format");
                }    
        }

//Prob5
        // var arrofObj= [
        //         {
        //         Name:"Abdelrahman",
        //         Degree:90
        //         },
        //         {
        //         Name:"Sayed",
        //         Degree:80
        //         },
        //         {
        //         Name:"Nasr",
        //         Degree:67
        //         },
        //         {
        //         Name:"Nasr",
        //         Degree:67
        //         },
        //         {
        //         Name:"Mohamed",
        //         Degree:98
        //         },
        //         {
        //         Name:"Bebo",
        //         Degree:94
        //         },
        //         {
        //         Name:"Ibrahim",
        //         Degree:45
        //         }
        // ];
        // alert ("students who got between 90 and 100 marks...")
        // for (let i=0 ; i<arrofObj.length ; i++){
        //         if(arrofObj[i].Degree>=90 && arrofObj[i].Degree<=100 ){
        //                 alert(arrofObj[i].Name +" Got degree " + arrofObj[i].Degree);
        //         }
        // }
        // arrofObj.push({
        //         Name:"abdooo ",
        //         Degree:86
        //         });
        // alert("The last added element: " + arrofObj[arrofObj.length-1].Name +arrofObj[arrofObj.length-1].Degree);
        // arrofObj.pop();
        // alert("The last element afer poping: " + arrofObj[arrofObj.length-1].Name +arrofObj[arrofObj.length-1].Degree);

        // alert("Printing the array objects...")
        // for(let i=0 ; i<arrofObj.length ; i++){
        //         alert(arrofObj[i].Name + " " + arrofObj[i].Degree);
        // }



