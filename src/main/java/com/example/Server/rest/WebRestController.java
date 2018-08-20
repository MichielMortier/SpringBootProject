package com.example.Server.rest;

import com.example.Server.dto.PersonDTO;
import org.springframework.web.bind.annotation.*;

/**
 * Created by Michiel
 */
@RestController
@RequestMapping("api")
@CrossOrigin
public class WebRestController {

    @GetMapping(value="/hi")
    public String testMapping(){
        return "Hello world";
    }

    @PostMapping(value="/calculate")
    public boolean seeIfPersonFits(@RequestBody PersonDTO personDTO){
        return true;
    }
}
