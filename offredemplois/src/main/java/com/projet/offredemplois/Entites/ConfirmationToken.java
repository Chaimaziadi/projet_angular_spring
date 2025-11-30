package com.projet.offredemplois.Entites;

import jakarta.persistence.*;

import java.util.Date;
import java.util.UUID;
@Entity
public class ConfirmationToken {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="token_id")
    private Long tokenId;

    @Column(name="confirmation_token")
    private String confirmationToken;

    @Temporal(TemporalType.TIMESTAMP)
    private Date createdDate;

    @OneToOne(targetEntity = Etudiant.class, fetch = FetchType.LAZY,cascade = CascadeType.ALL,orphanRemoval = true)
    @JoinColumn(nullable = false, name = "etudiant_id")
    private Etudiant etudiant;




    public ConfirmationToken(Etudiant etudiant) {
        this.etudiant = etudiant;
        createdDate = new Date();
        confirmationToken = UUID.randomUUID().toString();
    }

    public Long getTokenId() {
        return tokenId;
    }

    public void setTokenId(Long tokenId) {
        this.tokenId = tokenId;
    }

    public String getConfirmationToken() {
        return confirmationToken;
    }

    public void setConfirmationToken(String confirmationToken) {
        this.confirmationToken = confirmationToken;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public Etudiant getEtudiant () {
        return etudiant ;
    }

    public void setEtudiant (Etudiant  etudiant ) {
        this.etudiant = etudiant;
    }

    public ConfirmationToken(Long tokenId, String confirmationToken, Date createdDate, Etudiant etudiant) {
        this.tokenId = tokenId;
        this.confirmationToken = confirmationToken;
        this.createdDate = createdDate;
        this.etudiant = etudiant;
    }

    public ConfirmationToken() {
    }
}



