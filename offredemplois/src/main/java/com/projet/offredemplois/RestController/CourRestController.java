package com.projet.offredemplois.RestController;

import com.projet.offredemplois.Entites.Admin;
import com.projet.offredemplois.Entites.Contact;
import com.projet.offredemplois.Entites.Cour;
import com.projet.offredemplois.Service.ContactService;
import com.projet.offredemplois.Service.CourService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping(value="/cour")
public class CourRestController {
    @Autowired
    CourService courService;




    @RequestMapping(method = RequestMethod.POST )
    public  Cour AjouterCour (@RequestBody Cour cour) {

        return courService.ajouterCour(cour);
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Cour> AfficherCour(){
        return courService.AfficherCour();
    }

    @RequestMapping(value = "/{id}" , method = RequestMethod.GET)
    public Optional<Cour> getCourById(@PathVariable("id") Long id){

        Optional<Cour> cour = courService.AfficherCourById(id);
        return cour;
    }


}


