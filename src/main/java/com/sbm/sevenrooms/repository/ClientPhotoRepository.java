package com.sbm.sevenrooms.repository;

import com.sbm.sevenrooms.domain.ClientPhoto;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the ClientPhoto entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ClientPhotoRepository extends JpaRepository<ClientPhoto, Long> {}
