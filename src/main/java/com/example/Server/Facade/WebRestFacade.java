package com.example.Server.Facade;

import com.example.Server.dto.PersonDTO;
import org.springframework.stereotype.Service;

/**
 * Created by Michiel
 */
@Service
public class WebRestFacade {

    public boolean calculate(PersonDTO personDTO){
        double bmi = personDTO.getWeight() / (personDTO.getLength()*personDTO.getLength());
        int year = Integer.parseInt(personDTO.getBirthDay().split("-")[0]);
        return true;
    }
}
