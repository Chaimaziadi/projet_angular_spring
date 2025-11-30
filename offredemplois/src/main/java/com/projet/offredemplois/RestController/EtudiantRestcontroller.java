package com.projet.offredemplois.RestController;

import com.projet.offredemplois.Entites.Admin;
import com.projet.offredemplois.Entites.Etudiant;
import com.projet.offredemplois.Repository.AdminRepository;
import com.projet.offredemplois.Repository.EtudiantRepository;
import com.projet.offredemplois.Service.AdminService;
import com.projet.offredemplois.Service.EtudiantService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
@RestController
@CrossOrigin("*")
@RequestMapping(value="/etudiant")

public class EtudiantRestcontroller {
    private BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

    @Autowired
    EtudiantRepository etudiantRepository;

    @Autowired
    EtudiantService etudiantService;




    @RequestMapping(method = RequestMethod.POST )
    ResponseEntity<?> AjouterEtudiant (@RequestBody Etudiant etudiant) {
           return etudiantService.ajouterEtudiant(etudiant);

    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Etudiant> AfficherEtudiant(){
        return etudiantService.AfficherEtudiant();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE )
    public void SupprimerEtudiant(@PathVariable("id") Long id){
        etudiantService.supprimerEtudiant(id);

    }

    @RequestMapping(value = "/{id}" , method = RequestMethod.GET)
    public Optional<Etudiant> getEtudiantById(@PathVariable("id") Long id){

        Optional<Etudiant> etudiant =etudiantService.AfficherEtudiantById(id);
        return etudiant;
    }

    @RequestMapping(value = "/{id}" ,method = RequestMethod.PUT)
    public Etudiant ModifierEtudiant(@PathVariable("id")Long id, @RequestBody Etudiant etudiant){
        etudiant.setMp(this.bCryptPasswordEncoder.encode(etudiant.getMp()));
        Etudiant savedUser = etudiantRepository.save(etudiant);

        Etudiant newEtudiant = etudiantService.modifierEtudiant(etudiant);
        return newEtudiant;
    }



    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> loginEtudiant(@RequestBody Etudiant etudiant) {
        System.out.println("in login-Etudiant" + etudiant);
        HashMap<String, Object> response = new HashMap<>();

        Etudiant userFromDB = etudiantRepository.findAllByEmail(etudiant.getEmail());
        System.out.println("userFromDB+Etudiant" + userFromDB);
        if (userFromDB == null) {
            response.put("message", "Etudiant not found!");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } else {
            boolean compare = this.bCryptPasswordEncoder.matches(etudiant.getMp(), userFromDB.getMp());
            System.out.println("compare" + compare);
            if (!compare) {
                response.put("message", "Password incorrect!");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
            } else {
                String token = Jwts.builder()
                        .claim("data", userFromDB)
                        .signWith(SignatureAlgorithm.HS256, "SECRET")
                        .compact();
                response.put("token", token);

                System.out.println("hhh");
                return ResponseEntity.status(HttpStatus.OK).body(response);
            }

        }
    }


    @RequestMapping(value="/confirm-account", method= {RequestMethod.GET, RequestMethod.POST})
    public ResponseEntity<?> confirmUserAccount(@RequestParam("token")String confirmationToken) {
        return etudiantService.ConfirmeEmail(confirmationToken);
    }
}
