package com.projet.offredemplois.Entites;

import ch.qos.logback.core.net.server.Client;
import jakarta.persistence.*;

@Entity
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Long id;
    @ManyToOne
    private Etudiant etudiant;
    @ManyToOne
    private Cour cour;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Etudiant getEtudiant() {
        return etudiant;
    }

    public void setEtudiant(Etudiant etudiant) {
        this.etudiant = etudiant;
    }

    public Cour getCour() {
        return cour;
    }

    public void setCour(Cour cour) {
        this.cour = cour;
    }
}
