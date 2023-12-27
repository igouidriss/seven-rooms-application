package com.sbm.sevenrooms.service.mapper;

import com.sbm.sevenrooms.domain.Client;
import com.sbm.sevenrooms.domain.CustomField;
import com.sbm.sevenrooms.service.dto.ClientDTO;
import com.sbm.sevenrooms.service.dto.CustomFieldDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link CustomField} and its DTO {@link CustomFieldDTO}.
 */
@Mapper(componentModel = "spring")
public interface CustomFieldMapper extends EntityMapper<CustomFieldDTO, CustomField> {
    @Mapping(target = "client", source = "client", qualifiedByName = "clientId")
    CustomFieldDTO toDto(CustomField s);

    @Named("clientId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    ClientDTO toDtoClientId(Client client);
}
