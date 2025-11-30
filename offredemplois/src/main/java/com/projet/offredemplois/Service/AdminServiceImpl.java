package com.projet.offredemplois.Service;

import com.projet.offredemplois.Entites.Admin;
import com.projet.offredemplois.Repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class AdminServiceImpl implements AdminService {
    @Autowired
    AdminRepository  adminRepository;



    @Override
    public Admin ajouterAdmin(Admin admin) {
        return  adminRepository.save(admin);
    }

    @Override
    public Admin modifierAdmin(Admin admin) {
        return  adminRepository.save(admin);
    }

    @Override
    public List<Admin> AfficherAdmin() {
        return adminRepository.findAll();
    }

    @Override
    public Optional<Admin> AfficherAdminById(Long id) {
        return adminRepository.findById(id);
    }

    @Override
    public void supprimerAdmin(Long id) {
        adminRepository.deleteById(id);

    }
}
