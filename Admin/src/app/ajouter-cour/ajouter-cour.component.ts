import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CrudService } from '../service/crud.service';
import { Cour } from '../Entites/Cour.Entites';

@Component({
  selector: 'app-ajouter-cour',
  templateUrl: './ajouter-cour.component.html',
  styleUrls: ['./ajouter-cour.component.css']
})
export class AjouterCourComponent {
  imgURL:any
messageCommande=""
  courForm:FormGroup
  
  userFile: any;
  public imagePath: any;
  emailURL: any
  newProduit=new Cour()
  public message!: string;
  constructor(private services : CrudService , private router : Router,private fb:FormBuilder) {
    let formControls = {
      nom: new FormControl('',[
        Validators.required,
      Validators.minLength(4)]),
        description: new FormControl('',[
          Validators.required,]),
    
      cour: new FormControl('',[
        Validators.required,
     ]),
     specialite: new FormControl('',[
        Validators.required,]),
    nomformation: new FormControl('',[
          Validators.required,]),
        
        img: new FormControl('',[
          Validators.required,])}
     this.courForm = this.fb.group(formControls)

     
   }
   get nom() {return this.courForm.get('nom');} 
   get description() {return this.courForm.get('description');} 
  get cour() { return this.courForm.get('cour');}
  getspecialite() {return this.courForm.get('specialite');}
  getnomformation() {return this.courForm.get( 'nomformation');}
  img() {return this.courForm.get( 'img');}
  
   addNewCour() {
    let data = this.courForm.value;
    console.log(data);
    let cour = new Cour(
     undefined, data.nom,data.description,data.cour,data.specialite,data.nomformation,this.imgURL);
    console.log(cour);
    
    if (
      data.nom == 0 ||
      data.description == 0 ||
      data.cour == 0||
      data.specialite == 0||
      data.nomformation == 0||
      data.img == 0
    ) {
      this.messageCommande=`<div class="alert alert-danger"nomformation="alert">
      remplir votre champ 
    </div>`
    
    } else {
    this.services.addcour(cour).subscribe(
      res=>{
        console.log(res);
        this.messageCommande=`<div class="alert alert-success"role="alert">
        avec success
      </div>`
        
        this.router.navigate(['/liste-cour']).then(()=>{window.location.reload()})
        ;
      },
       err=>{
        this.messageCommande=`<div class="alert alert-warning"nomformation="alert">
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
  onSelectFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userFile = file;
  

      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = 'Only images are supported.';
        return;
      }

      var reader = new FileReader();

      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      }
    }
  }
}



