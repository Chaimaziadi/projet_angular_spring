import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MenuComponent } from './menu/menu.component';
import { CourComponent } from './cour/cour.component';
import { ReservationComponent } from './reservation/reservation.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
{ path: 'cour', component:CourComponent},
{ path: 'mesreservation', component:ReservationComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
