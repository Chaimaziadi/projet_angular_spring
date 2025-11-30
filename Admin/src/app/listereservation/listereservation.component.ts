import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../Entites/Admin.Entites';
import { CrudService } from '../service/crud.service';
import { Reservation } from '../Entites/Reservation.Entites';

@Component({
  selector: 'app-listereservation',
  templateUrl: './listereservation.component.html',
  styleUrls: ['./listereservation.component.css']
})
export class ListereservationComponent {

  listReservation:Reservation[]
    constructor(private servive:CrudService,private router:Router){}
    ngOnInit():void{
      this.servive.getReservation().subscribe(admin=>{
        this.listReservation=admin
      })
    }
    

}
