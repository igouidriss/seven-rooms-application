package com.sbm.sevenrooms.repository;

import com.sbm.sevenrooms.domain.CustomField;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the CustomField entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CustomFieldRepository extends JpaRepository<CustomField, Long> {}
