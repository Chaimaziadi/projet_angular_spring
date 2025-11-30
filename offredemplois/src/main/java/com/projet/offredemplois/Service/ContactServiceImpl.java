package com.projet.offredemplois.Service;

import com.projet.offredemplois.Entites.Contact;
import com.projet.offredemplois.Repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContactServiceImpl  implements ContactService{
    @Autowired
    ContactRepository  ContactRepository;


    @Override
    public Contact ajouterContact(Contact contact) {
        return ContactRepository.save(contact);
    }

    @Override
    public Contact modifierContact(Contact contact) {
        return ContactRepository.save(contact);
    }

    @Override
    public List<Contact> AfficherContact() {
        return ContactRepository.findAll();
    }

    @Override
    public Optional<Contact> AfficherContactById(Long id) {
        return ContactRepository.findById(id);
    }

    @Override
    public void supprimerContact(Long id) {
        ContactRepository.deleteById(id);

    }
}
