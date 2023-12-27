package com.sbm.sevenrooms.repository;

import com.sbm.sevenrooms.domain.ResPosticketsItem;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the ResPosticketsItem entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ResPosticketsItemRepository extends JpaRepository<ResPosticketsItem, Long> {}
