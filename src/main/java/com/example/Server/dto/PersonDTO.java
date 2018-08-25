package com.example.Server.dto;

import lombok.Getter;
import lombok.Setter;

/**
 * Created by Michiel
 */
@Getter
@Setter
public class PersonDTO {

    private Long id;

    private String name;

    private String preName;

    private String birthDay;

    private String email;

    private String gender;

    private double weight;

    private double length;

    private double bmi;

    public String toString(){
        String out = "";
        if(name != null){
            out += "Naam : " + name;
            out += "\nVoornaam : " + preName;
            out += "\nEmail : " + email;
            out += "\nGewicht : " + weight;
            out += "\nLengte : " + length;
        }
        out += "\nBMI : " +  Math.round(bmi * 100.0) / 100.0;
        out += "\nGeslacht : " + gender;
        out += "\nGeboortedatum : " + birthDay;
        return out;
    }

}
