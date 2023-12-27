package com.sbm.sevenrooms.service.mapper;

import com.sbm.sevenrooms.domain.ClientPhoto;
import com.sbm.sevenrooms.service.dto.ClientPhotoDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link ClientPhoto} and its DTO {@link ClientPhotoDTO}.
 */
@Mapper(componentModel = "spring")
public interface ClientPhotoMapper extends EntityMapper<ClientPhotoDTO, ClientPhoto> {}
