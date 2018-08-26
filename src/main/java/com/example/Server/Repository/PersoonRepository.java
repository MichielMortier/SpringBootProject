package com.example.Server.Repository;

import com.example.Server.Models.Persoon;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Michiel
 */
public interface PersoonRepository extends JpaRepository<Persoon, Long> {
}
