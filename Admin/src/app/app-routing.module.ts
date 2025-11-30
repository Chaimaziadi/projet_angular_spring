import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterAdminComponent } from './ajouter-admin/ajouter-admin.component';
import { LoginComponent } from './login/login.component';
import { ListeadminComponent } from './listeadmin/listeadmin.component';
import { Contact } from './Entites/Contact.Entites';
import { ListeContactComponent } from './liste-contact/liste-contact.component';
import { ListeCourComponent } from './liste-cour/liste-cour.component';
import { ListeEtudiantComponent } from './liste-etudiant/liste-etudiant.component';
import { AjouterCourComponent } from './ajouter-cour/ajouter-cour.component';
import { AuthGuard } from './service/Auth.service';
import { HomeComponent } from './home/home.component';
import { ModifierAdminComponent } from './modifier-admin/modifier-admin.component';
import { ListereservationComponent } from './listereservation/listereservation.component';

const routes: Routes = [
  {path:'',component:AjouterAdminComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'listeadmin',component:ListeadminComponent,canActivate:[AuthGuard]},
  {path:'liste-contact',component:ListeContactComponent,canActivate:[AuthGuard]},
  {path:'liste-cour',component:ListeCourComponent,canActivate:[AuthGuard]},
  {path:'liste-etudiant',component:ListeEtudiantComponent,canActivate:[AuthGuard]},
  {path:'ajouter-cour',component:AjouterCourComponent,canActivate:[AuthGuard]},
  {path:'mofidier-admin/:id',component:ModifierAdminComponent,canActivate:[AuthGuard]},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'listereservation',component:ListereservationComponent,canActivate:[AuthGuard]},
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
