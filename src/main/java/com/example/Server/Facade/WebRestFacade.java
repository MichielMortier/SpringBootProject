package com.example.Server.Facade;

import com.example.Server.Models.Persoon;
import com.example.Server.Repository.PersoonRepository;
import com.example.Server.dto.CSVPersoonDTO;
import com.example.Server.dto.PersonDTO;
import com.example.Server.mapper.BaseMapper;
import com.fasterxml.jackson.databind.MappingIterator;
import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import com.fasterxml.jackson.dataformat.csv.CsvSchema;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.InputStream;
import java.time.LocalDate;
import java.time.Period;
import java.time.format.DateTimeFormatter;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by Michiel
 */
@Service
public class WebRestFacade {

    private List<PersonDTO> personDTOS;

    private final PersoonRepository persoonRepository;

    @Autowired
    public WebRestFacade(PersoonRepository persoonRepository){
        this.persoonRepository = persoonRepository;
    }


    @PostConstruct
    public void init(){
        personDTOS = loadObjectList(CSVPersoonDTO.class,"/assets/gegevens-controlepersonen.csv")
                .stream()
                .map(csvPersoonDTO -> {
                    PersonDTO personDTO = new PersonDTO();
                    personDTO.setBirthDay(csvPersoonDTO.getBirthDay());
                    personDTO.setBmi(Double.parseDouble(csvPersoonDTO.getBmi().replaceAll(",",".")));
                    personDTO.setGender(csvPersoonDTO.getGender());
                    return personDTO;
                }).collect(Collectors.toList());
    }

    public <T> List<T> loadObjectList(Class<T> type, String fileName) {
        try {
            CsvSchema bootstrapSchema = CsvSchema.emptySchema().withHeader().withColumnSeparator(';');
            char c = bootstrapSchema.getColumnSeparator();
            CsvMapper mapper = new CsvMapper();
            InputStream file = new ClassPathResource(fileName).getInputStream();
            MappingIterator<T> readValues =
                    mapper.reader(type).with(bootstrapSchema).readValues(file);
            return readValues.readAll();
        } catch (Exception e) {
            return Collections.emptyList();
        }
    }

    public boolean calculate(PersonDTO personDTO) {
        personDTO.setBmi(personDTO.getWeight() / (personDTO.getLength() * personDTO.getLength()));
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        DateTimeFormatter formatter2 = DateTimeFormatter.ofPattern("d/MM/yyyy");
        LocalDate geboortedatum = LocalDate.parse(personDTO.getBirthDay(), formatter);
        final int range = Period.between(geboortedatum, LocalDate.now()).getYears() > 30? 3 : 1;
        List<PersonDTO> result = personDTOS
                        .stream()
                        .filter(personDTO1 -> personDTO1.getGender().equals(personDTO.getGender()))
                        .filter(personDTO1 -> (personDTO1.getBmi()-personDTO.getBmi()) <= 2)
                        .filter(personDTO1 -> Math.abs(Period.between(geboortedatum, LocalDate.parse(personDTO1.getBirthDay(), formatter2)).getYears()) < range)
                        .collect(Collectors.toList());
        if(result.size() > 0){
            persoonRepository.save(BaseMapper.map(personDTO,Persoon.class));
        }
        return result.size() > 0;
    }

    public String personen(){
        StringBuilder out = new StringBuilder();
        for(Persoon persoon :persoonRepository.findAll()){
            out.append(persoon.toString()).append("<br><hr>");
        }
        return out.toString();
    }
}
