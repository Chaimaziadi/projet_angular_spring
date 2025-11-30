package com.projet.offredemplois.Repository;

import com.projet.offredemplois.Entites.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact,Long> {
}
