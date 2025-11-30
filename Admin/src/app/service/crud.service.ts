import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../Entites/Admin.Entites';
import { Observable } from 'rxjs';
import { Contact } from '../Entites/Contact.Entites';
import { Etudiant } from '../Entites/Etudiant.Entites';
import { Cour } from '../Entites/Cour.Entites';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Reservation } from '../Entites/Reservation.Entites';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  helper=new JwtHelperService()

  apiUrl='http://localhost:8081/api'
  loginUserUrl='http://localhost:8081/api/admin/login'
    constructor(private http:HttpClient) { }
    loginAdmin(admin:Admin){
      return this.http.post<any>(this.loginUserUrl, admin);
    }
    addadmin(admin:Admin){
      return this.http.post<any>(this.apiUrl+"/admin", admin);
    }
    getAdmin(): Observable<Admin[]>{
      return this.http.get<Admin[]>(this.apiUrl +"/admin");
    }
  
    onDeleteAdmin(id : number){
      const url =`${this.apiUrl+"/admin"}/${id}` 
      return this.http.delete(url )
    }

    


    loginContact(contact:Contact){
      return this.http.post<any>(this.loginUserUrl, contact);
    }
    addcontact(admin:Admin){
      return this.http.post<any>(this.apiUrl+"/contact", Contact);
    }
    getContact(): Observable<Contact[]>{
      return this.http.get<Contact[]>(this.apiUrl +"/contact");
    }
    getReservation(): Observable<Reservation[]>{
      return this.http.get<Reservation[]>(this.apiUrl +"/reservation");
    }
  
    onDeletContact(id : number){
      const url =`${this.apiUrl+"/contact"}/${id}` 
      return this.http.delete(url )
    }  
  






    addetudiant(etudiant:Etudiant){
      return this.http.post<any>(this.apiUrl+"/etudiant", etudiant);
    }
    getEtudiant(): Observable<Contact[]>{
      return this.http.get<Etudiant[]>(this.apiUrl +"/etudiant");
    }
    onDeletEtudiant(id : number){
      const url =`${this.apiUrl+"/etudiant"}/${id}` 
      return this.http.delete(url )
    }  
  
   









    loginCour(cour:Cour){
      return this.http.post<any>(this.loginUserUrl,cour);
    }
    addcour(cour:Cour){
      return this.http.post<any>(this.apiUrl+"/cour", cour);
    }
    getCour(): Observable<Cour[]>{
      return this.http.get<Cour[]>(this.apiUrl +"/cour");
    }
  
    onDeleteCour(id : number){
      const url =`${this.apiUrl+"/cour"}/${id}` 
      return this.http.delete(url )
    }








    isLoggedIn(){

      let token = localStorage.getItem("myToken");
  
      if (token) {
        return true ;
      } else {
        return false;
      }
    }

    userDetails(){
      let token:any=localStorage.getItem('myToken');
      let decodeToken= this.helper.decodeToken(token);
       return decodeToken.data;
     }
     
    findPAdminById(id : number): Observable<Admin> {
      const url = `${this.apiUrl+"/admin"}/${id};`
      return this.http.get<Admin>(url)
    }

    updateAdmin(id:number,admin: Admin) {
      const url = `${this.apiUrl+"/admin"}/${id}`
      return this.http.put<any>(url, admin);
    }
  
  
   
  
    
  
    }
    
  
  
  
   
  

  