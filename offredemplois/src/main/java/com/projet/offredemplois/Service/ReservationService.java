package com.projet.offredemplois.Service;

import com.projet.offredemplois.Entites.Reservation;
import com.projet.offredemplois.Entites.ReservationRq;

import java.util.List;

public interface ReservationService {
    Reservation ajouterReservation(ReservationRq reservationRq);
    List<Reservation> listeReservation();
    List<Reservation> GetCourByEtudiant(Long id);
}
