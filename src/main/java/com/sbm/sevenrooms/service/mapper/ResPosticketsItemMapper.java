package com.sbm.sevenrooms.service.mapper;

import com.sbm.sevenrooms.domain.ResPosticketsItem;
import com.sbm.sevenrooms.domain.Reservation;
import com.sbm.sevenrooms.service.dto.ResPosticketsItemDTO;
import com.sbm.sevenrooms.service.dto.ReservationDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link ResPosticketsItem} and its DTO {@link ResPosticketsItemDTO}.
 */
@Mapper(componentModel = "spring")
public interface ResPosticketsItemMapper extends EntityMapper<ResPosticketsItemDTO, ResPosticketsItem> {
    @Mapping(target = "reservation", source = "reservation", qualifiedByName = "reservationId")
    ResPosticketsItemDTO toDto(ResPosticketsItem s);

    @Named("reservationId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    ReservationDTO toDtoReservationId(Reservation reservation);
}
