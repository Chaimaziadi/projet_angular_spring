package com.projet.offredemplois.Service;

import com.projet.offredemplois.Entites.Admin;
import com.projet.offredemplois.Entites.Etudiant;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public interface EtudiantService {
     ResponseEntity<Object> ajouterEtudiant(Etudiant etudiant);
     ResponseEntity<?> ConfirmeEmail (String confirmationToken);
    Etudiant modifierEtudiant(Etudiant etudiant);
    List<Etudiant> AfficherEtudiant();
    Optional<Etudiant> AfficherEtudiantById(Long id);
    void supprimerEtudiant(Long id);
}
