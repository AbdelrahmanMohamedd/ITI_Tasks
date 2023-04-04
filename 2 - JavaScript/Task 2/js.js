// //Prob1
//         let Temp = prompt("What is Today's Temperature? ");
//             if (Temp >= 30) {
//                 alert( Temp + " ! Today is HOT Wheather");
//             }
//             else if (Temp < 30){
//                 alert( Temp + " ! Today is COLD Wheather");
//             }
// alert("Next Prblem...");

// //Prob2
//         let Temprature = prompt("What is Today's Temperature? ");
//         let Actfeel =prompt("What is Your Actual feel? ");
//             if( (Temprature>25 && Actfeel>25) && (Temprature<30 && Actfeel<30) ) alert(" NORMAL ");
//             else if(Temprature<25 && Actfeel<25)                                 alert(" COLD ");
//             else if(Temprature>30 && Actfeel>30 )                                alert(" HOT ");
//             else  alert("Please retry enter a valid input ");
// alert("Next Prblem...");

// //Prob3
//         let StudFac = prompt("Hey Student! What is Faculty? ");
//             switch(StudFac){
//                 case "FCI":
//                         alert("You are eligible to Programing tracks");
//                     break;
//                 case "Engineering":
//                         alert("You are eligible to Network and Embedded tracks");
//                     break;
//                 case "Commerce":
//                         alert("You are eligible to ERP and Social media tracks");
//                     break;
//                 default:
//                         alert("You are eligible to SW fundamentals track");
//             }
// alert("Next Prblem...");

// //Prob4 
//         let par1 = prompt("Choose number to start from... ");
//         let par2 = prompt("Choose number to end with... ");
//             for (let i = par1 ; i<=par2 ; i++) {
//                 if (i%2!=0) alert(i);
//             }
//             alert("Those are The Odd numbers in the Range you entered :) ")
// alert("Next Prblem...");

//Prob5 
        do{
        var flag = false
        var username = prompt("What is Your Name? ");
        if(!isNaN(username)) flag=true;
        }
        while(flag)

        do{
        var flg = false;
        let userBY = Number(prompt("What is Your Birth Year? you must be +12 "));
                if (isNaN(userBY) || (userBY>2010)) flg=true;
        }
        while (flg); 
        alert("echooo");
                const today = new Date();               //mn awl hna msh btynfz leh >?
                const year = today.getFullYear();
                var userage = year-userBY;
                alert("Your Name: " + username ); 
                alert("Your Birth year: " + userBY);
                alert("Your Age: " + userage);
        

//Prob6
        // alert("Enter the 3 length of each side of your rectangle to check its Type...");
        // let x = prompt("fist side length = ")
        // let y = prompt("second side length = ")
        // let z = prompt("third side length = ")
        // if((x===y) && (y===z)) alert("This is a EQUILATERAL Triangle");
        // else if ((x===y) || (y===z) || (z===x))  alert("This is a ISOSCELES Triangle");
        // else     alert("This is a SCALENE Triangle");

//Prob7
        // var arr = [60,100,10,15,85,34,90,78];
        // arr.sort();
        // var highest = arr[arr.length - 1];
        // alert("The the highest student degree is >> " + highest);

        // for(let i=0 ; i<arr.length ; i++ )  { 
        //         if(arr[i]>60 &&  arr[i]<100)  alert( arr[i] );
        // }

//Bounas
        // alert("Ali baba Problem...");
        // alert("Enter 3 number and one more (4 numbers)");
        // alert("We will user 2 of (+,−,×) for 3 nums to get the fourth.." );
        // let a = Number(prompt("num 1 = "));
        // let b = Number(prompt("num 1 = "));
        // let c = Number(prompt("num 1 = "));
        // let d = Number(prompt("num 1 = "));

        // if      (a + b - c == d)  alert("YES >> " + a + "+" + b + "-" + c + "=" + d);
        // else if (a + b * c == d)  alert("YES >> " + a + "+" + b + "*" + c + "=" + d);
        // else if (a - b * c == d)  alert("YES >> " + a + "-" + b + "*" + c + "=" + d);
        // else if (a - b + c == d)  alert("YES >> " + a + "-" + b + "+" + c + "=" + d);
        // else if (a * b + c == d)  alert("YES >> " + a + "*" + b + "+" + c + "=" + d);
        // else if (a * b - c == d)  alert("YES >> " + a + "*" + b + "-" + c + "=" + d);
        // else alert(" NO ");
        