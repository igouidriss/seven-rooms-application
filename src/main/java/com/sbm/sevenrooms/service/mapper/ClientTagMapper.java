package com.sbm.sevenrooms.service.mapper;

import com.sbm.sevenrooms.domain.Client;
import com.sbm.sevenrooms.domain.ClientTag;
import com.sbm.sevenrooms.service.dto.ClientDTO;
import com.sbm.sevenrooms.service.dto.ClientTagDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link ClientTag} and its DTO {@link ClientTagDTO}.
 */
@Mapper(componentModel = "spring")
public interface ClientTagMapper extends EntityMapper<ClientTagDTO, ClientTag> {
    @Mapping(target = "client", source = "client", qualifiedByName = "clientId")
    ClientTagDTO toDto(ClientTag s);

    @Named("clientId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    ClientDTO toDtoClientId(Client client);
}
