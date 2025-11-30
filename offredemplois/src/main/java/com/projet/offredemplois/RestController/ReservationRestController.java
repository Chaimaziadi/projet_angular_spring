package com.projet.offredemplois.RestController;

import com.projet.offredemplois.Entites.Reservation;
import com.projet.offredemplois.Entites.ReservationRq;
import com.projet.offredemplois.Service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RestController
@CrossOrigin("*")
@RequestMapping(value="/reservation")
public class ReservationRestController {
    @Autowired
    ReservationService reservationService;
    @RequestMapping(method = RequestMethod.POST)
    public Reservation ajouterReservation(@RequestBody ReservationRq reservationRq){
        System.out.println("reserverRq"+reservationRq);
        return reservationService.ajouterReservation(reservationRq);
    }
    @RequestMapping("get-all-by-id-Etudiant/{id}")
    public List<Reservation> listReservationByEtudiant(@PathVariable Long id){
        return reservationService.GetCourByEtudiant(id);
    }
    @RequestMapping(method = RequestMethod.GET )
    public List<Reservation> afficherreservatione(){
        return reservationService.listeReservation();
    }


}
