import { Component } from '@angular/core';
import { Admin } from '../Entites/Admin.Entites';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listeadmin',
  templateUrl: './listeadmin.component.html',
  styleUrls: ['./listeadmin.component.css']
})
export class ListeadminComponent {
  role:String
  listeAdmin:Admin[]
  constructor(private servive:CrudService,private router:Router){}
  ngOnInit():void{
    this.servive.getAdmin().subscribe(admin=>{
      this.listeAdmin=admin
    })
    this.role=localStorage.getItem("role")as string;
  }
  DeleteAdmin(admin: Admin){
    if(confirm("Voulez vous supprimer ce message de admin avec l'ID " +admin.id+ "?")) {
     
      this.servive.onDeleteAdmin(admin.id).subscribe(() => {
        this.router.navigate(['/listeadmin']).then(() => {
          window.location.reload()
        })
      })
   
  }

}}
