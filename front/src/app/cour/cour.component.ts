import { Component } from '@angular/core';
import { CrudService } from '../Service/crud.service';
import { Cour } from '../Entites/Cour.Entites';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cour',
  templateUrl: './cour.component.html',
  styleUrls: ['./cour.component.css']
})
export class CourComponent {
  IsloggedIn:boolean
  messageCommande=""
  listeCours?:Cour[]
  constructor(private service:CrudService,private router:Router){}
  ngOnInit():void{
    this.service.getCour().subscribe(cours=>{
      this.listeCours=cours
      
    })
    this.IsloggedIn=this.service.isLoggedIn(); 
  }
  reserver(event:any)
  {
    this.messageCommande=`<div class="alert alert-primary" role="alert">
    Veuillez patienter ...
  </div>`
    console.log(event)
    let rq:any={}
    rq.idEtudiant=this.service.getUserInfo()?.id
    rq.idCour=event.id
   
    console.log(rq,"what we senddddd")
    this.service.reserverFromApi(rq).subscribe((data:any)=>{
      this.router.navigate(['mesreservation']).then(()=>{
        window.location.reload()
      })
    
      this.messageCommande=`<div class="alert alert-success" role="alert">
    Réservé avec succès
  </div>`
    }, err=>{
      this.messageCommande=`<div class="alert alert-warning" role="alert">
     Erreur, Veuillez réssayer !! 
    </div>`

    })
    setTimeout(() => {
      this.messageCommande=""
    }, 3000);
  }


 
}

