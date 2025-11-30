import { Component } from '@angular/core';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  totalCour:number=0;
  totalEtudiant:number=0;
  totalAdmins:number=0;
  totalContact:number=0;
 
  constructor(
    private service:CrudService,
  ) { 
    
  }

  ngOnInit(): void {
    this.service.getAdmin().subscribe(admin =>{
      this.totalAdmins=admin.length})
      this.service.getEtudiant().subscribe(etudiant =>{
        this.totalEtudiant=etudiant.length})
        this.service.getCour().subscribe(cours =>{
          this.totalCour=cours.length})
          this.service.getContact().subscribe(contact =>{
            this.totalContact=contact.length})
             
  }

 

}

