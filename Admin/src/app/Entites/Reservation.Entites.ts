import { Cour } from "./Cour.Entites";
import { Etudiant } from "./Etudiant.Entites";

export class Reservation {
    constructor(
        public id?:number,
        public etudiant?:Etudiant,
        public cour?:Cour,
   
  
    ){}
        }