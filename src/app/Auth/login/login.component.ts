import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { routes } from '../../app.routes';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterOutlet,RouterLink,RegisterComponent,DashboardComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  savedemail:String="";

  constructor(private fb: FormBuilder,private router:Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
  
      const storedata = JSON.parse(localStorage.getItem('userdata') || '{}');

      if(loginData.email == storedata.email && loginData.password == storedata.password){
        alert('login sucessfull');
        this.router.navigate(['/dashboard'])
      }else{
        alert('please register first')
      }

    }
  }
}

