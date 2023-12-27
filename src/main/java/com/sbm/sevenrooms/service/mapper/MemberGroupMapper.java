package com.sbm.sevenrooms.service.mapper;

import com.sbm.sevenrooms.domain.Client;
import com.sbm.sevenrooms.domain.MemberGroup;
import com.sbm.sevenrooms.service.dto.ClientDTO;
import com.sbm.sevenrooms.service.dto.MemberGroupDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link MemberGroup} and its DTO {@link MemberGroupDTO}.
 */
@Mapper(componentModel = "spring")
public interface MemberGroupMapper extends EntityMapper<MemberGroupDTO, MemberGroup> {
    @Mapping(target = "client", source = "client", qualifiedByName = "clientId")
    MemberGroupDTO toDto(MemberGroup s);

    @Named("clientId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    ClientDTO toDtoClientId(Client client);
}
