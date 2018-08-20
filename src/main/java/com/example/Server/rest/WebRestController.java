package com.example.Server.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Michiel
 */
@RestController
@RequestMapping("api")
public class WebRestController {

    @GetMapping(value="/hi")
    public String testMapping(){
        return "Hello world";
    }
}
