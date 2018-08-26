package com.example.Server.Models;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Created by Michiel
 */
@Entity
@Getter
@Setter
public class Persoon {

    @GenericGenerator(name = "centurySkillSequenceGenerator",
            strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
            parameters = {
                    @org.hibernate.annotations.Parameter(name = "sequence_name", value = "SEQ_CENTURY_SKILL"),
                    @org.hibernate.annotations.Parameter(name = "initial_value", value = "1"),
                    @org.hibernate.annotations.Parameter(name = "increment_size", value = "1")
            }
    )
    @Id
    @GeneratedValue(generator = "centurySkillSequenceGenerator")
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
            out += "<br>Voornaam : " + preName;
            out += "<br>Email : " + email;
            out += "<br>Gewicht : " + weight;
            out += "<br>Lengte : " + length;
        }
        out += "<br>BMI : " +  Math.round(bmi * 100.0) / 100.0;
        out += "<br>Geslacht : " + gender;
        out += "<br>Geboortedatum : " + birthDay;
        return out;
    }
}
