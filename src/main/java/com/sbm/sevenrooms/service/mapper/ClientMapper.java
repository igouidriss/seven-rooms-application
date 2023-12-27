package com.sbm.sevenrooms.service.mapper;

import com.sbm.sevenrooms.domain.Client;
import com.sbm.sevenrooms.domain.ClientPhoto;
import com.sbm.sevenrooms.domain.ClientVenueStats;
import com.sbm.sevenrooms.service.dto.ClientDTO;
import com.sbm.sevenrooms.service.dto.ClientPhotoDTO;
import com.sbm.sevenrooms.service.dto.ClientVenueStatsDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Client} and its DTO {@link ClientDTO}.
 */
@Mapper(componentModel = "spring")
public interface ClientMapper extends EntityMapper<ClientDTO, Client> {
    @Mapping(target = "clientPhoto", source = "clientPhoto", qualifiedByName = "clientPhotoId")
    @Mapping(target = "clientVenueStats", source = "clientVenueStats", qualifiedByName = "clientVenueStatsId")
    ClientDTO toDto(Client s);

    @Named("clientPhotoId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    ClientPhotoDTO toDtoClientPhotoId(ClientPhoto clientPhoto);

    @Named("clientVenueStatsId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    ClientVenueStatsDTO toDtoClientVenueStatsId(ClientVenueStats clientVenueStats);
}
