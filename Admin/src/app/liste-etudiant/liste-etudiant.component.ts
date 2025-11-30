import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../Entites/Admin.Entites';
import { CrudService } from '../service/crud.service';
import { Etudiant } from '../Entites/Etudiant.Entites';

@Component({
  selector: 'app-liste-etudiant',
  templateUrl: './liste-etudiant.component.html',
  styleUrls: ['./liste-etudiant.component.css']
})
export class ListeEtudiantComponent {
 listeEtudiant:Etudiant[]
 role:String

  constructor(private servive:CrudService,private router:Router){}
  ngOnInit():void{
    this.servive.getEtudiant().subscribe(etudiant=>{
      this.listeEtudiant=etudiant
    })
    this.role=localStorage.getItem("role")as string;
  }
  DeleteEtudiant(etudiant: Etudiant){
    if(confirm("Voulez vous supprimer ce message de etudiant avec l'ID " +etudiant.id+ "?")) {
     
      this.servive.onDeletEtudiant(etudiant.id).subscribe(() => {
        this.router.navigate(['/etudiant']).then(() => {
          window.location.reload()
        })
      })
   
  }

}
}
