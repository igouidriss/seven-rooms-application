package com.sbm.sevenrooms.service.mapper;

import com.sbm.sevenrooms.domain.ResPosTicket;
import com.sbm.sevenrooms.domain.Reservation;
import com.sbm.sevenrooms.service.dto.ResPosTicketDTO;
import com.sbm.sevenrooms.service.dto.ReservationDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link ResPosTicket} and its DTO {@link ResPosTicketDTO}.
 */
@Mapper(componentModel = "spring")
public interface ResPosTicketMapper extends EntityMapper<ResPosTicketDTO, ResPosTicket> {
    @Mapping(target = "reservation", source = "reservation", qualifiedByName = "reservationId")
    ResPosTicketDTO toDto(ResPosTicket s);

    @Named("reservationId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    ReservationDTO toDtoReservationId(Reservation reservation);
}
