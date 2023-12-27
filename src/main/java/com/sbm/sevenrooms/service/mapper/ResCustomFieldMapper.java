package com.sbm.sevenrooms.service.mapper;

import com.sbm.sevenrooms.domain.ResCustomField;
import com.sbm.sevenrooms.domain.Reservation;
import com.sbm.sevenrooms.service.dto.ResCustomFieldDTO;
import com.sbm.sevenrooms.service.dto.ReservationDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link ResCustomField} and its DTO {@link ResCustomFieldDTO}.
 */
@Mapper(componentModel = "spring")
public interface ResCustomFieldMapper extends EntityMapper<ResCustomFieldDTO, ResCustomField> {
    @Mapping(target = "reservation", source = "reservation", qualifiedByName = "reservationId")
    ResCustomFieldDTO toDto(ResCustomField s);

    @Named("reservationId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    ReservationDTO toDtoReservationId(Reservation reservation);
}
