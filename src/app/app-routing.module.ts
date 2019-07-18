import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CalcComponent } from './calc/calc.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { GraphComponent } from './graph/graph.component';
import { ForgotpwComponent } from './forgotpw/forgotpw.component';


//path: URL to map to | component: component that goes with URL
const routes: Routes = [
  {path: 'login', component : LoginComponent},
  {path: 'register', component : RegisterComponent},
  {path: 'welcome', component : WelcomeComponent},
  {path: 'update', component : UpdateUserComponent},
  {path: 'graph', component : GraphComponent},
  {path: 'forgotpw', component : ForgotpwComponent},
  {path: 'calc', component : CalcComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
