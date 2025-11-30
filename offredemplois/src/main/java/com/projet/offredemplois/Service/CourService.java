package com.projet.offredemplois.Service;

import com.projet.offredemplois.Entites.Admin;
import com.projet.offredemplois.Entites.Cour;


import java.util.List;
import java.util.Optional;

public interface CourService {
    Cour ajouterCour(Cour cour);
    Cour modifierCour(Cour cour);
    List<Cour> AfficherCour();
    Optional<Cour> AfficherCourById(Long id);
    void supprimerCour(Long id);
}
