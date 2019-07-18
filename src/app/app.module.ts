import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CalcComponent } from './calc/calc.component';
import { WelcomeComponent } from './welcome/welcome.component';
<<<<<<< HEAD
import { UpdateUserComponent } from './update-user/update-user.component';
import { GraphComponent } from './graph/graph.component';
=======
import { ForgotpwComponent } from './forgotpw/forgotpw.component';

>>>>>>> origin/recoverPassword

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent,
<<<<<<< HEAD
    UpdateUserComponent,
    GraphComponent,
=======
    ForgotpwComponent,
>>>>>>> origin/recoverPassword
    CalcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
