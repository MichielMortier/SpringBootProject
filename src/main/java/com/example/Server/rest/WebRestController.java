package com.example.Server.rest;

import com.example.Server.Facade.WebRestFacade;
import com.example.Server.Models.Persoon;
import com.example.Server.dto.PersonDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;

/**
 * Created by Michiel
 */
@RestController
@RequestMapping("api")
@CrossOrigin
public class WebRestController {

    private final WebRestFacade webRestFacade;

    @Autowired
    public WebRestController(WebRestFacade webRestFacade){
        this.webRestFacade = webRestFacade;
    }

    @PostMapping(value="/calculate")
    public boolean seeIfPersonFits(@RequestBody PersonDTO personDTO) throws ParseException {
        return webRestFacade.calculate(personDTO);
    }

    @GetMapping(value="/seeDatabaseContent")
    public String seeContent() {
        return webRestFacade.personen();
    }
}
