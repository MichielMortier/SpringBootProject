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

}
