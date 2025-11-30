import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CrudService } from '../Service/crud.service';
import { Etudiant } from '../Entites/Etudiant.Entites';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  messageCommande=""
  etudiantForm:FormGroup 
  
  userFile: any;
  public imagePath: any;
  emailURL: any
  newProduit=new Etudiant()
  public message!: string;
  constructor(private services : CrudService , private router : Router,private fb:FormBuilder) {
    let formControls = {
      nom: new FormControl('',[
        Validators.required,
      Validators.minLength(4)]),
        prenom: new FormControl('',[
          Validators.required,]),
    
      email: new FormControl('',[
        Validators.required,
      Validators.email]),
      mp: new FormControl('',[
        Validators.required,]),
     tlf: new FormControl('',[
          Validators.required,]),
      specialite: new FormControl('',[
            Validators.required,])}
     this.etudiantForm = this.fb.group(formControls)
   }
   get nom() {return this.etudiantForm.get('nom');} 
   get prenom() {return this.etudiantForm.get('prenom');} 
  get email() { return this.etudiantForm.get('email');}
  get mp() {return this.etudiantForm.get('mp');}
  get tlf() {return this.etudiantForm.get('tlf');}
  get  specialite() {return this.etudiantForm.get('specialite');}
  

   addNewEtudiant() {
    let data = this.etudiantForm.value;
    console.log(data);
    let etudiant = new Etudiant(
     undefined, data.nom,data.prenom,data.email,data.mp, data.tlf,data.specialite);
    console.log(etudiant);
    
    if (
      data.nom == 0 ||
      data.prenom == 0 ||
      data.email == 0||
      data.mp == 0||
      data.tlf == 0||
      data. specialite == 0
    ) {
      this.messageCommande=`<div class="alert alert-danger" role="alert">
      remplir votre champ 
    </div>`
    
    } else {
    this.services.addetudiant(etudiant).subscribe(
      res=>{
        console.log(res);
        this.messageCommande=`<div class="alert alert-success" role="alert">
        avec success
      </div>`
        
        this.router.navigate(['/about']).then(()=>{window.location.reload()})
        ;
      },
       err=>{
        this.messageCommande=`<div class="alert alert-warning" role="alert">
        EMAIL EXISTE deja!!!! 
      </div>`
  
      })
      setTimeout(() => {
        this.messageCommande=""
      }, 3000);
    
     }}
  
  



  ngOnInit(): void {
    

}








   

}

