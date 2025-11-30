import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../Entites/Contact.Entites';
import { CrudService } from '../Service/crud.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Admin } from '../Entites/Admin.Entites';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  messageCommande=""
  contactForm:FormGroup 
  
  userFile: any;
  public imagePath: any;
  emailURL: any
  newEtudiant=new Contact()
  public message!: string;
  constructor(private services : CrudService , private router : Router,private fb:FormBuilder) {
    let formControls = {
      nom: new FormControl('',[
        Validators.required,
      Validators.minLength(4)]),
        email: new FormControl('',[
          Validators.required,]),
    
      tlf: new FormControl('',[
        Validators.required,
      Validators.email]),
      sujet: new FormControl('',[
        Validators.required,]),
     msg: new FormControl('',[
          Validators.required,])}
     this.contactForm = this.fb.group(formControls)
   }
   get nom() {return this.contactForm.get('nom');} 
   get email() {return this.contactForm.get('email');} 
  get tlf() { return this.contactForm.get('tlf');}
  get sujet() {return this.contactForm.get('sujet');}
  get msg() {return this.contactForm.get('msg');}
  
   addNewContact() {
    let data = this.contactForm.value;
    console.log(data);
    let contact = new Contact(
     undefined, data.nom,data.email,data.tlf,data.sujet,data.msg);
    console.log(contact);
    
    if (
      data.nom == 0 ||
      data.email == 0 ||
      data.tlf == 0||
      data.sujet == 0||
      data.msg == 0
    ) {
      this.messageCommande=`<div class="alert alert-danger" msg="alert">
      remplir votre champ 
    </div>`
    
    } else {
    this.services.addcontact(contact).subscribe(
      res=>{
        console.log(res);
        this.messageCommande=`<div class="alert alert-success" msg="alert">
        Marehba bik
      </div>`
        
        this.router.navigate(['/about']).then(()=>{window.location.reload()})
        ;
      },
       err=>{
        this.messageCommande=`<div class="alert alert-warning" msg="alert">
        EMAIL EXISTE deja!!!! 
      </div>`
  
      })
      setTimeout(() => {
        this.messageCommande=""
      }, 3000);
    
    }
  }



  ngOnInit(): void {
  }


}
