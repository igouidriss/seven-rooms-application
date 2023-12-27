package com.sbm.sevenrooms.service.mapper;

import com.sbm.sevenrooms.domain.TableNumber;
import com.sbm.sevenrooms.service.dto.TableNumberDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link TableNumber} and its DTO {@link TableNumberDTO}.
 */
@Mapper(componentModel = "spring")
public interface TableNumberMapper extends EntityMapper<TableNumberDTO, TableNumber> {}
