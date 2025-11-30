package com.projet.offredemplois.Service;

import com.projet.offredemplois.Entites.Cour;
import com.projet.offredemplois.Entites.Etudiant;
import com.projet.offredemplois.Entites.Reservation;
import com.projet.offredemplois.Entites.ReservationRq;
import com.projet.offredemplois.Repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservationServiceImpl  implements ReservationService{
    @Autowired
    CourService  courService;
    @Autowired
    EtudiantService etudiantService;
    @Autowired
    ReservationRepository reservationRepository;

    @Override
    public Reservation ajouterReservation(ReservationRq reservationRq) {
        Optional<Cour> cour = courService.AfficherCourById(reservationRq.getIdCour());
        Optional<Etudiant> etudiant = etudiantService.AfficherEtudiantById(reservationRq.getIdEtudiant());

        if (cour.isPresent() && etudiant.isPresent()) {
            Reservation reservation = new Reservation();
            reservation.setCour(cour.get());
            reservation.setEtudiant(etudiant.get());

            return reservationRepository.save(reservation);
        }
        else
        {
            return null;
        }
    }

    @Override
    public List<Reservation> listeReservation() {
        return reservationRepository.findAll();
    }

    @Override
    public List<Reservation> GetCourByEtudiant(Long id) {
        return reservationRepository.findByEtudiantId(id);
    }


}















