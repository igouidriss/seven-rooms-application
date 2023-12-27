package com.sbm.sevenrooms.service.mapper;

import com.sbm.sevenrooms.domain.ClientVenueStats;
import com.sbm.sevenrooms.service.dto.ClientVenueStatsDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link ClientVenueStats} and its DTO {@link ClientVenueStatsDTO}.
 */
@Mapper(componentModel = "spring")
public interface ClientVenueStatsMapper extends EntityMapper<ClientVenueStatsDTO, ClientVenueStats> {}
