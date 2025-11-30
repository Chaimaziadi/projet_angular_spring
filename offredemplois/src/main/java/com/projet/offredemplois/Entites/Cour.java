package com.projet.offredemplois.Entites;

import jakarta.persistence.*;

@Entity
public class Cour {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private String description;
    private String cour;
    private String specialite;
    private String nomformation;
    @Lob
    @Column(columnDefinition = "LONGTEXT")
    private String img;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCour() {
        return cour;
    }

    public void setCour(String cour) {
        this.cour = cour;
    }

    public String getSpecialite() {
        return specialite;
    }

    public void setSpecialite(String specialite) {
        this.specialite = specialite;
    }

    public String getNomformation() {
        return nomformation;
    }

    public void setNomformation(String nomformation) {
        this.nomformation = nomformation;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }
}
