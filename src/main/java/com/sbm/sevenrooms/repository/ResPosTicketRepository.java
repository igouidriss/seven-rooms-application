package com.sbm.sevenrooms.repository;

import com.sbm.sevenrooms.domain.ResPosTicket;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the ResPosTicket entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ResPosTicketRepository extends JpaRepository<ResPosTicket, Long> {}
