package com.projet.offredemplois.Service;

import com.projet.offredemplois.Entites.Cour;
import com.projet.offredemplois.Repository.CourRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourServiceImpl implements CourService  {
    @Autowired
     CourRepository  courRepository;


    @Override
    public Cour ajouterCour(Cour cour)  {
        return courRepository.save(cour);
    }

    @Override
    public Cour modifierCour(Cour cour) {
        return courRepository.save(cour);
    }

    @Override
    public List<Cour> AfficherCour() {
        return courRepository.findAll();
    }

    @Override
    public Optional<Cour> AfficherCourById(Long id) {
        return courRepository.findById(id);
    }

    @Override
    public void supprimerCour(Long id) {
        courRepository.deleteById(id);
    }


}
