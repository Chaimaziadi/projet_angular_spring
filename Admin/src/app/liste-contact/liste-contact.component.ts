import { Component } from '@angular/core';
import { Contact } from '../Entites/Contact.Entites';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-contact',
  templateUrl: './liste-contact.component.html',
  styleUrls: ['./liste-contact.component.css']
})
export class ListeContactComponent {
 listeContact:Contact[]
  constructor(private servive:CrudService,private router:Router){}
  ngOnInit():void{
    this.servive.getContact().subscribe(Contact=>{
      this.listeContact=Contact
    })
  }
  DeleteContact(contact: Contact){
    if(confirm("Voulez vous supprimer ce message de contact avec l'ID " +contact.id+ "?")) {
     
      this.servive.onDeletContact(contact.id).subscribe(() => {
        this.router.navigate(['/contact']).then(() => {
          window.location.reload()
        })
      })
   
  }

}
}
