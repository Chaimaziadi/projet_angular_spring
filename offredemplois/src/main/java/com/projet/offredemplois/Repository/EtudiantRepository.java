package com.projet.offredemplois.Repository;

import com.projet.offredemplois.Entites.Admin;
import com.projet.offredemplois.Entites.Contact;
import com.projet.offredemplois.Entites.Etudiant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EtudiantRepository extends JpaRepository<Etudiant,Long> {
    boolean existsByEmail(String email);
    Etudiant findAllByEmail(String email);

    Etudiant findByEmail(String email);
}
