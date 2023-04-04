class Flight_Ticket{
    Tickets=[]

    createTicket(IDnum,seatNum,flightNum,departureAirport,arrivalAirport,travelingDate){
        this.Tickets.push({
            ID:IDnum,
            Seat:seatNum,
            Flight:flightNum,
            Departure:departureAirport,
            Arrival:arrivalAirport,
            Date:travelingDate
            })
    }
    
    
    display_Tickets(){
        for (let i=0 ; i<this.Tickets.length ; i++){
            console.log(" \n%%%%%%%% TICKET-INFO %%%%%%%%");
            console.log(`Ticket ID >> ${this.Tickets[i].ID}`);
            console.log(`Seat Number >> ${this.Tickets[i].Seat}`);
            console.log(`Flight Number >> ${this.Tickets[i].Flight}`);
            console.log(`Departure Airport >> ${this.Tickets[i].Departure}`);
            console.log(`Arrival Airport >> ${this.Tickets[i].Arrival}`);
            console.log(`Traveling Date >> ${this.Tickets[i].Date}`);
        }
    }

    get_Ticket(ID){
        for (let i=0 ; i<this.Tickets.length ; i++){
            if (ID==this.Tickets[i].ID){
                console.log("Here is the Reuested Ticket");
                console.log(this.Tickets[i]);
            } 
        }
    }
    
    update_Ticket(id,tobeUpdated,value){
        for (let i=0 ; i<this.Tickets.length ; i++){
            if (id==this.Tickets[i].ID){
                for (const attr in this.Tickets[i]){
                    if (attr == tobeUpdated){
                        this.Tickets['tobeUpdated']=value;
                        console.log(this.Tickets[i]);
                    }
                }
            }
        }
    }
}

module.exports = {Flight_Ticket}



