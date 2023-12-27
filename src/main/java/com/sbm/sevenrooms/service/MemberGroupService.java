package com.sbm.sevenrooms.service;

import com.sbm.sevenrooms.service.dto.MemberGroupDTO;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Service Interface for managing {@link com.sbm.sevenrooms.domain.MemberGroup}.
 */
public interface MemberGroupService {
    /**
     * Save a memberGroup.
     *
     * @param memberGroupDTO the entity to save.
     * @return the persisted entity.
     */
    MemberGroupDTO save(MemberGroupDTO memberGroupDTO);

    /**
     * Updates a memberGroup.
     *
     * @param memberGroupDTO the entity to update.
     * @return the persisted entity.
     */
    MemberGroupDTO update(MemberGroupDTO memberGroupDTO);

    /**
     * Partially updates a memberGroup.
     *
     * @param memberGroupDTO the entity to update partially.
     * @return the persisted entity.
     */
    Optional<MemberGroupDTO> partialUpdate(MemberGroupDTO memberGroupDTO);

    /**
     * Get all the memberGroups.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Page<MemberGroupDTO> findAll(Pageable pageable);

    /**
     * Get the "id" memberGroup.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<MemberGroupDTO> findOne(Long id);

    /**
     * Delete the "id" memberGroup.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
