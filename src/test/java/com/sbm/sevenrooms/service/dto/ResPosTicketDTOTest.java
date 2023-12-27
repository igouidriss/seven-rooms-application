package com.sbm.sevenrooms.service.dto;

import static org.assertj.core.api.Assertions.assertThat;

import com.sbm.sevenrooms.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class ResPosTicketDTOTest {

    @Test
    void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(ResPosTicketDTO.class);
        ResPosTicketDTO resPosTicketDTO1 = new ResPosTicketDTO();
        resPosTicketDTO1.setId(1L);
        ResPosTicketDTO resPosTicketDTO2 = new ResPosTicketDTO();
        assertThat(resPosTicketDTO1).isNotEqualTo(resPosTicketDTO2);
        resPosTicketDTO2.setId(resPosTicketDTO1.getId());
        assertThat(resPosTicketDTO1).isEqualTo(resPosTicketDTO2);
        resPosTicketDTO2.setId(2L);
        assertThat(resPosTicketDTO1).isNotEqualTo(resPosTicketDTO2);
        resPosTicketDTO1.setId(null);
        assertThat(resPosTicketDTO1).isNotEqualTo(resPosTicketDTO2);
    }
}
