import { Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path :'',redirectTo :'/login',pathMatch:'full'},
    {path:'login', component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'dashboard', component:DashboardComponent}
];
