package com.projet.offredemplois.RestController;

import com.projet.offredemplois.Entites.Admin;
import com.projet.offredemplois.Entites.Contact;
import com.projet.offredemplois.Repository.AdminRepository;
import com.projet.offredemplois.Service.AdminService;
import com.projet.offredemplois.Service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;
@RestController
@CrossOrigin("*")
@RequestMapping(value="/contact")

public class ContactRestController {


    @Autowired
    ContactService contactService;




    @RequestMapping(method = RequestMethod.POST )
    public Contact AjouterContact (@RequestBody Contact contact) {

           return contactService.ajouterContact(contact);
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Contact> AfficherContact(){
        return contactService.AfficherContact();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE )
    public void SupprimerContact(@PathVariable("id") Long id){
        contactService.supprimerContact(id);

    }


}
