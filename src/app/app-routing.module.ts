import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CalcComponent } from './calc/calc.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GraphComponent } from './graph/graph.component';


//path: URL to map to | component: component that goes with URL
const routes: Routes = [
  {path: 'login', component : LoginComponent},
  {path: 'register', component : RegisterComponent},
  {path: 'welcome', component : WelcomeComponent},
  {path: 'graph', component : GraphComponent},
  {path: 'calc', component : CalcComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
