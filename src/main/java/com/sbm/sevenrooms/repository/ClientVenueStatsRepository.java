package com.sbm.sevenrooms.repository;

import com.sbm.sevenrooms.domain.ClientVenueStats;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the ClientVenueStats entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ClientVenueStatsRepository extends JpaRepository<ClientVenueStats, Long> {}
