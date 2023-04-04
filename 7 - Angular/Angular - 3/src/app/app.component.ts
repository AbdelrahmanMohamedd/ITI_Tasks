import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AbdelrahmanMohamed_D2_Angular';


  DatafromStudForms:any
  getData(data:any){
    this.DatafromStudForms = data;
    // console.log(this.DatafromStudForms);
  }

  




  
}
