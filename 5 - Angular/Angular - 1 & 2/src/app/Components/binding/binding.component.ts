import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {

  Message="";


CpyMsg(e:any){ 
    this.Message = e.target.value;
}

Reset(){
  this.Message="";
}

}
