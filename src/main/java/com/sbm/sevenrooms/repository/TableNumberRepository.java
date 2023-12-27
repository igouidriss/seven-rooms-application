package com.sbm.sevenrooms.repository;

import com.sbm.sevenrooms.domain.TableNumber;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the TableNumber entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TableNumberRepository extends JpaRepository<TableNumber, Long> {}
