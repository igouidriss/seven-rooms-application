package com.sbm.sevenrooms.service.mapper;

import com.sbm.sevenrooms.domain.Client;
import com.sbm.sevenrooms.domain.Reservation;
import com.sbm.sevenrooms.service.dto.ClientDTO;
import com.sbm.sevenrooms.service.dto.ReservationDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Reservation} and its DTO {@link ReservationDTO}.
 */
@Mapper(componentModel = "spring")
public interface ReservationMapper extends EntityMapper<ReservationDTO, Reservation> {
    @Mapping(target = "client", source = "client", qualifiedByName = "clientId")
    ReservationDTO toDto(Reservation s);

    @Named("clientId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    ClientDTO toDtoClientId(Client client);
}
