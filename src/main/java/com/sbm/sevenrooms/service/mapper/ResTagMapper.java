package com.sbm.sevenrooms.service.mapper;

import com.sbm.sevenrooms.domain.ResTag;
import com.sbm.sevenrooms.domain.Reservation;
import com.sbm.sevenrooms.service.dto.ResTagDTO;
import com.sbm.sevenrooms.service.dto.ReservationDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link ResTag} and its DTO {@link ResTagDTO}.
 */
@Mapper(componentModel = "spring")
public interface ResTagMapper extends EntityMapper<ResTagDTO, ResTag> {
    @Mapping(target = "reservation", source = "reservation", qualifiedByName = "reservationId")
    ResTagDTO toDto(ResTag s);

    @Named("reservationId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    ReservationDTO toDtoReservationId(Reservation reservation);
}
