package com.projet.offredemplois.Service;

import com.projet.offredemplois.Entites.Admin;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

public interface AdminService {
    Admin ajouterAdmin(Admin admin);
    Admin modifierAdmin(Admin admin);
    List<Admin> AfficherAdmin();
    Optional<Admin> AfficherAdminById(Long id);
    void supprimerAdmin(Long id);

}
