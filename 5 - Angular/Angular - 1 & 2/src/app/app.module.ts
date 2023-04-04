import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhotoComponent } from './Components/Photo/photo.component';
import { MyFormComponent } from './Components/my-form/my-form.component';
import { BindingComponent } from './Components/binding/binding.component';
import { SlideShowComponent } from './Components/slide-show/slide-show.component';
import { CustomPipe } from './Components/custom.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PhotoComponent,
    MyFormComponent,
    BindingComponent,
    SlideShowComponent,
    CustomPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,PhotoComponent]
})
export class AppModule { }
