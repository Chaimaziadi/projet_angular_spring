package com.projet.offredemplois.Repository;

import com.projet.offredemplois.Entites.ConfirmationToken;
import com.projet.offredemplois.Entites.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConfirmationTokenRepository extends JpaRepository<ConfirmationToken,Long> {

    ConfirmationToken findByConfirmationToken(String confirmationToken);
}
