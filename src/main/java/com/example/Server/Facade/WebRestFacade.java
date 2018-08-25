package com.example.Server.Facade;

import com.example.Server.dto.CSVPersoonDTO;
import com.example.Server.dto.PersonDTO;
import com.fasterxml.jackson.databind.MappingIterator;
import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import com.fasterxml.jackson.dataformat.csv.CsvSchema;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.File;
import java.io.PrintWriter;
import java.io.StringWriter;
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

    @Autowired
    public JavaMailSender emailSender;

    private final String HEADER="Er heeft zich een nieuwe testpersoon aangemeld!";
    private final String BODY="Beste Lotte Greet Mark Vercauteren\n\nEr heeft zich een nieuwe contact persoon aangemeld met volgende gegevens: \n\n";
    private final String EMAIL="michiel.mortier@gmail.com";

    public WebRestFacade(){}

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
        System.out.print("DIT ZIJN DE PERSONEN");
        System.out.println(personDTOS);
    }

    public <T> List<T> loadObjectList(Class<T> type, String fileName) {
        try {
            CsvSchema bootstrapSchema = CsvSchema.emptySchema().withHeader().withColumnSeparator(';');
            char c = bootstrapSchema.getColumnSeparator();
            CsvMapper mapper = new CsvMapper();
            File file = new ClassPathResource(fileName).getFile();
            MappingIterator<T> readValues =
                    mapper.reader(type).with(bootstrapSchema).readValues(file);
            System.out.println("geen fout opgetreden");
            List<T> lijst = readValues.readAll();
            System.out.println("geen fout opgetreden");
            return lijst;
        } catch (Exception e) {
            System.out.println("fout opgetreden!");
            StringWriter sw = new StringWriter();
            e.printStackTrace(new PrintWriter(sw));
            System.err.println(sw.toString());
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
            StringBuilder tekst = new StringBuilder(BODY + personDTO.toString() + "\n\nDeze gegevens zouden kunnen overeenkomen met volgende patiënt(en) : \n");
            for(PersonDTO personDTO1 : result){
                tekst.append(personDTO1.toString()).append("\n");
            }
            tekst.append("\nMet vriendelijke groeten \nMichiel Mortier");
            sendSimpleMessage(EMAIL,HEADER, tekst.toString());
        }
        return result.size() > 0;
    }

    private void sendSimpleMessage(
            String to, String subject, String text) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);
        emailSender.send(message);
    }
}
