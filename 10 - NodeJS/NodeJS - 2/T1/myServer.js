var FlightTicket = require("./FlightTicket_Module.js");


var User_1 = new FlightTicket.Flight_Ticket();
var Date_1 = new Date().toUTCString();

var User_2 = new FlightTicket.Flight_Ticket();
var Date_2 = new Date().toUTCString();

var User_3 = new FlightTicket.Flight_Ticket();
var Date_3 = new Date().toUTCString();



User_1.createTicket(111,10,939,"Berlin","Cairo",Date_1)
User_1.createTicket(222,20,434,"NewYork","Paris",Date_1)
User_1.createTicket(333,30,223,"Gadda","Dubai",Date_1)

User_2.createTicket(444,40,121,"London","Denver",Date_2)
User_2.createTicket(555,50,673,"Moskow","Ankara",Date_2)
User_2.createTicket(666,60,215,"Qatar","Aswan",Date_2)

User_3.createTicket(777,70,557,"Sohag","Alex",Date_3)
User_3.createTicket(888,80,733,"Trablos","SharmElShiekh",Date_3)
User_3.createTicket(999,90,569,"Texas","Amesterdam",Date_3)


User_1.get_Ticket(222);
User_1.display_Tickets();
User_1.update_Ticket(333,"Flight",990)

console.log("##############################################################################################");

User_2.get_Ticket(666);
User_2.display_Tickets();
User_2.update_Ticket(444,"Departure","Hurgada")

console.log("##############################################################################################");

User_3.get_Ticket(999);
User_3.display_Tickets();
User_3.update_Ticket(888,"Arrival","Tokyo")

console.log("##############################################################################################");



