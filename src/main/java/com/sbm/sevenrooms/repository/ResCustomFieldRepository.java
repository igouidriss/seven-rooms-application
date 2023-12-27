package com.sbm.sevenrooms.repository;

import com.sbm.sevenrooms.domain.ResCustomField;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the ResCustomField entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ResCustomFieldRepository extends JpaRepository<ResCustomField, Long> {}
