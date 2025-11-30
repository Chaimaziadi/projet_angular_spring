package com.projet.offredemplois.Repository;

import com.projet.offredemplois.Entites.Contact;
import com.projet.offredemplois.Entites.Cour;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourRepository extends JpaRepository<Cour,Long> {
}
