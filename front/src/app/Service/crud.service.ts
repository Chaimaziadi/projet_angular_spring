import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Etudiant } from '../Entites/Etudiant.Entites';
import { Admin } from '../Entites/Admin.Entites';
import { Observable } from 'rxjs';
import { Contact } from '../Entites/Contact.Entites';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Cour } from '../Entites/Cour.Entites';




@Injectable({
  providedIn: 'root'
})
export class CrudService {

apiUrl='http://localhost:8081/api'
loginUserUrl='http://localhost:8081/api/etudiant/login'
 
  constructor(private http:HttpClient) { }
  loginEtudiant(etudiant:Etudiant){
    return this.http.post<any>(this.loginUserUrl, etudiant);
  }


  addetudiant(etudiant:Etudiant){
    return this.http.post<any>(this.apiUrl+"/etudiant", etudiant);
  }
  getEtudiant(): Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>(this.apiUrl +"/etudiant");
  }

  onDeleteEtudiant(id : number){
    const url =`${this.apiUrl+"/etudiant"}/${id}` 
    return this.http.delete(url )
  }


  loginContact(etudiant:Etudiant){
    return this.http.post<any>(this.loginUserUrl, etudiant);
  }


  addcontact(etudiant:Etudiant){
    return this.http.post<any>(this.apiUrl+"/contact", Contact);
  }
  getContact(): Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>(this.apiUrl +"/contact");
  }
  getCour(): Observable<Cour[]>{
    return this.http.get<Cour[]>(this.apiUrl +"/cour");
  }

  onDeleteContact(id : number){
    const url =`${this.apiUrl+"/contact"}/${id}` 
    return this.http.delete(url )
  }






 reserverFromApi(rq:any){
    return this.http.post<any>( "http://localhost:8081/api/reservation" ,rq);
 }
 getUserInfo()
 {
   var token = localStorage.getItem("myToken");
   const helper = new JwtHelperService();

   const decodedToken = helper.decodeToken(token);
    
   // Other functions
   const expirationDate = helper.getTokenExpirationDate(token);
   const isExpired = helper.isTokenExpired(token);
   //var decoded:any = jwt_decode(token);
   var decoded:any
   return decodedToken?.data
 }
 
 getAllReservationbyClientId(){
  return this.http.get<any>( "http://localhost:8081/api/reservation/get-all-by-id-Etudiant/"+this.getUserInfo()?.id );
}




isLoggedIn(){

  let token = localStorage.getItem("myToken");

  if (token) {
    return true ;
  } else {
    return false;
  }
}
}