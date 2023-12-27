package com.sbm.sevenrooms.repository;

import com.sbm.sevenrooms.domain.ResTag;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the ResTag entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ResTagRepository extends JpaRepository<ResTag, Long> {}
