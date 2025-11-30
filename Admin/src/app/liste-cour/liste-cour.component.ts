import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../Entites/Admin.Entites';
import { Cour } from '../Entites/Cour.Entites';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-liste-cour',
  templateUrl: './liste-cour.component.html',
  styleUrls: ['./liste-cour.component.css']
})
export class ListeCourComponent {
 listeCour:Cour[]
  constructor(private servive:CrudService,private router:Router){}
  ngOnInit():void{
    this.servive.getCour().subscribe(cour=>{
      this.listeCour=cour
    })
  }
  DeleteCour(cour: Cour){
    if(confirm("Voulez vous supprimer ce message de cour avec l'ID " +cour.id+ "?")) {
     
      this.servive.onDeleteCour(cour.id).subscribe(() => {
        this.router.navigate(['/cour']).then(() => {
          window.location.reload()
        })
      })
   
  }

}
}
