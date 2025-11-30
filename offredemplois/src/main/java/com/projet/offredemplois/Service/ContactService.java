package com.projet.offredemplois.Service;

import com.projet.offredemplois.Entites.Contact;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public interface ContactService {
    Contact ajouterContact( Contact  contact);
    Contact modifierContact( Contact  contact);
    List<Contact> AfficherContact();
    Optional< Contact> AfficherContactById(Long id);
    void supprimerContact(Long id);
}
