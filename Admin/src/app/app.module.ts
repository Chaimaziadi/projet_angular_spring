import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterAdminComponent } from './ajouter-admin/ajouter-admin.component';
import { LoginComponent } from './login/login.component';
import { ListeadminComponent } from './listeadmin/listeadmin.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ListeEtudiantComponent } from './liste-etudiant/liste-etudiant.component';
import { ListeContactComponent } from './liste-contact/liste-contact.component';
import { ListeCourComponent } from './liste-cour/liste-cour.component';
import { AjouterCourComponent } from './ajouter-cour/ajouter-cour.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { ModifierAdminComponent } from './modifier-admin/modifier-admin.component';
import { ListereservationComponent } from './listereservation/listereservation.component';

@NgModule({
  declarations: [
    AppComponent,
    AjouterAdminComponent,
    LoginComponent,
    ListeadminComponent,
    ListeEtudiantComponent,
    ListeContactComponent,
    ListeCourComponent,
    AjouterCourComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ModifierAdminComponent,
    ListereservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
