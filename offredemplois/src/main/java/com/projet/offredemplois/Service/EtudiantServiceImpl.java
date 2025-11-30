package com.projet.offredemplois.Service;

import com.projet.offredemplois.Entites.Admin;
import com.projet.offredemplois.Entites.ConfirmationToken;
import com.projet.offredemplois.Entites.Etudiant;
import com.projet.offredemplois.Repository.ConfirmationTokenRepository;
import com.projet.offredemplois.Repository.CourRepository;
import com.projet.offredemplois.Repository.EtudiantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EtudiantServiceImpl implements EtudiantService {
    private BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
    @Autowired
       EtudiantRepository etudiantRepository;
    @Autowired
    ConfirmationTokenRepository confirmationTokenRepository;
    @Autowired
    EmailService emailService;

    @Override
    public ResponseEntity<Object>  ajouterEtudiant(Etudiant etudiant) {

        Etudiant existingUser = etudiantRepository.findByEmail(etudiant.getEmail());
        if (existingUser!=null) {
            return ResponseEntity.badRequest().body("Error: Email is already in use!");
        }

        etudiant.setMp(this.bCryptPasswordEncoder.encode(etudiant.getMp()));
        etudiantRepository.save(etudiant);
        ConfirmationToken confirmationToken = new ConfirmationToken(etudiant);

        confirmationTokenRepository.save(confirmationToken);

        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(etudiant.getEmail());
        mailMessage.setSubject("Complete Registration!");
        mailMessage.setText("To confirm your account, please click here : "
                +"http://localhost:8081/api/etudiant/confirm-account?token="+confirmationToken.getConfirmationToken());
        emailService.sendEmail(mailMessage);

        System.out.println("Confirmation Token: " + confirmationToken.getConfirmationToken());

        return ResponseEntity.ok("Verify email by the link sent on your email address");
    }




    @Override
    public ResponseEntity<?> ConfirmeEmail(String confirmationToken) {

        ConfirmationToken token = confirmationTokenRepository.findByConfirmationToken(confirmationToken);

        if(token != null)
        {
            Etudiant etudiant =etudiantRepository.findByEmail(token.getEtudiant().getEmail());
            System.out.println("email from token " +token.getEtudiant().getEmail());
            etudiant.setEtat(true);
            etudiantRepository.save( etudiant);
            return ResponseEntity.ok("Email verified successfully! "+"http://localhost:4200/login");
        }else {
            return ResponseEntity.badRequest().body("Error: Couldn't verify email");}
    }

    @Override
    public Etudiant modifierEtudiant(Etudiant etudiant) {
        return etudiantRepository.save(etudiant);
    }

    @Override
    public List<Etudiant> AfficherEtudiant() {
        return etudiantRepository.findAll();
    }

    @Override
    public Optional<Etudiant> AfficherEtudiantById(Long id) {
        return etudiantRepository.findById(id);
    }

    @Override
    public void supprimerEtudiant(Long id) {
        etudiantRepository.deleteById(id);

    }
}
