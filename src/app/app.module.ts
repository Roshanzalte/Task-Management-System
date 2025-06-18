import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './Auth/login/login.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,       // Declare the AppComponent
    LoginComponent      // Declare the LoginComponent here
  ],
  imports: [
    BrowserModule,  // Import the BrowserModule (needed to run the app in the browser)
    FormsModule,FormGroup,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]  // Bootstrap the AppComponent
})
export class AppModule { }
