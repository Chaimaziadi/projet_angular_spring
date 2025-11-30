package com.projet.offredemplois.Repository;

import com.projet.offredemplois.Entites.Admin;
import com.projet.offredemplois.Entites.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admin,Long> {
    boolean existsByEmail(String email);
    Admin findAllByEmail(String email);
}
